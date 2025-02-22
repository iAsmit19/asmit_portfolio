import hero from "../styles/components/section1.module.scss";
import skeletonDark from "../assets/images/section_1/skeleton_dark.svg";
import copyIcon from "../assets/icons/copy.svg";
import Spline from "@splinetool/react-spline";
import { email } from "../data/per_data";
import { useRef, useState } from "react";
import gsap from "gsap";

const Section1 = () => {
  const [copied, setCopied] = useState(false);
  const tlTpRef = useRef(null);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.log("Failed to copy", err);
    }
  };

  const handleMouseEnter = () => {
    setTimeout(() => {
      gsap.to(tlTpRef.current, {
        opacity: 1,
        ease: "circ.inOut",
        duration: 0.1,
      });
    }, 1000);
  };

  const handleMouseLeave = () => {
    gsap.to(tlTpRef.current, {
      opacity: 0,
      ease: "circ.inOut",
      duration: 0.1,
    });
  };

  return (
    <div className={hero.section1}>
      <div className={hero.th}></div>
      <Spline
        className={hero.section1__bg}
        scene="https://prod.spline.design/5KtfogDdLZSSGYIB/scene.splinecode"
      />
      <div className={hero.section1__cont}>
        <img
          className={hero.skeleton}
          src={skeletonDark}
          alt=""
          draggable="false"
        />
        <div className={hero.section1__contents}>
          <h1>Asmit Singh</h1>
          <p>
            A self-taught Frontend Designer{" "}
            <span className={hero.sec1__subtext_imp}>&</span> Developer
          </p>
          <div
            className={hero.sec1__email}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a
              className={hero.sec1__email_copy}
              // href="mailto:iamasmit1919@gmail.com"
              onClick={copyEmail}
            >
              <img src={copyIcon} alt="->" />
              iamasmit1919@gmail.com
            </a>
            <div className={hero.email__tooltip} ref={tlTpRef}>
              {copied ? "Copied" : "Copy"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
