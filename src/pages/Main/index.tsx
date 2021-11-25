import { ButtonStyled } from "components/atoms/Button/style";
import { useState } from "react";
import { colors } from "styles/colors";
import { Card, GridColumn } from "styles/miscellany";
import { Input } from "../../components/atoms/Input";
import { MainContainer } from "./style";

export function Main() {
  const [calc, setCalc] = useState({
    value: 0,
    inputValue: "",
    result: 0,
    operator: "",
  });

  const buttons = [
    {
      text: "C",
      color: `${colors.gray}`,
      action: handleClear,
    },
    {
      text: "+/-",
      color: `${colors.gray}`,
      action: plusAndSub,
    },
    {
      text: "%",
      color: `${colors.gray}`,
      action: percent,
    },
    {
      text: "/",
      color: `${colors.primary}`,
      action: div,
    },
    {
      text: "7",
      color: `${colors.white}`,
      action: number,
    },
    {
      text: "8",
      color: `${colors.white}`,
      action: number,
    },
    {
      text: "9",
      color: `${colors.white}`,
      action: number,
    },
    {
      text: "x",
      color: `${colors.primary}`,
      action: multi,
    },
    {
      text: "4",
      color: `${colors.white}`,
      action: number,
    },
    {
      text: "5",
      color: `${colors.white}`,
      action: number,
    },
    {
      text: "6",
      color: `${colors.white}`,
      action: number,
    },
    {
      text: "-",
      color: `${colors.primary}`,
      action: sub,
    },
    {
      text: "1",
      color: `${colors.white}`,
      action: number,
    },
    {
      text: "2",
      color: `${colors.white}`,
      action: number,
    },
    {
      text: "3",
      color: `${colors.white}`,
      action: number,
    },
    {
      text: "+",
      color: `${colors.primary}`,
      action: add,
    },
    {
      text: "0",
      color: `${colors.white}`,
      style: "0 0 0 12px",
      action: number,
    },
    {
      text: ".",
      color: `${colors.white}`,
      action: dot,
    },
    {
      text: "←",
      color: `${colors.white}`,
      action: backspace,
    },
    {
      text: "=",
      color: `${colors.primaryDark}`,
      style: "0 0 12px 0",
      action: equalTo,
    },
  ];

  var x = 0;

  function handleClear() {
    setCalc({ ...calc, value: 0, inputValue: "", result: 0, operator: "" });
  }

  function backspace() {
    setCalc({
      ...calc,
      inputValue: calc.inputValue.slice(0, calc.inputValue.length - 1),
    });
  }

  function number(e) {
    setCalc({ ...calc, inputValue: calc.inputValue + e.target.innerText });
  }

  function add() {
    x = calc.result + Number(calc.inputValue);
    setCalc({
      ...calc,
      value: x,
      inputValue: "",
      result: x,
      operator: " +",
    });
  }

  function sub() {
    if (calc.result === 0) {
      x = Number(calc.inputValue);
    } else {
      x = calc.result - Number(calc.inputValue);
    }
    setCalc({
      ...calc,
      value: x,
      inputValue: "",
      result: x,
      operator: " -",
    });
  }

  function multi() {
    if (calc.result === 0) {
      x = Number(calc.inputValue);
    } else {
      x = calc.result * Number(calc.inputValue);
    }
    setCalc({
      ...calc,
      value: x,
      inputValue: "",
      result: x,
      operator: " x",
    });
  }

  function div() {
    if (calc.result === 0) {
      x = Number(calc.inputValue);
    } else {
      x = calc.result / Number(calc.inputValue);
    }
    setCalc({
      ...calc,
      value: x,
      inputValue: "",
      result: x,
      operator: " /",
    });
  }

  function plusAndSub() {
    x = Number(calc.inputValue);
    setCalc({
      ...calc,
      inputValue: `${x > 0 ? -x : x * -1}`,
      operator: " +/-",
    });
  }

  function percent() {
    if (calc.result === 0) {
      x = Number(calc.inputValue);
    } else {
      x = calc.result / Number(calc.inputValue);
    }
    setCalc({
      ...calc,
      value: x,
      inputValue: "",
      result: x,
      operator: " %",
    });
  }

  function dot() {
    setCalc({
      ...calc,
      inputValue: calc.inputValue + ".",
      operator: " .",
    });
  }

  function equalTo() {
    if (calc.operator === " +") {
      x = calc.result + Number(calc.inputValue);
    } else if (calc.operator === " -") {
      x = calc.result - Number(calc.inputValue);
    } else if (calc.operator === " x") {
      x = calc.result * Number(calc.inputValue);
    } else if (calc.operator === " /" || " %") {
      x = calc.result / Number(calc.inputValue);
    }
    setCalc({
      ...calc,
      value: x,
      inputValue: "",
      result: x,
      operator: "",
    });
  }

  return (
    <MainContainer>
      <Card>
        <Input value={calc.inputValue} result={calc.value}>
          {calc.value !== 0 && calc.value + calc.operator}
        </Input>
        <GridColumn>
          {buttons.map(({ text, color, action, style }, index) => {
            return (
              <ButtonStyled
                color={color}
                key={index}
                style={{ borderRadius: `${style}` }}
                onClick={action}
              >
                {text}
              </ButtonStyled>
            );
          })}
        </GridColumn>
      </Card>
    </MainContainer>
  );
}
