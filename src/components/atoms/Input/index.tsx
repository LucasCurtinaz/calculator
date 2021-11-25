import { InputContainer, InputStyled } from "./style";

export function Input({ value, children }: any) {
  return (
    <InputContainer>
      <p style={{ width: "97%", color: "#eeeeee", textAlign: "right" }}>
        {children}
      </p>
      <InputStyled value={value} />
    </InputContainer>
  );
}
