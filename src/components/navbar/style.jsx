import styled from "styled-components";
import { theme } from "../../styles/themes";

export const StyledNavbar = styled.nav`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(props) => props.color};
  box-shadow: ${theme.boxShadow.medium};
  color: white;
  height: 50px;
  padding: 10px;
  margin-bottom: 15px;
`;

export const NavTitle = styled.p`
  font-weight: 600;
  font-size: 1.5em;
`;

export const NavItems = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 10px;
`;

export const NavItem = styled.li``;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
`;
