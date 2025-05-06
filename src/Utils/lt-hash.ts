import { hkdf } from './crypto'

const HASH_LENGTH = 128

type Mutation = string
type MutationList = Mutation[]
type MutationHash = Promise<ArrayBuffer> // important: now it's Promise<ArrayBuffer>

class LTHash {
  salt: string

  constructor(salt: string) {
    this.salt = salt
  }

  async add(currentHash: MutationHash, mutations: MutationList): Promise<ArrayBuffer> {
    let resolved = await currentHash
    for (const item of mutations) {
      resolved = await this._addSingle(resolved, item)
    }
    return resolved
  }

  async subtract(currentHash: MutationHash, mutations: MutationList): Promise<ArrayBuffer> {
    let resolved = await currentHash
    for (const item of mutations) {
      resolved = await this._subtractSingle(resolved, item)
    }
    return resolved
  }

  async subtractThenAdd(
    baseHash: MutationHash,
    toAdd: MutationList,
    toSubtract: MutationList
  ): Promise<ArrayBuffer> {
    const subtracted = await this.subtract(baseHash, toSubtract)
    return this.add(Promise.resolve(subtracted), toAdd)
  }

  private async _addSingle(hash: ArrayBuffer, mutation: Mutation): Promise<ArrayBuffer> {
    const hkdfResult = await hkdf(Buffer.from(mutation), HASH_LENGTH, { info: this.salt })
    const mutationBuffer = new Uint8Array(hkdfResult).buffer
    return this.performPointwiseWithOverflow(hash, mutationBuffer, (a, b) => a + b)
  }

  private async _subtractSingle(hash: ArrayBuffer, mutation: Mutation): Promise<ArrayBuffer> {
    const hkdfResult = await hkdf(Buffer.from(mutation), HASH_LENGTH, { info: this.salt })
    const mutationBuffer = new Uint8Array(hkdfResult).buffer
    return this.performPointwiseWithOverflow(hash, mutationBuffer, (a, b) => a - b)
  }

  private performPointwiseWithOverflow(
    bufferA: ArrayBuffer,
    bufferB: ArrayBuffer,
    operation: (a: number, b: number) => number
  ): ArrayBuffer {
    const viewA = new DataView(bufferA)
    const viewB = new DataView(bufferB)
    const result = new ArrayBuffer(viewA.byteLength)
    const resultView = new DataView(result)

    for (let offset = 0; offset < viewA.byteLength; offset += 2) {
      const a = viewA.getUint16(offset, true)
      const b = viewB.getUint16(offset, true)
      resultView.setUint16(offset, operation(a, b), true)
    }

    return result
  }
}

export const LT_HASH_ANTI_TAMPERING = new LTHash('WhatsApp Patch Integrity')
