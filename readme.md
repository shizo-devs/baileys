# 🚀 BAILEYS-ELITE
<div align="center">

  <img src="https://raw.githubusercontent.com/shizothetechie/database/refs/heads/main/image/shizo.png" width="350px">

  <br>
  
  <div style="background: linear-gradient(90deg, #6366F1, #3B82F6, #2DD4BF); padding: 8px; border-radius: 10px; margin: 15px 0;">
    <span style="font-size: 18px; font-weight: bold; color: white;">🔥 Ultimate WhatsApp Web API Experience 🥵</span>
  </div>
  
  ![TypeScript](https://img.shields.io/badge/-%F0%9F%94%B7%20TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white&labelColor=0D1117)
  ![JavaScript](https://img.shields.io/badge/-%F0%9F%94%B8%20JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=F7DF1E&labelColor=0D1117)
  ![WhatsApp](https://img.shields.io/badge/-%F0%9F%92%AC%20WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white&labelColor=0D1117)
  ![NPM](https://img.shields.io/badge/-%F0%9F%93%A6%20npm-CB3837?style=for-the-badge&logo=npm&logoColor=white&labelColor=0D1117)
</div>

<br>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=60&section=header" width="100%">
</div>

<div style="border-left: 4px solid #3B82F6; padding-left: 15px; margin: 25px 0;">
  <h2>⚡️ Supercharged WhatsApp API 🌟</h2>
  <p><i>Elevate your messaging experience with the most advanced WhatsApp Web API solution available</i></p>
</div>

---

## 🔮 | WHY BAILEYS-ELITE?

<div style="display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 10px; margin: 20px 0;">
  <div style="background: rgba(45, 212, 191, 0.1); border-radius: 10px; padding: 15px; width: 180px; text-align: center;">
    <div style="font-weight: bold;">⚡ Lightning Fast</div>
  </div>
  <div style="background: rgba(99, 102, 241, 0.1); border-radius: 10px; padding: 15px; width: 180px; text-align: center;">
    <div style="font-weight: bold;">🛡️ Secure</div>
  </div>
  <div style="background: rgba(244, 114, 182, 0.1); border-radius: 10px; padding: 15px; width: 180px; text-align: center;">
    <div style="font-weight: bold;">🧩 Feature-Rich</div>
  </div>
  <div style="background: rgba(234, 179, 8, 0.1); border-radius: 10px; padding: 15px; width: 180px; text-align: center;">
    <div style="font-weight: bold;">🔄 Active Development</div>
  </div>
</div>

## 📌 | IMPORTANT NOTE

<div style="background: linear-gradient(90deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05)); border-left: 4px solid #EF4444; padding: 15px; border-radius: 5px; margin: 20px 0;">
  <p>⚠️ The original repository was initially removed by its creator and subsequently taken over by <a href="https://github.com/WhiskeySockets" style="color: #60A5FA; text-decoration: none; font-weight: bold;">WhiskeySockets</a>. This enhanced version includes numerous improvements and powerful new features designed to transform your WhatsApp development experience.</p>
</div>

## 💫 | INSTALLATION

<div style="background: rgba(17, 24, 39, 0.6); border-radius: 8px; padding: 20px; margin: 20px 0;">

### 📂 In package.json:
```json
"dependencies": {
    "baileys-elite": "*"
}
```

### ⚙️ Terminal Installation:
```bash
npm install baileys-elite
```

### 🔌 Import:
<div style="display: flex; gap: 20px; flex-wrap: wrap;">
<div style="background: rgba(6, 182, 212, 0.1); border-radius: 5px; padding: 10px; flex: 1;">

```typescript
// ESM 
import makeWASocket from 'baileys-elite'
```
</div>
<div style="background: rgba(234, 179, 8, 0.1); border-radius: 5px; padding: 10px; flex: 1;">

```javascript
// CommonJS
const { default: makeWASocket } = require("baileys-elite")
```
</div>
</div>
</div>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&height=2&section=header" width="100%">
</div>

## ✨ | FEATURE SHOWCASE

<div style="background: linear-gradient(45deg, rgba(124, 58, 237, 0.05), rgba(139, 92, 246, 0.05)); border-radius: 10px; padding: 15px; margin: 20px 0;">

### 🎀 Enhanced Features Matrix

| Feature | Description | Status |
|---------|-------------|--------|
| 🔊 **Channel Messaging** | Send & manage WhatsApp channel content | ✅ |
| 🎛️ **Interactive Messages** | Create rich button-based experiences | ✅ |
| 🤖 **AI Message Icon** | Brand your bot messages with AI icon | ✅ |
| 🖼️ **Enhanced Media** | Uncropped profile pictures & optimized media | ✅ |
| 🔐 **Custom Pairing** | Personalized device pairing codes | ✅ |
| 🔧 **Performance Optimizations** | Cleaner logs & improved signal handling | ✅ |
| 📱 **Cross-Platform** | Works on all NodeJS supported platforms | ✅ |

</div>

<br>

<div style="display: flex; justify-content: center; margin: 30px 0;">
  <div style="background: linear-gradient(135deg, #0EA5E9, #2DD4BF); color: white; padding: 12px 25px; border-radius: 25px; font-weight: bold; font-size: 16px;">🌱 SMALL BUT POWERFUL FEATURES 🎉</div>
</div>

## 📰 | NEWSLETTER MANAGEMENT

<details>
<summary style="background: linear-gradient(90deg, #4F46E5, #7C3AED); color: white; padding: 10px 15px; border-radius: 5px; cursor: pointer; font-weight: bold;">📚 Expand Newsletter Features</summary>

<div style="padding: 15px; background: rgba(79, 70, 229, 0.05); border-radius: 0 0 10px 10px; margin-top: -5px;">

### 📊 Get Newsletter Info
```typescript
// By invite
const metadata = await sock.newsletterMetadata("invite", "xxxxx")
// By JID
const metadata = await sock.newsletterMetadata("jid", "abcd@newsletter")
console.log(metadata)
```

### 📝 Update Newsletter Content
```typescript
// Update description
await sock.newsletterUpdateDescription("abcd@newsletter", "New Description")

// Update name
await sock.newsletterUpdateName("abcd@newsletter", "New Name")

// Update picture
await sock.newsletterUpdatePicture("abcd@newsletter", buffer)

// Remove picture
await sock.newsletterRemovePicture("abcd@newsletter")
```

### 🔔 Notification Management
```typescript
// Unmute newsletter
await sock.newsletterUnmute("abcd@newsletter")

// Mute newsletter
await sock.newsletterMute("abcd@newsletter")
```

### 🔄 Newsletter Management
```typescript
// Create new newsletter
const metadata = await sock.newsletterCreate("Newsletter Name", "Newsletter Description")
console.log(metadata)

// Delete newsletter
await sock.newsletterDelete("abcd@newsletter")

// Follow newsletter
await sock.newsletterFollow("abcd@newsletter")

// Unfollow newsletter
await sock.newsletterUnfollow("abcd@newsletter")
```

### 😀 Engagement Features
```typescript
// Send reaction to newsletter post
// Get ID from message URL: https://whatsapp.com/channel/xxxxx/175
const id = "175"
await sock.newsletterReactMessage("abcd@newsletter", id, "🥳")
```

</div>
</details>

## 🎛️ | INTERACTIVE MESSAGING

<details>
<summary style="background: linear-gradient(90deg, #EC4899, #F43F5E); color: white; padding: 10px 15px; border-radius: 5px; cursor: pointer; font-weight: bold;">🎯 Expand Button & Interactive Features</summary>

<div style="padding: 15px; background: rgba(236, 72, 153, 0.05); border-radius: 0 0 10px 10px; margin-top: -5px;">

### 📝 Text Buttons
```typescript
const buttons = [
  { buttonId: 'id1', buttonText: { displayText: 'Button 1' }, type: 1 },
  { buttonId: 'id2', buttonText: { displayText: 'Button 2' }, type: 1 }
]

const buttonMessage = {
    text: "Hi it's button message",
    footer: 'Hello World',
    buttons,
    headerType: 1,
    viewOnce: true
}

await sock.sendMessage(id, buttonMessage, { quoted: null })
```

### 🖼️ Image Buttons
```typescript
const buttons = [
  { buttonId: 'id1', buttonText: { displayText: 'Button 1' }, type: 1 },
  { buttonId: 'id2', buttonText: { displayText: 'Button 2' }, type: 1 }
]

const buttonMessage = {
    image: { url: "https://example.com/abcd.jpg" }, // image: buffer or path
    caption: "Hi it's button message with image",
    footer: 'Hello World',
    buttons,
    headerType: 1,
    viewOnce: true
}

await sock.sendMessage(id, buttonMessage, { quoted: null })
```

### 🎬 Video Buttons
```typescript
const buttons = [
  { buttonId: 'id1', buttonText: { displayText: 'Button 1' }, type: 1 },
  { buttonId: 'id2', buttonText: { displayText: 'Button 2' }, type: 1 }
]

const buttonMessage = {
    video: { url: "https://example.com/abcd.mp4" }, // video: buffer or path
    caption: "Hi it's button message with video",
    footer: 'Hello World',
    buttons,
    headerType: 1,
    viewOnce: true
}

await sock.sendMessage(id, buttonMessage, { quoted: null })
```

### 🔄 Advanced Interactive Messages
```typescript
const interactiveButtons = [
     {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
             display_text: "Quick Reply",
             id: "ID"
        })
     },
     {
        name: "cta_url",
        buttonParamsJson: JSON.stringify({
             display_text: "Tap Here!",
             url: "https://www.example.com/"
        })
     },
     {
        name: "cta_copy",
        buttonParamsJson: JSON.stringify({
             display_text: "Copy Code",
             id: "12345",
             copy_code: "12345"
        })
     }
]

const interactiveMessage = {
    text: "Hello World!",
    title: "this is the title",
    footer: "this is the footer",
    interactiveButtons
}

await sock.sendMessage(id, interactiveMessage, { quoted: null })
```

### 🖼️ Rich Media Interactive Messages
```typescript
const interactiveButtons = [
     {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
             display_text: "Quick Reply",
             id: "ID"
        })
     },
     {
        name: "cta_url",
        buttonParamsJson: JSON.stringify({
             display_text: "Visit Website",
             url: "https://www.example.com/"
        })
     }
]

// With Image
const imageInteractiveMessage = {
    image: { url: "https://example.com/abcd.jpg" },
    caption: "Check out this amazing photo!",
    title: "Photo Showcase",
    footer: "Tap a button below",
    interactiveButtons
}

await sock.sendMessage(id, imageInteractiveMessage, { quoted: null })

// With Video
const videoInteractiveMessage = {
    video: { url: "https://example.com/abcd.mp4" },
    caption: "Watch this awesome video!",
    title: "Video Showcase",
    footer: "Tap a button below",
    interactiveButtons
}

await sock.sendMessage(id, videoInteractiveMessage, { quoted: null })
```

</div>
</details>

## 🤖 | AI MESSAGING

<div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.1)); border-radius: 10px; padding: 20px; margin: 20px 0;">

### AI Icon Feature
```typescript
// Simply add "ai: true" to display AI icon with your message
await sock.sendMessage(id, { text: "Hello! I'm your AI assistant.", ai: true })
```

<div style="background: rgba(16, 185, 129, 0.2); border-radius: 5px; padding: 10px; margin-top: 15px;">
  <strong>💡 Pro Tip:</strong> AI icons make your bot messages stand out and indicate automated responses to users.
</div>

</div>

## 🔐 | CUSTOM PAIRING

<div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(217, 119, 6, 0.1)); border-radius: 10px; padding: 20px; margin: 20px 0;">

### Custom Code Implementation
```typescript
if(usePairingCode && !sock.authState.creds.registered) {
    const phoneNumber = await question('Please enter your mobile phone number:\n')
    const custom = "SH1Z0D3V" // must be 8 digits, can be letters or numbers
    const code = await sock.requestPairingCode(phoneNumber, custom)
    console.log(`Pairing code: ${code?.match(/.{1,4}/g)?.join('-') || code}`)
}
```

<div style="background: rgba(245, 158, 11, 0.2); border-radius: 5px; padding: 10px; margin-top: 15px;">
  <strong>🔒 Security Note:</strong> Custom pairing codes enhance security while providing a personalized experience.
</div>

</div>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&height=2&section=header" width="100%">
</div>

## 🛠️ | QUICK IMPLEMENTATION GUIDE

<div style="display: flex; flex-wrap: wrap; gap: 15px; margin: 20px 0;">
  <div style="flex: 1; min-width: 250px; background: rgba(59, 130, 246, 0.05); border-radius: 10px; padding: 15px;">
    <h3>🚀 Step 1: Install</h3>
    <p>Add baileys-elite to your project using npm</p>
    <div style="background: rgba(0, 0, 0, 0.2); padding: 10px; border-radius: 5px;">
      <code>npm install baileys-elite</code>
    </div>
  </div>
  
  <div style="flex: 1; min-width: 250px; background: rgba(59, 130, 246, 0.05); border-radius: 10px; padding: 15px;">
    <h3>🔄 Step 2: Import</h3>
    <p>Import the library into your project</p>
    <div style="background: rgba(0, 0, 0, 0.2); padding: 10px; border-radius: 5px;">
      <code>import makeWASocket from 'baileys-elite'</code>
    </div>
  </div>
  
  <div style="flex: 1; min-width: 250px; background: rgba(59, 130, 246, 0.05); border-radius: 10px; padding: 15px;">
    <h3>⚙️ Step 3: Configure</h3>
    <p>Set up your WhatsApp connection</p>
    <div style="background: rgba(0, 0, 0, 0.2); padding: 10px; border-radius: 5px;">
      <code>const sock = makeWASocket({...})</code>
    </div>
  </div>
  
  <div style="flex: 1; min-width: 250px; background: rgba(59, 130, 246, 0.05); border-radius: 10px; padding: 15px;">
    <h3>🚀 Step 4: Implement</h3>
    <p>Start using the enhanced features</p>
    <div style="background: rgba(0, 0, 0, 0.2); padding: 10px; border-radius: 5px;">
      <code>await sock.sendMessage(id, {...})</code>
    </div>
  </div>
</div>

## 🐛 | REPORTING ISSUES

<div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.05), rgba(220, 38, 38, 0.05)); border-radius: 10px; padding: 20px; margin: 20px 0;">
  <h3>Found a bug? Have a suggestion?</h3>
  <p>If you encounter any issues while using this repository, please feel free to open a <a href="https://github.com/shizo-devs/baileys/issues" style="color: #60A5FA; text-decoration: none; font-weight: bold;">new issue</a>.</p>
  
  <div style="display: flex; align-items: center; gap: 10px; margin-top: 15px; background: rgba(239, 68, 68, 0.1); padding: 10px; border-radius: 5px;">
    <span style="font-size: 24px;">👾</span>
    <span>Our team actively monitors and responds to all issues.</span>
  </div>
