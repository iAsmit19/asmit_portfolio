import work from "../styles/components/section2.module.scss";
import ProjectCard from "./ProjectCard";
import UniversalHeading from "./UniversalHeading";
import { projects } from "../data/per_data";
import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(_ScrollTrigger);

const Section2 = () => {
  const contRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {});

  return (
    <div className={work.work_sec}>
      <div className={work.work_sec__cont}>
        {/* heading & cards */}
        <div className={work.scroll_head_cards} ref={contRef}>
          {/* universal heading */}
          <div className={work.work_sec__header} ref={headingRef}>
            <UniversalHeading
              head="work"
              subHeading="these are my projects & works"
            />
          </div>
          {/* project cards */}
          <div className={work.sec__project_cards} ref={cardsRef}>
            {projects.map((project, index) => (
              <ProjectCard key={index} projectData={project} />
            ))}
          </div>
        </div>

        {/* bento grid */}
        {/* <div className={work.project_bento_grid}></div> */}
      </div>
    </div>
  );
};

export default Section2;
