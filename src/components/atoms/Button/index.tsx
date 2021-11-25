import { ButtonStyled } from "./style";

export function Button({ title }: any, { color }: any): JSX.Element {
  return <ButtonStyled color={color}>{title}</ButtonStyled>;
}
