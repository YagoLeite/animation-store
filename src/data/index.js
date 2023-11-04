import AnimSidebar from "@/components/animations/AnimSidebar";
import AnimatedCards from "@/components/animations/FlashlightCard";
import BorderCard from "@/components/animations/BorderCard";
import BumpingText from "@/components/animations/BumpingText";
import FlippingCardComponent from "@/components/animations/FlippingCardComponent";
import GoldenStars from "@/components/animations/GoldenStars";
import GroupTable from "@/components/animations/GroupTable";
import MainBanner from "@/components/animations/MainBanner";
import SimpleCarousel from "@/components/animations/SimpleCarousel";
import ToggleCircularBtns from "@/components/animations/ToggleCircularBtns";
import WavyText from "@/components/animations/WavyText";

import BritComponent from "@/components/cards/BritComponent";
import ExpandCards from "@/components/cards/ExpandCards";

import GlassCardComponent from "@/components/cards/GlassCardComponent";
import Test from "@/components/twitchtv/Test";
import FlashlightCard from "@/components/animations/FlashlightCard";
import ExpandingCard from "@/components/animations/AlakazamAnimation";
import AlakazamAnimation from "@/components/animations/AlakazamAnimation";
import Slider from "@/components/animations/Slider";

// export const data = [
//   {
//     name: "expanding-cards",
//     content: <ExpandCards />,
//     tags: ["card", "image"],
//     image: "/expandingcard.png",
//     cardData: {
//       title: "Expanding Cards",
//       description: `Interactive image accordion with smooth, responsive transitions. Click to expand images and reveal detailed descriptions.`,
//       github: "www.github.com",
//       redirect: "/tags/expanding-cards",
//       stacks: ["card", "image"],
//     },
//   },
//   {
//     name: "wavy-text",
//     content: <WavyText />,
//     tags: ["typography", "fun"],
//     cardData: {
//       title: "Wavy Text",
//       description: `An interactive text animation component. Each letter bumps on hover, creating a lively, wave-like effect. Settings include custom text, font size, and animation duration`,
//       github: "www.github.com",
//       redirect: "/tags/wavy-text",
//       stacks: ["typography", "fun"],
//     },
//   },
//   {
//     name: "twitch",
//     content: <Test />,
//     tags: ["card"],
//     cardData: {
//       title: "Twitch",
//       description:
//         "Lore ipsiumLore ipsium  Lore ipsiumLore ipsiumLore ipsiumLore ipsium Lore ipsiumLore ipsium Lore ipsiumLore ipsium",
//       github: "www.github.com",
//       redirect: "/tags/twitch",
//       stacks: ["card"],
//     },
//   },
//   {
//     name: "brit",
//     content: <BritComponent />,
//     tags: ["card"],
//     image: "./britcard.png",
//     cardData: {
//       title: "Brittany Card",
//       description:
//         "Dynamic, motion-enhanced card display supporting custom color schemes, quantity, and width. Efficiently manages multiple cards using grid layout",
//       github: "www.github.com",
//       redirect: "/tags/brit",
//       stacks: ["card"],
//     },
//   },
//   {
//     name: "border-card",
//     content: <BorderCardComponent />,
//     tags: ["card", "elegant"],
//     image: "./britcard.png",
//     cardData: {
//       title: "Border Card",
//       description:
//         "Dynamic, motion-enhanced card display supporting custom color schemes, quantity, and width. Efficiently manages multiple cards using grid layout",
//       github: "www.github.com",
//       redirect: "/tags/border-card",
//       stacks: ["card", "elegant"],
//     },
//   },
//   {
//     name: "flip-card",
//     content: <FlippingCardComponent />,
//     tags: ["card", "fun"],
//     image: "./britcard.png",
//     cardData: {
//       title: "Flip Card",
//       description:
//         "Experience an engaging interaction with this card component. On hover, it performs a smooth flip animation, revealing additional content. Its sleek design and user-friendly interface add a modern touch to any application, providing a captivating user experience.",
//       github: "www.github.com",
//       redirect: "/tags/flip-card",
//       stacks: ["card", "fun"],
//     },
//   },
//   {
//     name: "glass-card",
//     content: <GlassCardComponent />,
//     tags: ["card", "elegant"],
//     image: "./britcard.png",
//     cardData: {
//       title: "Glass Card",
//       description:
//         "Experience an engaging interaction with this card component. On hover, it performs a smooth flip animation, revealing additional content. Its sleek design and user-friendly interface add a modern touch to any application, providing a captivating user experience.",
//       github: "www.github.com",
//       redirect: "/tags/glass-card",
//       stacks: ["card", "elegant"],
//     },
//   },
// ];

