import BritComponent from "@/components/cards/BritComponent";
import ExpandCards from "@/components/cards/ExpandCards";
import Test from "@/components/twitchtv/Test";
import WavyText from "@/components/typography/WavyText";

export const data = [
  {
    name: "expanding-cards",
    content: <ExpandCards />,
    tags: ["card", "image"],
    image: "/expandingcard.png",
    cardData: {
      title: "Expanding Cards",
      description: `Interactive image accordion with smooth, responsive transitions. Click to expand images and reveal detailed descriptions.`,
      github: "www.github.com",
      redirect: "/tags/expanding-cards",
      stacks: ["card", "image"],
    },
  },
  {
    name: "wavy-text",
    content: <WavyText />,
    tags: ["typography", "fun"],
    cardData: {
      title: "Wavy Text",
      description: `An interactive text animation component. Each letter bumps on hover, creating a lively, wave-like effect. Settings include custom text, font size, and animation duration`,
      github: "www.github.com",
      redirect: "/tags/wavy-text",
      stacks: ["typography", "fun"],
    },
  },
  {
    name: "twitch",
    content: <Test />,
    tags: ["card"],
    cardData: {
      title: "Twitch",
      description:
        "Lore ipsiumLore ipsium  Lore ipsiumLore ipsiumLore ipsiumLore ipsium Lore ipsiumLore ipsium Lore ipsiumLore ipsium",
      github: "www.github.com",
      redirect: "/tags/twitch",
      stacks: ["card"],
    },
  },
  {
    name: "brit",
    content: <BritComponent />,
    tags: ["card"],
    image: "./britcard.png",
    cardData: {
      title: "Brittany Card",
      description:
        "Dynamic, motion-enhanced card display supporting custom color schemes, quantity, and width. Efficiently manages multiple cards using grid layout",
      github: "www.github.com",
      redirect: "/tags/brit",
      stacks: ["card"],
    },
  },
];

export const tags = ["card", "fun", "typography", "image"];
