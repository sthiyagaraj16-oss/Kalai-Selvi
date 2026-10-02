# Kalaiselvi's Birthday Surprise Website 🎂✨
*Crafted with childhood memories by her best friend Thiyagu*

A personalized, interactive digital birthday experience built with React, Vite, Tailwind CSS, and Canvas Confetti.

---

## 🌟 Highlights & Features
1. **Private Date of Birth Unlock Screen**:
   - Secret Date of Birth: `02/10/2007` (2nd October 2007).
   - Playful error message for wrong dates (*"Hmm... that's not the secret date ✨ Try again!"*).
   - Secret date is never exposed in the UI.
2. **Opening Curtain**:
   - Soft pink glowing gradient with particles: *"Hey Kalaiselvi... 💗 Someone saved a little piece of childhood just for you."*
   - Unlocks the main experience and starts background music on user gesture.
3. **Background Music Player (Loop Mode Active)**:
   - Configured with continuous infinite loop (`audio.loop = true`).
   - Plays the uploaded acoustic birthday melody by default.
   - Includes play/pause, mute/unmute, and animated visualizer bars.
4. **Hero Section & Interactive Candle**:
   - Headings: *"Happy Birthday, Kalaiselvi! 🎂💗"*
   - Featuring her radiant portrait.
   - Interactive birthday cake with a flickering candle that can be clicked to make a wish & blow out!
5. **Childhood Time Machine ("Our Little Time Machine 🕰️💗")**:
   - Highlights the unforgettable Maggi sharing tradition at school, recess games, and innocent carefree laughs.
6. **Milestone Memory Timeline**:
   - 5 milestones paired with real photos of Kalaiselvi:
     - School Days 🏫
     - The Maggi Era 🍜
     - Game Time 🎮
     - Unlimited Laughs 😂
     - The Good Old Days 🌸
7. **Polaroid Photo Album ("Memories I Still Keep 💗")**:
   - Polaroid cards with jaunty tilts and washi-tape aesthetics.
   - Fullscreen Lightbox with zoom, previous/next buttons, and heart reaction triggers.
8. **Heartfelt Appreciation**:
   - 6 warm, friendship-focused messages celebrating her presence in Thiyagu's life.
9. **Interactive Nostalgia Button**:
   - *"Press this if you miss school days 🥹"* randomly shows nostalgic childhood truths with sparkles!
10. **Secret 3D Gift Box**:
    - Interactive 3D gift box with ribbon.
    - Unboxing triggers a confetti cannon and reveals the heartfelt letter signed by Thiyagu.
11. **Magic Sparkle Cursor**:
    - HTML5 Canvas particle trail for mouse and touch interactions.

---

## 📂 Project Structure & Customization

- **All Text, Dates, & Memories**:
  - Edit [src/config/birthdayData.ts](file:///C:/Users/truth/.gemini/antigravity/scratch/kalai-birthday/src/config/birthdayData.ts) to easily change any message, photo caption, or date.
- **Photos**:
  - Photos are located in `public/images/`.
  - Replace or add any photo anytime.
- **Audio & Music**:
  - Audio is located in `public/audio/birthday-song.aac`.
  - Loop mode is enabled automatically.

---

## 🚀 Running the Website

```bash
# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

