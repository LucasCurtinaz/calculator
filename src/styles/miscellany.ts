import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 288px;
  border-radius: 12px;
  box-shadow: 0px 10px 50px 20px rgba(0, 0, 0, 0.3);
`;

export const GridColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
