import { useState } from "react";
import { Divider, HamburguerButton, Nav, NavigationMenu } from "./styles";

export const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <Nav>
      <HamburguerButton onClick={() => setIsNavExpanded(!isNavExpanded)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </HamburguerButton>
      <NavigationMenu expanded={isNavExpanded}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <Divider />
          <li>
            <a href="/characters">Personagens</a>
          </li>
          <Divider />
          <li>
            <a href="/episodes">Episódios</a>
          </li>
          <Divider />
        </ul>
      </NavigationMenu>
    </Nav>
  );
};