</div>

## 📝 | NOTES

<div style="background: linear-gradient(135deg, rgba(107, 114, 128, 0.05), rgba(75, 85, 99, 0.05)); border-radius: 10px; padding: 20px; margin: 20px 0;">
  <p>Everything other than the modifications mentioned above remains the same as the original repository. You can check out the original repository at <a href="https://github.com/WhiskeySockets/Baileys" style="color: #60A5FA; text-decoration: none; font-weight: bold;">WhiskeySockets</a>.</p>
</div>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=footer" width="100%">
</div>

<div align="center" style="margin-top: -40px;">
  <div style="background: linear-gradient(90deg, #6366F1, #3B82F6, #2DD4BF); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 24px; font-weight: bold; margin-bottom: 10px;">
    ⭐ STAR THIS REPOSITORY ⭐
  </div>
  
  <div style="display: flex; justify-content: center; gap: 10px; margin: 20px 0;">
    <div style="background: rgba(6, 182, 212, 0.1); border-radius: 5px; padding: 8px 15px;">
      <span style="font-size: 20px;">👨‍💻</span> <span>Developers</span>
    </div>
    <div style="background: rgba(16, 185, 129, 0.1); border-radius: 5px; padding: 8px 15px;">
      <span style="font-size: 20px;">🤖</span> <span>Bot Creators</span>
    </div>
    <div style="background: rgba(245, 158, 11, 0.1); border-radius: 5px; padding: 8px 15px;">
      <span style="font-size: 20px;">🚀</span> <span>Innovators</span>
    </div>
  </div>
  
  <p style="font-style: italic; max-width: 600px; margin: 0 auto;">Powered by Baileys-Elite - The Ultimate WhatsApp Web API Experience</p> 
</div>
