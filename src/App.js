import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from './components/ButtonBox'
import Button from './components/Button'
import CalcProvider from "./context/CalcContext";
import { Textfit } from "react-textfit";
// import { ThemeContext } from './src/context/ThemeContext';
// import React, { useState } from 'react';


const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "⌫ " ,"="],
];

function App() {
  return (
    <CalcProvider>
      <Wrapper>
      <Textfit style={{
         color: "black",
         fontSize:25,
           fontFamily:'monospace',
           fontSize:30,
           }}>fx-TP-Calculator~082022</Textfit>
        <Screen />
        <ButtonBox>
          {btnValues.flat().map((btn, i) => (
            <Button
              value={btn}
              key={i}
            />
          ))}
        </ButtonBox>
      </Wrapper>
    </CalcProvider>
  );
}

export default App;
