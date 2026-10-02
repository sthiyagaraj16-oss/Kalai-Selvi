export interface PhotoItem {
  id: string;
  url: string;
  title: string;
  caption: string;
  tag: string;
  rotation: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  photoUrl: string;
  photoCaption: string;
}

export interface AppreciationItem {
  id: string;
  title: string;
  message: string;
  highlight: string;
  emoji: string;
}

export const BIRTHDAY_DATA = {
  friend: {
    name: 'Kalaiselvi',
    nickname: 'Kalai',
    dobDisplay: '02 October 2007',
    dobSecret: '02/10/2007',
    acceptedDobs: [
      '02/10/2007',
      '2/10/2007',
      '02-10-2007',
      '2-10-2007',
      '2007-10-02',
      '02102007',
      '2.10.2007',
      '02.10.2007',
      '2007/10/02'
    ],
    author: 'Thiyagu',
  },

  music: {
    title: "Kalai's Birthday Melody",
    artist: 'Childhood Memories Acoustic',
    src: '/audio/birthday-song.aac',
    secondarySrc: '/audio/until-i-found-you.mp3',
    secondaryTitle: 'Until I Found You (Acoustic Loop)',
    loopDefault: true,
  },

  hero: {
    badge: '02 October 🎀',
    heading: 'Happy Birthday, Kalaiselvi! 🎂💗',
    subheading:
      'To my childhood best friend — from all those silly little memories to the wonderful person you are today.',
    heroPhoto: '/images/IMG_20261002_075306.jpg',
    heroCaption: 'Celebrating the brightest smile & purest childhood memories 🌸',
  },

  childhoodStory: {
    sectionTag: '🕰️ OUR LITTLE TIME MACHINE',
    title: 'From School Benches to Cherished Memories 💗',
    intro:
      'Kalaiselvi, my dear best friend, I still remember our childhood days so clearly.',
    highlight: 'That Maggi Festival at School 🍜',
    paragraphs: [
      'You used to bring Maggi to school, and somehow it always felt like a little festival when you shared it with me. 😂 Even today, whenever I catch the aroma of hot noodles, my thoughts immediately travel back to those crowded school desks and the sheer happiness of sharing lunch with you.',
      'We used to play different games together, laugh about the most random things, and somehow turn ordinary school days into the happiest memories. Every recess felt too short, and every silly little joke could keep us laughing all afternoon.',
      'Those days were simple. No complicated problems. No big responsibilities. Just school, games, food, endless laughter, and us having the best time.',
      'I honestly miss that period of our life. Sometimes I wish we could turn back time for just one single day — to sit on those benches again, share that Maggi, and experience those silly, beautiful childhood moments once more.',
    ],
  },

  timeline: [
    {
      id: 'school-days',
      title: 'School Days 🏫',
      subtitle: 'Where it all began',
      description:
        'Those ordinary school days somehow became some of the most unforgettable memories. From walking into classes to counting down to recess, school was an adventure with you.',
      iconName: 'Sparkles',
      photoUrl: '/images/IMG_20261002_075325.jpg',
      photoCaption: 'Simpler days with endless smiles and zero worries 🌿',
    },
    {
      id: 'maggi-era',
      title: 'The Maggi Era 🍜',
      subtitle: 'The ultimate friendship delicacy',
      description:
        "Your Maggi wasn't just food... it was basically part of our friendship history! 😂 Opening that box felt like a celebration, and sharing every bite made school so special.",
      iconName: 'Utensils',
      photoUrl: '/images/IMG_20261002_075357.jpg',
      photoCaption: 'That look when you know food is about to make everything better! 💫',
    },
    {
      id: 'game-time',
      title: 'Game Time 🎮',
      subtitle: 'Playground champions',
      description:
        'Every game became a hundred times more fun because we played together. Win or lose, it was all about the adrenaline, the shouts, and running around until the bell rang.',
      iconName: 'Gamepad2',
      photoUrl: '/images/IMG_20261002_075428.jpg',
      photoCaption: 'Ready for any challenge, always full of energy and spark ⚡',
    },
    {
      id: 'unlimited-laughs',
      title: 'Unlimited Laughs 😂',
      subtitle: 'Giggling over absolutely nothing',
      description:
        'We could laugh at the smallest and most random things until our eyes teared up. No one else understood our inside jokes, and that was the best part of it.',
      iconName: 'Laugh',
      photoUrl: '/images/IMG_20261002_075251.jpg',
      photoCaption: 'Cool, carefree, and always making everyone laugh! 😎✨',
    },
    {
      id: 'good-old-days',
      title: 'The Good Old Days 🌸',
      subtitle: 'Priceless childhood treasures',
      description:
        'Life felt simple, and happiness didn\'t need much. Just good company, simple joys, and a friendship that stood the test of time.',
      iconName: 'HeartHandshake',
      photoUrl: '/images/IMG_20261002_075446.jpg',
      photoCaption: 'Cherished memories that stay warm in the heart forever 🌷',
    },
  ] as TimelineItem[],

  gallery: [
    {
      id: 'photo-1',
      url: '/images/IMG_20261002_075306.jpg',
      title: 'Radiant Smile',
      caption: 'One of those smiles that brightens any room instantly 🌸',
      tag: 'Cherished',
      rotation: '-rotate-2',
    },
    {
      id: 'photo-2',
      url: '/images/IMG_20261002_075251.jpg',
      title: 'Cool & Iconic',
      caption: 'Childhood memories hit differently with maximum style 😎✨',
      tag: 'Unforgettable',
      rotation: 'rotate-3',
    },
    {
      id: 'photo-3',
      url: '/images/IMG_20261002_075501.jpg',
      title: 'Traditional Grace',
      caption: 'Looking so graceful and elegant in pure golden silk ✨',
      tag: 'Timeless',
      rotation: '-rotate-1',
    },
    {
      id: 'photo-4',
      url: '/images/IMG_20261002_075357.jpg',
      title: 'Candid Charm',
      caption: "Look how much fun and natural charm you've always had 🌷",
      tag: 'Classics',
      rotation: 'rotate-2',
    },
    {
      id: 'photo-5',
      url: '/images/IMG_20261002_075517.jpg',
      title: 'Rooftop Breeze',
      caption: 'Some memories never really grow old... they just get sweeter 🕊️',
      tag: 'Moments',
      rotation: '-rotate-3',
    },
    {
      id: 'photo-6',
      url: '/images/IMG_20261002_075559.jpg',
      title: 'Garden Bloom',
      caption: 'Gentle moments, mehendi designs, and peaceful days 🌿',
      tag: 'Serenity',
      rotation: 'rotate-1',
    },
    {
      id: 'photo-7',
      url: '/images/IMG_20261002_075446.jpg',
      title: 'Festive Vibes',
      caption: "One of those special days I'll always remember with joy 💖",
      tag: 'Celebration',
      rotation: '-rotate-2',
    },
    {
      id: 'photo-8',
      url: '/images/IMG_20261002_075428.jpg',
      title: 'Unstoppable Spirit',
      caption: 'Standing strong with kindness, charm, and that classic smirk 😊',
      tag: 'Strength',
      rotation: 'rotate-2',
    },
    {
      id: 'photo-9',
      url: '/images/IMG_20261002_075325.jpg',
      title: 'Sunny Strolls',
      caption: 'Walking through life with warmth and gentle kindness ☀️',
      tag: 'Sunshine',
      rotation: '-rotate-1',
    },
    {
      id: 'photo-10',
      url: '/images/IMG_20261002_075614.jpg',
      title: 'Lakeside Reflections',
      caption: "Reflecting on how far we've come from those school days 🍃",
      tag: 'Reflections',
      rotation: 'rotate-3',
    },
  ] as PhotoItem[],

  appreciation: [
    {
      id: 'app-1',
      title: 'A Lifetime of Memories',
      message:
        "You've been part of my life for so long that some of my oldest memories automatically include you. Whenever I look back at childhood, you're right there in the highlights.",
      highlight: 'Built on years of pure friendship',
      emoji: '🧸',
    },
    {
      id: 'app-2',
      title: 'Growing Together',
      message:
        "Not every friendship gets to grow alongside someone from childhood, and I'm genuinely grateful that ours did. Through every grade and every new phase, having you as a friend was a blessing.",
      highlight: 'Grateful for every year',
      emoji: '🌱',
    },
    {
      id: 'app-3',
      title: 'Smiles that Linger',
      message:
        "From silly school moments to random conversations, you've been part of a lot of memories that still make me smile whenever I think of them.",
      highlight: 'A constant reason to smile',
      emoji: '🌸',
    },
    {
      id: 'app-4',
      title: 'The Same Kind Heart',
      message:
        'I hope you always stay the same kind, fun, and wonderful person you are. Your warm nature and ability to make things feel easy and light is truly special.',
      highlight: 'Never lose your spark',
      emoji: '✨',
    },
    {
      id: 'app-5',
      title: 'Wishes for Your Future',
      message:
        'Whatever changes life brings, I hope you always have reasons to smile, people who genuinely care about you, and the courage to chase every dream you want.',
      highlight: 'May all your dreams come true',
      emoji: '🌈',
    },
    {
      id: 'app-6',
      title: 'Simply You',
      message:
        "Keep being you, Kalaiselvi. That's already pretty special. Don't ever change for the world, because the world needs more people like you.",
      highlight: 'One in a million best friend',
      emoji: '💖',
    },
  ] as AppreciationItem[],

  nostalgiaQuotes: [
    'Remember when school felt like the whole world? 🎒',
    'Remember how we could have fun with absolutely nothing? ✨',
    'Those simple days were actually priceless. 🌸',
    'Maggi + games + laughter = childhood. 🍜',
    'Some memories really deserve a replay button. ⏪',
    'Sharing that one snack box made us the happiest people alive! 🍱',
    'No exams could beat the pure relief and joy of the final school bell! 🔔',
    "We didn't need gadgets or plans — just talking nonsense was the best part of the day! 💫",
  ],

  secretSurprise: {
    sectionTag: 'ONE LAST THING... 👀',
    title: 'A Little Something Before You Go',
    subtitle: 'A sealed surprise box straight from your childhood friend',
    buttonPrompt: 'Open Your Gift Box 🎁',
    letterGreeting: 'Kalaiselvi,',
    letterLines: [
      'Thank you for being part of my childhood and for giving me so many memories that I can still smile about today.',
      'We may grow older, life may become busier, and things may change...',
      'but some childhood memories will always have a special place.',
      'I hope this birthday brings you lots of happiness, laughter, good people, and beautiful memories.',
      'Happy Birthday once again! 🎂💗',
    ],
    motto: [
      'Stay happy. ☀️',
      'Stay crazy. 🤪',
      'Stay awesome. 💫',
    ],
    closing: '— Your Childhood Friend,',
    signatureName: 'Thiyagu 😁',
  },
};

