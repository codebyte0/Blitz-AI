import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  logo,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  visa,
  oracle,
  ibm,
  amazon,
  samsung,
  ebay,
  nvidia,
  skype,
} from "../../src/assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Services",
    url: "#Services",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];
export const notificationImages = [notification4, notification3, notification2];
export const companyLogos = [visa,oracle,ibm,ebay, nvidia,skype,];

export const BlitzServices = [
  {
    title: "AI-Powered Photo Generation",
    aosDelay: "600"
  },
  {
    title: "Enhanced Photo Quality",
    aosDelay: "900"
  },
  {
    title: "Effortless Integration",
    aosDelay: "1200"
  }
];


export const BlitzServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice Recognition",
    text: "Enhance the chatbot's capability to interpret and respond to voice commands, allowing users to interact effortlessly with the app using hands-free communication.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
    aosDelay: "300"
  },
  {
    id: "1",
    title: "Interactive Gamification",
    text: "Incorporate engaging elements like badges and leaderboards to motivate users and boost frequent interaction with the chatbot.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
    aosDelay: "400"
  },
  {
    id: "2",
    title: "Personalized Chatbots",
    text: "Introduce options for users to personalize the chatbot’s appearance and behavior, creating a more enjoyable and tailored interaction.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
    aosDelay: "450"
  },
  {
    id: "3",
    title: "API Integration",
    text: "Enable the chatbot to connect with external data sources, like weather and news APIs, to deliver more accurate and relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
    aosDelay: "500"
  },
];

export const collabText = "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Effortless Integration",
    text: "Experience smooth integration with our platform",
    aosDelay: "300"
  },
  {
    id: "1",
    title: "Advanced Automation",
    text: "Leverage automation enhance efficience.",
    aosDelay: "500"
  },
  {
    id: "2",
    title: "Premium Security",
    text: "Benefit from top-tier security measures designed.",
    aosDelay: "700"
  },
];


export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Essential AI chatbot with personalized recommendations",
    price: "0",
    features: [
      "AI-powered chatbot designed to address your queries effectively",
      "Tailored recommendations based on individual preferences",
      "Explore all app features with no cost involved",
    ],
    aosDelay: "300"
  },
  {
    id: "1",
    title: "Premium",
    description: "Enhanced AI chatbot with priority support and analytics",
    price: "9.99",
    features: [
      "Advanced AI chatbot capable of handling complex queries",
      "Comprehensive analytics dashboard to monitor conversation trends",
      "Priority customer support for prompt issue resolution",
    ],
    aosDelay: "500"
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot with advanced analytics and dedicated support",
    price: "",
    features: [
      "Tailor-made AI chatbot to meet your specific needs",
      "Advanced analytics for detailed insights into interactions",
      "Dedicated account manager for personalized support",
    ],
    aosDelay: "700"
  },
];


export const benefits = [
  {
    id: "0",
    title: "Instant Answers",
    text: "Allows users to swiftly obtain answers without sifting through numerous sources.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Daily Improvement",
    text: "Utilizes natural language processing to comprehend queries and deliver precise, relevant responses.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Seamless Connectivity",
    text: "Connect with the AI chatbot from any location and device, ensuring maximum accessibility and convenience.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Rapid Response Time",
    text: "Provides users with rapid answers to their queries, eliminating the need to search through multiple sources.",
    backgroundUrl: "assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Fast Query Resolution",
    text: "Allows users to swiftly obtain answers without sifting through numerous sources.",
    backgroundUrl: "assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Enhanced Daily Interactions",
    text: "Utilizes natural language processing to comprehend queries and deliver precise, relevant responses.",
    backgroundUrl: "assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discordapp.com/users/891917829484457995",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://discordapp.com/users/891917829484457995",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/_code_byte?igsh=MWQ0azlzZW45OXgxZw==",
  },
  {
    id: "3",
    title: "telegram",
    iconUrl: telegram,
    url: "mailto:codebyte.wd@gmail.com?subject=Subject%20Here&body=Your%20message%20here",
  },  
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.instagram.com/_code_byte?igsh=MWQ0azlzZW45OXgxZw==",
  },
];