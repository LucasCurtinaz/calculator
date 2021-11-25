import styled, { css } from "styled-components";
import { colors } from "styles/colors";

interface ButtonStyledProps {
  color: string;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  /* font-size: 20px; */
  height: 60px;
  color: #4c4c4c;
  border: 1px solid rgba(0, 0, 0, 0.05);

  ${({ color }) => css`
    background-color: ${color};
  `};
`;

ButtonStyled.defaultProps = {
  color: `${colors.white}`,
};
