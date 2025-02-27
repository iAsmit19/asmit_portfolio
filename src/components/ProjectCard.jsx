// import { projects } from "../data/per_data";
import propTypes from "prop-types";
import project from "../styles/components/project_card.module.scss";
import link from "../assets/icons/live_link.svg";
import figmaLogo from "../assets/icons/figma_logo.svg";
import gitHubLogo from "../assets/icons/github_logo.svg";
import caseStudyLogo from "../assets/icons/case_logo.svg";

const ProjectCard = ({ projectData }) => {
  const {
    bg,
    color_1,
    color_2,
    color_3,
    imagePath,
    type,
    title,
    description,
    techStack,
    figmaBtn,
    gitHubBtn,
    caseStudyBtn,
    liveLinkBtn,
  } = projectData;
  return (
    <div
      className={project.proj_card}
      // setting appropriate style
      style={{ backgroundColor: bg, color: color_1 }}
    >
      <div className={project.proj_card__cont}>
        {/* card thumbnnail */}
        <div className={project.card__thumbnail}>
          <img src={imagePath} alt={title} draggable="false" />
        </div>

        <div className={project.card__divider}></div>

        {/* card info */}
        <div className={project.card__info}>
          <div className={project.info_for_card}>
            <div className={project.info__type}>
              <p style={{ color: color_2 }}>{type}</p>
            </div>
            <div className={project.info__title}>
              <h3>{title}</h3>
            </div>
            <div className={project.info__description}>
              <p>{description}</p>
            </div>
          </div>
          <div className={project.info__tech}>
            <ul>
              {techStack.map((tech, index) => (
                <li key={index} style={{ color: color_3 }}>{` ${tech} `}</li>
              ))}
            </ul>
          </div>
          <div className={project.info__buttons}>
            {figmaBtn && (
              <a className={project.info__fig_btn} href={figmaBtn}>
                <img src={figmaLogo} alt="" draggable="false" />
                Design
              </a>
            )}
            {gitHubBtn && (
              <a className={project.info__gh_btn} href={gitHubBtn}>
                <img src={gitHubLogo} alt="" draggable="false" />
                GitHub
              </a>
            )}
            {caseStudyBtn && (
              <a className={project.info__cs_btn} href={caseStudyBtn}>
                <img src={caseStudyLogo} alt="" draggable="false" />
                Case Study
              </a>
            )}
          </div>
        </div>

        <div className={project.card__divider}></div>

        {/* live link button */}

        <div className={project.card__live_btn}>
          <a href={liveLinkBtn}>
            <span>
              <img src={link} alt="->" />
              Visit Site
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  projectData: propTypes.shape({
    bg: propTypes.string,
    color_1: propTypes.string,
    color_2: propTypes.string,
    color_3: propTypes.string,
    imagePath: propTypes.string,
    type: propTypes.string,
    title: propTypes.string,
    description: propTypes.string,
    techStack: propTypes.arrayOf(propTypes.string),
    figmaBtn: propTypes.string,
    gitHubBtn: propTypes.string,
    caseStudyBtn: propTypes.string,
    liveLinkBtn: propTypes.string,
  }).isRequired,
};

export default ProjectCard;
