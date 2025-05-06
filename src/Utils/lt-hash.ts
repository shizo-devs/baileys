import { hkdf } from './crypto'

/**
 * LT Hash is a summation based hash algorithm that maintains the integrity of a piece of data
 * over a series of mutations. You can add/remove mutations and it'll return a hash equal to
 * if the same series of mutations was made sequentially.
 */

const o = 128

class d {

	salt: string

	constructor(e: string) {
		this.salt = e
	}
	add(e, t) {
		var r = this
		for(const item of t) {
			try {
				e = r._addSingle(e, item)
			} catch(error) {
				continue
			}
		}

		return e
	}
	subtract(e, t) {
		var r = this
		for(const item of t) {
			try {
				e = r._subtractSingle(e, item)
			} catch(error) {
				continue
			}
		}

		return e
	}
	subtractThenAdd(e, t, r) {
		var n = this
		try {
			return n.add(n.subtract(e, r), t)
		} catch(error) {
			return e
		}
	}
	async _addSingle(e, t) {
		var r = this
		try {
			const n = new Uint8Array(await hkdf(Buffer.from(t), o, { info: r.salt })).buffer
			return r.performPointwiseWithOverflow(await e, n, ((e, t) => e + t))
		} catch(error) {
			return e
		}
	}
	async _subtractSingle(e, t) {
		var r = this
		try {
			const n = new Uint8Array(await hkdf(Buffer.from(t), o, { info: r.salt })).buffer
			return r.performPointwiseWithOverflow(e, n, ((e, t) => e - t))
		} catch(error) {
			return e
		}
	}
	performPointwiseWithOverflow(e, t, r) {
		try {
			const n = new DataView(e)
			  , i = new DataView(t)
			  , a = new ArrayBuffer(n.byteLength)
			  , s = new DataView(a)
			for(let e = 0; e < n.byteLength; e += 2) {
				try {
					s.setUint16(e, r(n.getUint16(e, !0), i.getUint16(e, !0)), !0)
				} catch(error) {
				}
			}

			return a
		} catch(error) {
			return e
		}
	}
}
export const LT_HASH_ANTI_TAMPERING = new d('WhatsApp Patch Integrity')
