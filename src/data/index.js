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
    description:
      "Dive into an immersive interface with FlashlightCard—a captivating, mouse-sensitive card component that reacts to your every move, creating a spotlight effect that enhances user engagement. Perfect for portfolios, interactive displays, or any project that desires a touch of sleek and responsive design. Hover over to unleash the magic!",
    image: "https://animation-store.vercel.app/flipCardImage.png",
    tags: ["card", "all", "elegant", "new"],
    key: Math.random(),
  },
  {
    name: "Wavy Text",
    component: WavyText,
    description:
      "Step into a world where typography comes to life! The WavyText component brings a dynamic, wave-like animation to your text, captivating viewers as each character dances into place with a delightful spring effect. Ideal for grabbing attention on landing pages or adding a playful twist to your website headers. Experience text that moves with WavyText!",
    image: "https://animation-store.vercel.app/flipCardImage.png",
    tags: ["typography", "fun", "all"],
    key: Math.random(),
  },
  {
    name: "Glowing Card",
    component: BorderCard,
    description:
      "Discover interactive design at your fingertips with the Glowing Card component. This component features an elegant, responsive card that scales and adapts its rounded edges on hover, wrapped in a beautiful linear gradient. Perfect for making UI elements stand out with a subtle, yet captivating animation effect. Try hovering over to unleash its charm – experience UI that reacts to you!",
    image: "https://animation-store.vercel.app/flipCardImage.png",
    tags: ["card", "all", "simple"],
    key: Math.random(),
  },
  {
    name: "Bumping Text",
    component: BumpingText,
    description:
      "Experience the playful bounce of each character with BumpingText—a dynamic text animation component designed for developers looking to add a touch of interactive vibrancy to their projects. Hover to animate and bring the 'Animation Store' to life on your site!",
    image: "https://animation-store.vercel.app/bumpingTextImage.png",
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
    description:
      "Step into the world of smooth animations with our Slider component! Crafted with React and enhanced by Chakra UI's sleek design system, this carousel allows you to effortlessly glide through content. With intuitive drag interactions powered by Framer Motion, you can experience a seamless and responsive drag-and-drop slider that's as functional as it is stylish. Whether on desktop or mobile, engage with your content in a more dynamic and interactive way. Start dragging and watch the magic unfold!",
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
    description:
      "Navigate the rankings with ease using our GroupTable component! Built on the robust foundations of React and Next.js, this interactive table comes to life with the fluid drag-and-drop functionality provided by Framer Motion. Styled meticulously with Chakra UI for a polished look, it showcases national teams in a sleek and engaging interface. Whether you're ranking favorites or creating matchups, the intuitive motion design invites you to reorder with a simple gesture, while dynamic loading ensures a smooth experience. Perfect for sports enthusiasts and list-lovers alike, this component transforms your data into a visually stunning and interactive leaderboard. Get ready to click, drag, and elevate your group standings with elegance and efficiency!",
    image: "https://animation-store.vercel.app/groupTableImage.png",
    tags: ["drag", "fun", "all"],
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
    image: "https://animation-store.vercel.app/sliderImage.png",
    tags: ["sidebar", "all"],
    key: Math.random(),
  },
  {
    name: "Golden Ratio Stars",
    component: GoldenStars,
    description:
      "Experience an interactive 3D visualization with 'GoldenStars' – a React component that crafts a celestial array of points using Three.js and Drei. Engage with a dynamic, auto-rotating cosmic scene enhanced by the soft glow of a bloom effect for a mesmerizing visual journey. Perfect for web projects that require a touch of astral beauty.",
    image: "https://animation-store.vercel.app/goldenStarImage.png",
    tags: ["3D", "elegant", "all"],
    key: Math.random(),
  },
  {
    name: "Pokemon Card",
    component: AlakazamAnimation,
    description:
      "Experience the magic of Pokémon with our interactive Alakazam card. Hover to see Alakazam in action, showcasing dynamic stats with Chakra UI progress bars and smooth Framer Motion animations. Collect and explore more in our immersive gallery.",
    image: "https://animation-store.vercel.app/pokemonCardImage.png",
    tags: ["card", "all", "fun", "simple"],
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
