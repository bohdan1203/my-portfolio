import Select from "react-select";

import { LuSun } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";

import { StyledHeader } from "../styles/Header.styled";
import { StyledSettingsSection } from "../styles/SettingsSection.styled";
import NavigationLink from "./NavigationLink";
import ThemeToggler from "./ThemeToggler";
import { CustomTheme } from "../interfaces/CustomTheme";

import { STYLE_CONSTANTS } from "../styles/styleContstants";
import { TEXT_CONTENT } from "../data/textContent";

import useLanguages from "../hooks/useLanguages";

import { Language } from "../interfaces/Language";

interface Props {
  setTheme: React.Dispatch<React.SetStateAction<CustomTheme>>;
}

function Header({ setTheme }: Props) {
  const options = [
    { value: "en", label: "English" },
    { value: "ua", label: "Українська" },
  ];

  const { language, setLanguage } = useLanguages();

  return (
    <StyledHeader>
      <nav>
        <ul>
          <li>
            <NavigationLink
              to="/"
              textContent={TEXT_CONTENT[language as Language].navBar.home}
            />
          </li>
          <li>
            <NavigationLink
              to="/portfolio"
              textContent={TEXT_CONTENT[language as Language].navBar.portfolio}
            />
          </li>
          <li>
            <NavigationLink
              to="/resume"
              textContent={TEXT_CONTENT[language as Language].navBar.resume}
            />
          </li>
          <li>
            <NavigationLink
              to="/contacts"
              textContent={TEXT_CONTENT[language as Language].navBar.contacts}
            />
          </li>
          <li>
            <NavigationLink
              to="/about"
              textContent={TEXT_CONTENT[language as Language].navBar.about}
            />
          </li>
        </ul>
      </nav>
      <StyledSettingsSection>
        <Select
          defaultValue={options[0]}
          options={options}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              width: "10rem",
              borderRadius: "8px",
              backgroundColor: STYLE_CONSTANTS.colors.white,
              color: STYLE_CONSTANTS.colors.black,
            }),
            option: (baseStyles) => ({
              ...baseStyles,
              backgroundColor: STYLE_CONSTANTS.colors.white,
              color: STYLE_CONSTANTS.colors.black,
            }),
            menu: (baseStyles) => ({
              ...baseStyles,
              backgroundColor: STYLE_CONSTANTS.colors.white,
            }),
          }}
          onChange={(selected) => setLanguage(selected?.value as Language)}
        />
        <ThemeToggler
          option1={<LuSun />}
          option2={<LuMoon />}
          onClick={setTheme}
        />
      </StyledSettingsSection>
    </StyledHeader>
  );
}

export default Header;
