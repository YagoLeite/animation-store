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
  },
  {
    name: "wavy-text",
    content: <WavyText />,
    tags: ["typography", "fun"],
  },
  {
    name: "twitch",
    content: <Test />,
    tags: ["card"],
  },
  {
    name: "brit",
    content: <BritComponent />,
    tags: ["card"],
    image: "./britcard.png",
  },
];

export const tags = ["card", "fun", "typography", "image"];
