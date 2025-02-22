import load from "./styles/components/loader.module.scss";
import { loaderElData } from "./data/load_data";
import { motion } from "motion/react";

const Loader = () => {
  const elementFall = loaderElData.slice(0, 4);
  const elementMain = loaderElData.slice(4, 5);
  const elementRise = loaderElData.slice(5, 9);

  const elMainChar = elementMain.length > 0 ? elementMain[0].split("") : [];

  return (
    <motion.div
      className={load.loader}
      exit={{
        opacity: 0,
        transition: {
          default: { ease: "easeInOut" },
          opacity: { duration: 3, delay: 2 },
        },
      }}
    >
      <div className={load.loader__cont}>
        <div className={load.loader__dial}>
          <motion.div
            className={load.loader__element_fall}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                default: { ease: "linear" },
                opacity: { duration: 3, delay: 3 },
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 2,
              },
            }}
          >
            {elementFall.map((element, index) => (
              <div
                key={index}
                className={`${load.loader__dial_element} ${load.loader__dial_element_fall}`}
              >
                {element}
              </div>
            ))}
          </motion.div>
          <motion.div className={load.loader__element_main}>
            {elMainChar.map((element, index) => (
              <motion.div
                key={index}
                className={`${load.loader__dial_element_main} ${load.loader__dial_element_main}`}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  transition: {
                    default: {
                      ease: "linear",
                      duration: 2,
                      delay: index * 0.3,
                    },
                  },
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 2,
                  },
                }}
              >
                {element}
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className={load.loader__element_rise}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                default: { ease: "linear" },
                opacity: { duration: 3, delay: 3 },
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 2,
              },
            }}
          >
            {elementRise.map((element, index) => (
              <div
                key={index}
                className={`${load.loader__dial_element} ${load.loader__dial_element_rise}`}
              >
                {element}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
