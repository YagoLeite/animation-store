import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Pagination from "@/components/initialPage/Pagination";
import Sidebar from "@/components/sidebar/Sidebar";
import { data, test } from "@/data";
import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import slugify from "react-slugify";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useProgress } from "@/hooks/useProgress";

const index = ({ ogTitle, ogDescription, ogImage, ogUrl, filteredData }) => {
  const router = useRouter();
  const [isToggleMenuOpen, setIsToggleMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const { setIsLoading } = useProgress();

  const newData = filteredData.map((item) => ({
    ...item,
    component: test[item.name],
  }));

  // const filteredData = data.filter((anim) =>
  //   anim.tags.includes(router.query.tag)
  // );

  const toggleHandler = () => {
    setIsToggleMenuOpen(!isToggleMenuOpen);
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    setIsToggleMenuOpen(false);
  }, [router.query.tag]);

  return (
    <>
      <Head>
        <title>{ogTitle}</title>
        {/* Standard OG tags for all platforms including Facebook */}
        <meta property="og:title" content={ogTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:site_name" content="Animation Store" />
        {/* Specific Facebook tags */}
        <meta property="fb:app_id" content="yourAppId" />{" "}
        {/* Your Facebook app ID if you have one */}
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@yourTwitterHandle" />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={ogDescription} />
        <meta name="twitter:image" content={ogImage} />
        {/* Meta tags beneficial for SEO */}
        <meta name="description" content={ogDescription} />
        <meta name="author" content="Yago Leite" />
        <meta
          name="keywords"
          content="Animation, Store, Web Components, etc"
        />{" "}
        {/* Relevant keywords */}
        {/* Specify a canonical link if you have duplicate content across different URLs */}
        <link rel="canonical" href={ogUrl} />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Additional meta tags can be added here as needed */}
      </Head>

      <Flex direction="column" bg="#141517" color="#ccd6f6" h="100%">
        <Header
          isToggleMenuOpen={isToggleMenuOpen}
          toggleHandler={toggleHandler}
          setIsToggleMenuOpen={setIsToggleMenuOpen}
        />
        <Flex>
          <Flex display={["none", "none", "flex", "flex"]}>
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
          </Flex>
          <Flex
            direction="column"
            overflowX="hidden"
            minH="calc(100vh - 70px)"
            gap="20px"
            px="20px"
            pb="30px"
            w="100%"
          >
            <Pagination data={newData} />
            <Footer />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { query } = context;
  const filter = query.filter;
  const ogUrl = `https://${context.req.headers.host}${context.resolvedUrl}`;

  const data = [
    {
      name: "Parallax",
      description:
        "The Parallax component encapsulates a visually engaging, scroll-activated animation sequence crafted with Chakra UI and Framer Motion. It offers a multi-layered parallax effect that brings a dynamic depth to the user interface. With meticulously timed motion effects, the component presents an immersive experience where elements such as text and images move at different speeds, creating a sense of depth and focus. It's an ideal feature for modern web applications that aim to capture user attention and convey content in a memorable, interactive format.",
      image: "https://animation-store.vercel.app/parallaxImage.png",
      tags: ["all", "parallax", "elegant"],
      key: Math.random(),
    },
    {
      name: "Twitch Carousel",
      description:
        "Experience the magic of Pokémon with our interactive Alakazam card. Hover to see Alakazam in action, showcasing dynamic stats with Chakra UI progress bars and smooth Framer Motion animations. Collect and explore more in our immersive gallery.",
      image: "https://animation-store.vercel.app/pokemonCardImage.png",
      tags: ["elegant", "all", "carousel"],
      key: Math.random(),
    },
    {
      name: "Brazilian Foods",
      description:
        "Explore the rich flavors of Brazil with our interactive BrazilianFoods component, featuring a captivating showcase of traditional dishes, complete with stunning visuals and engaging animations.",
      image: "https://animation-store.vercel.app/overlayCardImage.png",
      tags: ["all", "carousel", "new", "elegant"],
      key: Math.random(),
    },
    {
      name: "Arched Walls",
      description:
        "Experience the dynamic interplay of motion and interaction with our ArchedWalls component. This unique UI element brings your digital environment to life through an array of animations including scaling and positional shifts. Tailored to engage and delight, the component features customizable variants for 'start' and 'rewind' animations, adding a layer of depth and interaction to your web page. 'Start' initiates a captivating scale transformation, expanding from a subtle presence to an engaging focal point, while 'rewind' reverses the journey, offering a different perspective. Integrated with Chakra UI and Framer Motion for a seamless and responsive user experience, ArchedWalls is perfect for sites seeking to create an immersive and visually striking interface. Whether greeting visitors with a welcoming message or adding a dynamic layer to your site, this component is designed to captivate and engage.",
      image: "https://animation-store.vercel.app/archedWallBackground.png",
      tags: ["all", "elegant", "new"],
      key: Math.random(),
    },

    {
      name: "Moving Background Card",
      description:
        "Immerse yourself in the kinetic elegance of our MovingBackgroundCard component, where motion meets motivation. Infused with a mesmerizing background animation that gently cycles in an infinite loop, this component offers a captivating visual treat with a central message designed to inspire. Using Chakra UI for structured layouts and Framer Motion for seamless animations, this card is perfect for delivering powerful quotes or messages atop a dynamic, abstract art-inspired backdrop. Elevate your website's visual storytelling with this artful blend of design and inspiration.",
      image: "https://animation-store.vercel.app/movingBackgroundCardImage.png",
      tags: ["card", "fun", "all"],
      key: Math.random(),
    },
    {
      name: "Flashlight Card",
      description:
        "Dive into an immersive interface with FlashlightCard—a captivating, mouse-sensitive card component that reacts to your every move, creating a spotlight effect that enhances user engagement. Perfect for portfolios, interactive displays, or any project that desires a touch of sleek and responsive design. Hover over to unleash the magic!",
      image: "https://animation-store.vercel.app/flashlightCardImage.png",
      tags: ["card", "all", "elegant"],
      key: Math.random(),
    },
    {
      name: "Cuverd Border Carousel",
      description:
        "Explore the dynamic and responsive CurvedBorderCarousel component for modern web applications. Built with Chakra UI and Framer Motion, this carousel features curved borders and seamless drag interactions, optimized for both desktop and mobile experiences. Effortlessly integrate into your React project with SSR support and enjoy the added flexibility of a resizable observer for real-time layout adjustments. Ideal for showcasing images or content in a visually appealing and interactive format",
      image: "https://animation-store.vercel.app/curvedCarouselImage.png",
      tags: ["all", "carousel", "elegant"],
      key: Math.random(),
    },
    {
      name: "Bouncing Loader",
      description:
        "Enhance your application's loading experience with the BouncingLoader, a React component utilizing Chakra UI for styling and Framer Motion for fluid animations. This loader provides an engaging visual cue with its bounce and scale animations, which are controlled through a sophisticated variant system. The loader’s interactive features, including reset and rewind controls, engage users during wait times. Its responsive design ensures compatibility across devices, making it an excellent choice for developers aiming to maintain user interest and minimize perceived wait durations.",
      image: "https://animation-store.vercel.app/bouncingLoadereImage.png",
      tags: ["card", "all", "fun"],
      key: Math.random(),
    },
    {
      name: "Bumping Text",
      description:
        "Experience the playful bounce of each character with BumpingText—a dynamic text animation component designed for developers looking to add a touch of interactive vibrancy to their projects. Hover to animate and bring the 'Animation Store' to life on your site!",
      image: "https://animation-store.vercel.app/bumpingTextImage.png",
      tags: ["typography", "fun", "all"],
      key: Math.random(),
    },
    {
      name: "Crazy Text Button",
      description:
        "Experience the magic of Pokémon with our interactive Alakazam card. Hover to see Alakazam in action, showcasing dynamic stats with Chakra UI progress bars and smooth Framer Motion animations. Collect and explore more in our immersive gallery.",
      image: "https://animation-store.vercel.app/pokemonCardImage.png",
      tags: ["button", "all"],
      key: Math.random(),
    },
    {
      name: "Pokemon Card",
      description:
        "Experience the magic of Pokémon with our interactive Alakazam card. Hover to see Alakazam in action, showcasing dynamic stats with Chakra UI progress bars and smooth Framer Motion animations. Collect and explore more in our immersive gallery.",
      image: "https://animation-store.vercel.app/pokemonCardImage.png",
      tags: ["card", "all", "fun", "simple"],
      key: Math.random(),
    },
    {
      name: "Wavy Text",
      description:
        "Step into a world where typography comes to life! The WavyText component brings a dynamic, wave-like animation to your text, captivating viewers as each character dances into place with a delightful spring effect. Ideal for grabbing attention on landing pages or adding a playful twist to your website headers. Experience text that moves with WavyText!",
      image: "https://animation-store.vercel.app/flipCardImage.png",
      tags: ["typography", "fun", "all"],
      key: Math.random(),
    },
    {
      name: "Neumorphism Button",
      description:
        "Experience the magic of Pokémon with our interactive Alakazam card. Hover to see Alakazam in action, showcasing dynamic stats with Chakra UI progress bars and smooth Framer Motion animations. Collect and explore more in our immersive gallery.",
      image: "https://animation-store.vercel.app/pokemonCardImage.png",
      tags: ["button", "all", "elegant"],
      key: Math.random(),
    },
    {
      name: "Simple Carousel",
      tags: ["carousel", "all", "simple"],
      key: Math.random(),
    },
    {
      name: "Flip Card",
      description:
        "Discover the interactive Flip Card - a visually striking card that reveals its other side with a smooth flip animation on hover. Crafted with Chakra UI and Framer Motion for a seamless user experience. Try it now!",
      image: "https://animation-store.vercel.app/flipCardImage.png",
      tags: ["card", "fun", "all"],
      key: Math.random(),
    },
    {
      name: "Slider",
      description:
        "Step into the world of smooth animations with our Slider component! Crafted with React and enhanced by Chakra UI's sleek design system, this carousel allows you to effortlessly glide through content. With intuitive drag interactions powered by Framer Motion, you can experience a seamless and responsive drag-and-drop slider that's as functional as it is stylish. Whether on desktop or mobile, engage with your content in a more dynamic and interactive way. Start dragging and watch the magic unfold!",
      image: "https://animation-store.vercel.app/flipCardImage.png",
      tags: ["carousel", "drag", "all", "simple"],
      key: Math.random(),
    },
    {
      name: "Drag n Drop Table",
      description:
        "Navigate the rankings with ease using our GroupTable component! Built on the robust foundations of React and Next.js, this interactive table comes to life with the fluid drag-and-drop functionality provided by Framer Motion. Styled meticulously with Chakra UI for a polished look, it showcases national teams in a sleek and engaging interface. Whether you're ranking favorites or creating matchups, the intuitive motion design invites you to reorder with a simple gesture, while dynamic loading ensures a smooth experience. Perfect for sports enthusiasts and list-lovers alike, this component transforms your data into a visually stunning and interactive leaderboard. Get ready to click, drag, and elevate your group standings with elegance and efficiency!",
      image: "https://animation-store.vercel.app/groupTableImage.png",
      tags: ["drag", "fun", "all"],
      key: Math.random(),
    },
    {
      name: "Toggle Button",
      description:
        "Introducing the ToggleCircularBtns component, a creative and interactive React element that brings a dynamic twist to your social media icons. Built with Chakra UI and Framer Motion, this component arranges icons in a circular pattern with a central toggle button. Each icon emerges with a smooth, radial animation to form a neat orbit. Ideal for adding a visually engaging social media navigation to your website, this component is not only responsive but also offers a playful user interaction with its toggle animation effect.",
      image: "https://animation-store.vercel.app/toggleButtonImage.png",
      tags: ["toggle", "button", "all"],
      key: Math.random(),
    },
    {
      name: "Sidebar",
      description:
        "Enhance your React project with the AnimSidebar component, a dynamic and responsive sidebar menu powered by Chakra UI and Framer Motion. This component provides seamless animations for both desktop and mobile views, with easy toggling between open and closed states. Incorporate icons from React Icons for a polished UI/UX design. Whether for navigation or profile linking with GitHub, LinkedIn, or other social platforms, AnimSidebar is versatile and easily integrated into your codebase.",
      image: "https://animation-store.vercel.app/sidebarImage.png",
      tags: ["sidebar", "all"],
      key: Math.random(),
    },
    {
      name: "Golden Ratio Stars",
      description:
        "Experience an interactive 3D visualization with 'GoldenStars' – a React component that crafts a celestial array of points using Three.js and Drei. Engage with a dynamic, auto-rotating cosmic scene enhanced by the soft glow of a bloom effect for a mesmerizing visual journey. Perfect for web projects that require a touch of astral beauty.",
      image: "https://animation-store.vercel.app/goldenStarImage.png",
      tags: ["3D", "elegant", "all"],
      key: Math.random(),
    },
    {
      name: "Glowing Button",
      description:
        "Experience the magic of Pokémon with our interactive Alakazam card. Hover to see Alakazam in action, showcasing dynamic stats with Chakra UI progress bars and smooth Framer Motion animations. Collect and explore more in our immersive gallery.",
      image: "https://animation-store.vercel.app/pokemonCardImage.png",
      tags: ["button", "all", "simple"],
      key: Math.random(),
    },
    {
      name: "Glowing Card",
      description:
        "Discover interactive design at your fingertips with the Glowing Card component. This component features an elegant, responsive card that scales and adapts its rounded edges on hover, wrapped in a beautiful linear gradient. Perfect for making UI elements stand out with a subtle, yet captivating animation effect. Try hovering over to unleash its charm – experience UI that reacts to you!",
      image: "https://animation-store.vercel.app/glowingCardImage.png",
      tags: ["card", "all", "simple"],
      key: Math.random(),
    },
    {
      name: "Fill Up Button",
      description:
        "Discover the FillupButton – an interactive UI element crafted with Chakra UI and Framer Motion. This dynamic button entices with a captivating hover effect, where the background and text color shift elegantly, accompanied by a subtle scale transformation. Designed to enhance user engagement, it's perfect for developers looking for a stylish, responsive addition to their React projects. Experience seamless integration with server-side rendering disabled, thanks to Next.js dynamic imports. Elevate your application's interactivity with FillupButton.",
      image: "https://animation-store.vercel.app/fillUpButtonImage.png",
      tags: ["button", "all", "simple"],
      key: Math.random(),
    },
    {
      name: "Shadow Button",
      description:
        "Unleash the power of interactive UI with our ShadowButton component, a sleek and responsive button designed using Chakra UI and Framer Motion. This button is not just a static element; it's a gateway to a dynamic coding playground. With its quick and responsive hover and press animations, it provides an engaging user experience. The ShadowButton is perfectly integrated into React applications with server-side rendering off for a seamless, client-side interactive experience. Ideal for developers who value design and functionality, this button toggles between a live code editor and a stylish call-to-action, making it a versatile component for any modern web project.",
      image: "https://animation-store.vercel.app/shadowButtonImage.png",
      tags: ["button", "all", "simple"],
      key: Math.random(),
    },

    {
      name: "Star Trail",
      description:
        "Discover an interactive card experience with our OverlayCard component, designed for seamless integration into modern web interfaces. Crafted using Chakra UI for sleek, responsive layouts and Framer Motion for fluid, intuitive animations, this component captivates with hover-triggered overlays that reveal additional content. Elevate your website with this dynamic, animated card that responds to user interaction, perfect for showcasing images with engaging informational overlays.",
      image: "https://animation-store.vercel.app/overlayCardImage.png",
      tags: ["hidden"],
      key: Math.random(),
    },

    {
      name: "Overlay Card",
      description:
        "Discover an interactive card experience with our OverlayCard component, designed for seamless integration into modern web interfaces. Crafted using Chakra UI for sleek, responsive layouts and Framer Motion for fluid, intuitive animations, this component captivates with hover-triggered overlays that reveal additional content. Elevate your website with this dynamic, animated card that responds to user interaction, perfect for showcasing images with engaging informational overlays.",
      image: "https://animation-store.vercel.app/overlayCardImage.png",
      tags: ["hidden"],
      key: Math.random(),
    },
    {
      name: "Scroll Away",
      description:
        "Discover an interactive card experience with our OverlayCard component, designed for seamless integration into modern web interfaces. Crafted using Chakra UI for sleek, responsive layouts and Framer Motion for fluid, intuitive animations, this component captivates with hover-triggered overlays that reveal additional content. Elevate your website with this dynamic, animated card that responds to user interaction, perfect for showcasing images with engaging informational overlays.",
      image: "https://animation-store.vercel.app/overlayCardImage.png",
      tags: ["hidden"],
      key: Math.random(),
    },
    {
      name: "Wavy Fill Circle",
      description:
        "Discover an interactive card experience with our OverlayCard component, designed for seamless integration into modern web interfaces. Crafted using Chakra UI for sleek, responsive layouts and Framer Motion for fluid, intuitive animations, this component captivates with hover-triggered overlays that reveal additional content. Elevate your website with this dynamic, animated card that responds to user interaction, perfect for showcasing images with engaging informational overlays.",
      image: "https://animation-store.vercel.app/overlayCardImage.png",
      tags: ["hidden"],
      key: Math.random(),
    },
    {
      name: "Twitch Card",
      description:
        "Introducing the TwitchCard – a lively and interactive showcase for streamers designed to capture the essence of live gaming action. This card incorporates a sleek hover effect, signaling activity and engagement for viewers. It features a prominent 'LIVE' badge, real-time viewer count, and customizable sections for streamer details and game information, all wrapped in a stylish and responsive design using Chakra UI and Framer Motion. Perfect for embedding into gaming sites or streamer platforms, the TwitchCard is your go-to component for attracting audiences to live Twitch content.",
      image: "https://animation-store.vercel.app/twitchCardImage.png",
      tags: ["hidden"],
      key: Math.random(),
    },
    {
      name: "Dog Carousel",
      description:
        "Introducing the TwitchCard – a lively and interactive showcase for streamers designed to capture the essence of live gaming action. This card incorporates a sleek hover effect, signaling activity and engagement for viewers. It features a prominent 'LIVE' badge, real-time viewer count, and customizable sections for streamer details and game information, all wrapped in a stylish and responsive design using Chakra UI and Framer Motion. Perfect for embedding into gaming sites or streamer platforms, the TwitchCard is your go-to component for attracting audiences to live Twitch content.",
      image: "https://animation-store.vercel.app/twitchCardImage.png",
      tags: ["hidden"],
      key: Math.random(),
    },
    {
      name: "Spotlight",
      description:
        "Introducing the TwitchCard – a lively and interactive showcase for streamers designed to capture the essence of live gaming action. This card incorporates a sleek hover effect, signaling activity and engagement for viewers. It features a prominent 'LIVE' badge, real-time viewer count, and customizable sections for streamer details and game information, all wrapped in a stylish and responsive design using Chakra UI and Framer Motion. Perfect for embedding into gaming sites or streamer platforms, the TwitchCard is your go-to component for attracting audiences to live Twitch content.",
      image: "https://animation-store.vercel.app/twitchCardImage.png",
      tags: ["hidden"],
      key: Math.random(),
    },
    {
      name: "Watch Background",
      description:
        "Introducing the TwitchCard – a lively and interactive showcase for streamers designed to capture the essence of live gaming action. This card incorporates a sleek hover effect, signaling activity and engagement for viewers. It features a prominent 'LIVE' badge, real-time viewer count, and customizable sections for streamer details and game information, all wrapped in a stylish and responsive design using Chakra UI and Framer Motion. Perfect for embedding into gaming sites or streamer platforms, the TwitchCard is your go-to component for attracting audiences to live Twitch content.",
      image: "https://animation-store.vercel.app/twitchCardImage.png",
      tags: ["hidden"],
      key: Math.random(),
    },
    {
      name: "Main Banner",
      description:
        "Step into a world of vibrant visuals with our MainBanner component, a dynamic carousel that brings your content to life. Designed with Chakra UI for flexible, responsive layouts and powered by Framer Motion for smooth, animated transitions, this carousel cycles through items with effortless navigation. Featuring auto-rotating slides with customizable colors and titles, it is optimized for both desktop and mobile interfaces. Enhance your site with our interactive MainBanner that invites users to engage with your showcased items in style.",
      image: "https://animation-store.vercel.app/mainBannerImage.png",
      tags: ["hidden"],
      key: Math.random(),
    },
  ];

  const filteredData = data.filter((anim) => anim.tags.includes(query.tag));

  const ogData = filter
    ? data.find((item) => slugify(item.name) === filter)
    : undefined;

  const title = ogData ? ogData.name : "Animation Store";
  const description = ogData
    ? ogData.description
    : "Animated component for developers";
  const image = ogData
    ? ogData.image
    : "https://animation-store.vercel.app/pokemonCardImage.png";

  return {
    props: {
      ogTitle: title,
      ogDescription: description,
      ogImage: image,
      ogUrl: ogUrl,
      filteredData,
    },
  };
};


export default index;
