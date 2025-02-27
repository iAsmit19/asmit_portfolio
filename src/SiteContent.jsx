import { motion } from "motion/react";
import NavigationIsland from "./components/NavigationIsland";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";

const SiteContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        duration: 0.7,
        transition: {
          default: { ease: "easeInOut" },
        },
      }}
    >
      <NavigationIsland />
      <Section1 />
      <Section2 />
      <Section3 />
    </motion.div>
  );
};

export default SiteContent;
