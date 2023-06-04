import styled from "styled-components";
import { css } from "styled-components";
import { theme } from "../../styles/themes";

export const StyledButton = styled.button`
  background-color: ${(props) => props.color};
  color: white;
  padding: 10px 20px;
  border: none;
  box-shadow: ${theme.boxShadow.medium};
  width: fit-content;

  border-radius: ${theme.borderRadius.small};
  &:hover {
    opacity: 0.75;
  }
  &:active {
    opacity: 0.65;
    box-shadow: ${theme.boxShadow.small};
  }
  &:disabled {
    opacity: 0.9;
  }
`;