export const data = [
  {
    name: "Flip Card",
    component: FlippingCardComponent,
    description:
      "Discover the interactive Flip Card - a visually striking card that reveals its other side with a smooth flip animation on hover. Crafted with Chakra UI and Framer Motion for a seamless user experience. Try it now!",
    image: "https://animation-store.vercel.app/flipCardImage.png",
    tags: ["card", "fun", "all"],
    key: Math.random(),
  },
  {
    name: "Flashlight Card",
    component: FlashlightCard,
    description: "Card flipping on hover!",
    image: "https://animation-store.vercel.app/flipCardImage.png",
    tags: ["card", "all", "elegant", "new"],
    key: Math.random(),
  },
  {
    name: "Wavy Text",
    component: WavyText,
    description: "Card flipping on hover!",
    image: "https://animation-store.vercel.app/flipCardImage.png",
    tags: ["typography", "fun", "all"],
    key: Math.random(),
  },
  {
    name: "Glowing Card",
    component: BorderCard,
    description: "Card flipping on hover!",
    image: "https://animation-store.vercel.app/flipCardImage.png",
    tags: ["card", "all"],
    key: Math.random(),
  },
  {
    name: "Bumping Text",
    component: BumpingText,
    description: "Card flipping on hover!",
    image: "https://animation-store.vercel.app/flipCardImage.png",
    tags: ["typography", "fun", "all", "new"],
    key: Math.random(),
  },
  // {
  //   name: "Simple Carousel",
  //   component: SimpleCarousel,
  //   tags: ["carousel", "all", 'simple'],
  //   key: Math.random(),
  // },
  {
    name: "Slider",
    component: Slider,
    description: "Card flipping on hover!",
    image: "https://animation-store.vercel.app/flipCardImage.png",
    tags: ["carousel", "drag", "all", "simple"],
    key: Math.random(),
  },
  // {
  //   name: "fuck Carousel",
  //   component: MainBanner,
  //   tags: ["carousel", "all"],
  // },
  {
    name: "Drag n Drop Table",
    component: GroupTable,
    description: "Card flipping on hover!",
    image: "https://animation-store.vercel.app/flipCardImage.png",
    tags: ["carousel", "drag", "all"],
    key: Math.random(),
  },
  {
    name: "Toggle Button",
    component: ToggleCircularBtns,
    description: "Card flipping on hover!",
    image: "https://animation-store.vercel.app/flipCardImage.png",
    tags: ["toggle", "button", "all"],
    key: Math.random(),
  },
  {
    name: "Sidebar",
    component: AnimSidebar,
    description: "Card flipping on hover!",
    image: "https://animation-store.vercel.app/flipCardImage.png",
    tags: ["sidebar", "all"],
    key: Math.random(),
  },
  {
    name: "Golden Ratio Stars",
    component: GoldenStars,
    description: "Card flipping on hover!",
    image: "https://animation-store.vercel.app/flipCardImage.png",
    tags: ["3D", "elegant", "all"],
    key: Math.random(),
  },
  {
    name: "Pokemon Card",
    component: AlakazamAnimation,
    description:
      "Experience the magic of Pokémon with our interactive Alakazam card. Hover to see Alakazam in action, showcasing dynamic stats with Chakra UI progress bars and smooth Framer Motion animations. Collect and explore more in our immersive gallery.",
    image: "https://animation-store.vercel.app/pokemonCardImage.png",
    tags: ["card", "all", "fun"],
    key: Math.random(),
  },
];

export const tags = [
  "all",
  "card",
  "fun",
  "typography",
  "simple",
  "drag",
  "elegant",
  "carousel",
  "button",
  "toggle",
  "sidebar",
  "3D",
];
