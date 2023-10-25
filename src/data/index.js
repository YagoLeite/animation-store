import BorderCard from "@/components/animations/BorderCard";
import BumpingText from "@/components/animations/BumpingText";
import FlippingCardComponent from "@/components/animations/FlippingCardComponent";
import SimpleCarousel from "@/components/animations/SimpleCarousel";
import WavyText from "@/components/animations/WavyText";

import BritComponent from "@/components/cards/BritComponent";
import ExpandCards from "@/components/cards/ExpandCards";

import GlassCardComponent from "@/components/cards/GlassCardComponent";
import Test from "@/components/twitchtv/Test";

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
    tags: ["card", "fun"],
  },
  {
    name: "Glowing Card",
    component: BorderCard,
    tags: ["card", "fun"],
  },
  {
    name: "Wavy Text",
    component: WavyText,
    tags: ["typography", "fun"],
  },
  {
    name: "Bumping Text",
    component: BumpingText,
    tags: ["typography", "fun"],
  },
  {
    name: "Simple Carousel",
    component: SimpleCarousel,
    tags: ["carousel"],
  },
];

export const tags = [
  "card",
  "fun",
  "typography",
  "image",
  "elegant",
  "carousel",
];
