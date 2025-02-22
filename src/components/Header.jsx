import header from "../styles/components/header.module.scss";
import soundDark from "../assets/icons/sound_icons/night/sound_icon.svg";
import soundLight from "../assets/icons/sound_icons/day/sound_icon.svg";
import themeDark from "../assets/icons/theme_icons/night/moon.svg";
import themeLight from "../assets/icons/theme_icons/day/sun.svg";
import { useContext } from "react";
import AppContext from "../context/AppContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(AppContext);
  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <header>
      <div className={header.header__cont}>
        <div className={header.header__buttons_cont}>
          <button
            className={`${header.header__buttons} ${header.header__sound_button}`}
          >
            <img src={theme === "dark" ? soundDark : soundLight} alt="" draggable="false" />
          </button>
          <button
            className={`${header.header__buttons} ${header.header__theme_button}`}
            onClick={handleThemeToggle}
          >
            <img src={theme === "dark" ? themeDark : themeLight} alt="" draggable="false" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
