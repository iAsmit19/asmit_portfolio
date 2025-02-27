import propTypes from "prop-types";
import uniH from "../styles/components/universal-heading.module.scss";

const UniversalHeading = ({ head, subHeading }) => {
  return (
    <div className={uniH.uni_head}>
      <div className={uniH.uni_head__cont}>
        <div className={uniH.head_heading}>
          <h2>{head}</h2>
        </div>

        <div className={uniH.head__sub_heading}>
          <span className={uniH.sub_heading__lines}></span>
          <p>{subHeading}</p>
          <span className={uniH.sub_heading__lines}></span>
        </div>
      </div>
    </div>
  );
};

UniversalHeading.propTypes = {
  head: propTypes.string.isRequired,
  subHeading: propTypes.string.isRequired,
};

export default UniversalHeading;
