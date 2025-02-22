import navIs from "../styles/components/nav_island.module.scss";
import navLogo from "../assets/images/logo/nav_logo.svg";
import feather from "../assets/icons/feather.svg";

const NavigationIsland = () => {
  return (
    <div className={navIs.nav_island}>
      <div className={navIs.nav_island__cont}>
        <img
          className={navIs.nav__logo}
          src={navLogo}
          alt=""
          draggable="false"
        />
        <div className={navIs.nav_island__elements}>
          <div className={navIs.elements__work}>
            <a>Work</a>
          </div>
          <div className={navIs.elements__resume}>
            <a href="/resume.pdf" download="Asmit_Resume.pdf">
              Resume
            </a>
          </div>
          <div className={navIs.nav__cta}>
            <a href="mailto:iamasmit1919@gmail.com">
              Contact Me
              <img src={feather} alt="->" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationIsland;
