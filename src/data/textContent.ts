interface NavbarTextContent {
  home: string;
  portfolio: string;
  resume: string;
  contacts: string;
  about: string;
}

interface TextContent {
  en: {
    navBar: NavbarTextContent;
  };
  ua: {
    navBar: NavbarTextContent;
  };
}

export const TEXT_CONTENT: TextContent = {
  en: {
    navBar: {
      home: "Home",
      portfolio: "Portfolio",
      resume: "Resume",
      contacts: "Contacts",
      about: "About Me",
    },
  },

  ua: {
    navBar: {
      home: "Головна",
      portfolio: "Портфоліо",
      resume: "Резюме",
      contacts: "Контакти",
      about: "Про мене",
    },
  },
};
