import styled from "styled-components";
import { Link } from "react-router-dom";

export const SideBarContainer = styled.aside`
  width: 120px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  background-color: ${props => props.theme.colors.primary};
`;

export const LogoImg = styled.img`
  width: 77px;
  height: 44px;
`;

export const NavBar = styled.ul`
  width: 100px;
  height: 100vh;
  
  justify-content: space-evenly;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NavBarItem = styled.li`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SideBarLink = styled(Link)`
  text-decoration: none;
  text-decoration-line: none;
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme.colors.secondary};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px
`