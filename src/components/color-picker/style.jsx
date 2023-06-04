import styled from "styled-components";
import { colors } from "../../styles/colors";
import { theme } from "../../styles/themes";

export const ColorPickerStyle = styled.div``;

export const ColorPickerButton = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  background-color: ${(props) => props.color};
`;

export const ColorPickerMenu = styled.div`
  position: fixed;
  background-color: ${colors.grey["300"]};
  border-radius: ${theme.borderRadius.medium};
  box-shadow: ${theme.boxShadow.small};
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 6px;
  padding: 10px;
`;

export const ColorItemStyle = styled.button`
  width: 24px;
  height: 24px;
  border: ${(props) => (props.isSelected ? "3px solid black" : "none")};
  background-color: ${(props) => props.color};
`;
