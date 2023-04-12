const adviceMessages = [
  "Take time to relax and recharge.",
  "Focus on the present moment, instead of worrying about the future or dwelling on the past.",
  "Be kind to yourself and practice self-compassion.",
  "Don't be afraid to ask for help when you need it.",
  "Make time for things that bring you joy and fulfillment.",
  "Set realistic goals and celebrate your progress along the way.",
  "Practice gratitude and appreciate the good things in your life.",
  "Challenge negative thoughts and practice positive self-talk.",
  "Take care of your physical health by eating well, exercising regularly, and getting enough rest.",
  "Be mindful of the company you keep and surround yourself with positive influences.",
];

const adviceMessages2 = [
  "Take small steps towards your goals every day.",
  "Be patient with yourself and trust the process.",
  "Don't compare yourself to others - everyone has their own journey.",
  "Learn from your mistakes and use them as opportunities for growth.",
  "Spend time in nature and connect with the world around you.",
  "Practice mindfulness and be fully present in the moment.",
  "Be open to new experiences and embrace change.",
  "Take responsibility for your actions and their consequences.",
  "Surround yourself with positive, supportive people who lift you up.",
  "Practice forgiveness - both for yourself and others.",
];

const adviceMessages3 = [
  "Keep an open mind and consider different perspectives.",
  "Listen to your intuition and trust your instincts.",
  "Be honest with yourself and others, even when it's difficult.",
  "Invest in your personal and professional development.",
  "Don't be afraid to take calculated risks and try new things.",
  "Cultivate a sense of gratitude and appreciate the blessings in your life.",
  "Stay organized and prioritize your time effectively.",
  "Remember to take breaks and allow yourself time to rest and recharge.",
  "Practice active listening and strive to understand others.",
  "Be kind and compassionate towards yourself and others."
];

const astrologicalSigns = [
  {
    name: "Aries",
    element: "Fire",
    rulingPlanet: "Mars",
    startDate: "Mar 21",
    endDate: "Apr 19",
    zodiacSymbol: "Ram",
    birthstone: "Diamond",
    fallStone: "Bloodstone",
    traits: [
      "energetic",
      "confident",
      "courageous",
      "impulsive",
      "impatient"
    ]
  },
  {
    name: "Taurus",
    element: "Earth",
    rulingPlanet: "Venus",
    startDate: "Apr 20",
    endDate: "May 20",
    zodiacSymbol: "Bull",
    birthstone: "Emerald",
    fallStone: "Sapphire",
    "traits": [
      "patient",
      "reliable",
      "persistent",
      "sensual",
      "possessive"
    ]
  },
  {
    name: "Gemini",
    element: "Air",
    rulingPlanet: "Mercury",
    startDate: "May 21",
    endDate: "Jun 20",
    zodiacSymbol: "Twins",
    birthstone: "Pearl",
    fallStone: "Alexandrite",
    "traits": [
      "adaptable",
      "curious",
      "sociable",
      "indecisive",
      "restless"
    ]
  },
  {
    name: "Cancer",
    element: "Water",
    rulingPlanet: "Moon",
    startDate: "Jun 21",
    endDate: "Jul 22",
    zodiacSymbol: "Crab",
    birthstone: "Ruby",
    fallStone: "Sapphire",
    "traits": [
      "emotional",
      "intuitive",
      "nurturing",
      "moody",
      "possessive"
    ]
  },
  {
    name: "Leo",
    element: "Fire",
    rulingPlanet: "Sun",
    startDate: "Jul 23",
    endDate: "Aug 22",
    zodiacSymbol: "Lion",
    birthstone: "Peridot",
    fallStone: "Sardonyx",
    "traits": [
      "confident",
      "generous",
      "passionate",
      "dramatic",
      "attention-seeking"
    ]
  },
  {
    name: "Virgo",
    element: "Earth",
    rulingPlanet: "Mercury",
    startDate: "Aug 23",
    endDate: "Sep 22",
    zodiacSymbol: "Maiden",
    birthstone: "Sapphire",
    fallStone: "Peridot",
    "traits": [
      "practical",
      "analytical",
      "detail-oriented",
      "reserved",
      "critical"
    ]
  },
  {
    name: "Libra",
    element: "Air",
    rulingPlanet: "Venus",
    startDate: "Sep 23",
    endDate: "Oct 22",
    zodiacSymbol: "Scales",
    birthstone: "Opal",
    fallStone: "Tourmaline",
    traits: [
      "diplomatic", 
      "charming", 
      "fair-minded", 
      "indecisive", 
      "people-pleasing"
    ]
  },
  {
    name: "Scorpio",
    element: "Water",
    rulingPlanet: "Mars and Pluto",
    startDate: "Oct 23",
    endDate: "Nov 21",
    zodiacSymbol: "Scorpion",
    birthstone: "Topaz",
    fallStone: "Citrine",
    traits: [
      "intense", 
      "passionate", 
      "intuitive", 
      "secretive", 
      "jealous"  
    ]
  },
  {
    name: "Sagittarius",
    element: "Fire",
    rulingPlanet: "Jupiter",
    startDate: "Nov 22",
    endDate: "Dec 21",
    zodiacSymbol: "Archer",
    birthstone: "Turquoise",
    fallStone: "Blue Topaz",
    traits: [
      "adventurous",
      "optimistic",
      "philosophical",
      "reckless",
      "tactless" 
    ]
  },
  {
    name: "Capricorn",
    element: "Earth",
    rulingPlanet: "Saturn",
    startDate: "Dec 22",
    endDate: "Jan 19",
    zodiacSymbol: "Goat",
    birthstone: "Garnet",
    fallStone: "Ruby",
    traits: [
      "responsible",
      "disciplined",
      "patient",
      "pessimistic",
      "stubborn" 
    ]
  },
  {
    name: "Aquarius",
    element: "Air",
    rulingPlanet: "Uranus and Saturn",
    startDate: "Jan 20",
    endDate: "Feb 18",
    zodiacSymbol: "Water Bearer",
    birthstone: "Amethyst",
    fallStone: "Garnet",
    traits: [
      "independent",
      "unconventional",
      "intellectual",
      "detached",
      "unpredictable" 
    ]
  },
  {
    name: "Pisces",
    element: "Water",
    rulingPlanet: "Neptune and Jupiter",
    startDate: "Feb 19",
    endDate: "Mar 20",
    zodiacSymbol: "Fish",
    birthstone: "Aquamarine",
    fallStone: "Amethyst",
    traits: [
      "imaginative",
      "compassionate",
      "intuitive",
      "escapist",
      "indecisive" 
    ]
  }
]

const adviceArrays = [
  adviceMessages,
  adviceMessages2,
  adviceMessages3
]

module.exports = {
  astrologicalSigns,
  adviceArrays
}