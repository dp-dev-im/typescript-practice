import { useState } from "react";
import styled from "styled-components";

const Container = styled.div<ICircleProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 5px solid ${(props) => props.borderColor};
`;

interface ICircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

function Circle({ bgColor, borderColor, text = "default text" }: ICircleProps) {
  const [counter, setCounter] = useState<number | string>();
  return (
    <>
      <h1>Circle</h1>
      <Container bgColor={bgColor} borderColor={borderColor ?? "black"}>
        {text}
      </Container>
    </>
  );
}

export default Circle;

interface ISay {
  name: string;
  age: number;
}

const sayHello = (obj: ISay) => {
  return `my name is ${obj.name} your age is ${obj.age} yo`;
};

// console.log(sayHello({ name: "name", age: 8 }));
