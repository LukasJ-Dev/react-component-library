import styled from "styled-components";
import { colors } from "../../styles/colors";
import { theme } from "../../styles/themes";

export const CardStyle = styled.div`
  background-color: ${theme.colors.light};
  box-shadow: ${theme.boxShadow.light};
  border-radius: ${theme.borderRadius.medium};
  display: flex;
  gap: 5px;
  flex-direction: column;
  padding: 20px;
  width: 300px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const CardTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const CardSecondaryText = styled.p`
  color: ${colors.grey["600"]};
  font-weight: 500;
`;

export const CardBodyText = styled.p``;

export const CardAction = styled.p``;
