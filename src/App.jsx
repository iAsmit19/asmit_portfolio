import Loader from "./Loader";
import { useContext, useEffect } from "react";
import AppContext from "./context/AppContext";
import { AnimatePresence, motion } from "motion/react";
import SiteContent from "./SiteContent";
import DynamicHead from "./DynamicHead";

function App() {
  const {
    isLoading,
    setIsLoading,
    showSite,
    setShowSite,
  } = useContext(AppContext);

  // loader manager
  useEffect(() => {
    if (isLoading) {
      const loadTimer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);

      return () => clearTimeout(loadTimer);
    }

    // delay content after loading
    if (!isLoading) {
      const delayContent = setTimeout(() => {
        setShowSite(true);
      }, 1000);
      return () => clearTimeout(delayContent);
    }
  }, [isLoading, setIsLoading, setShowSite]);
  return (
    <div>
      <DynamicHead />
      <AnimatePresence mode="wait">
        {isLoading ? <Loader /> : null}
      </AnimatePresence>

      <AnimatePresence>
        {showSite && (
          <motion.div
            className="root"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: { duration: 0.5 },
            }}
          >
            <SiteContent />
          </motion.div>
        )}
      </AnimatePresence>
      {/* <SiteContent /> */}
    </div>
  );
}

export default App;
