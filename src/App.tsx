import React, { useState } from 'react';
import './App.css';
import { CalcHeader } from "./components/calc-header/calc-header";
import { CalcScreen } from "./components/calc-screen/calc-screen";
import { CalcButtons } from "./components/calc-buttons/calc-buttons";

function App() {
  const [firstNum, setFirstNum] = useState('');
  const [secondNum, setSecondNum] = useState('');
  const [operation, setOperation] = useState('');
  const [isOperationClicked, setIsOperationClicked] = useState(false);
  const [result, setResult] = useState(0);
  const [theme, setTheme] = useState('primary');

  const modifyTheme = (value: number) => {
    switch (value) {
      case 0:
        setTheme("primary");
        break;
      case 1:
        setTheme("white");
        break;
      case 2:
        setTheme("dark")
    }
  }

  const numClick = (value: string) => {
    !isOperationClicked ? setFirstNum(firstNum => {
      const newValue = firstNum + value;
      setResult(Number(newValue));
      console.log(newValue, 'fn');
      return newValue;
    }) : setSecondNum(secondNum => {
      const newValue = secondNum + value;
      setResult(Number(newValue));
      console.log(newValue, 'sn');
      return newValue;
    })
  };

  const calc = () => {
    if (operation === '+') {
      setResult(Number(firstNum) + Number(secondNum))
    }
    if (operation === '-') {
      setResult(result => Number(firstNum) - Number(secondNum));
    }
    if (operation === 'x') {
      setResult(Number(firstNum) * Number(secondNum))
    }
    if (operation === '/') {
      setResult(Number(firstNum) / Number(secondNum))
    }
  };

  const openClick = (value: string) => {
    setIsOperationClicked(true);
    setOperation(value);
    setFirstNum(result !== 0 ? result.toString() : '');
    setSecondNum('');
  }

  const deleteClick = () => {
    !isOperationClicked ? setFirstNum(firstNum => {
      const newValue = '';
      setResult(Number(newValue));
      console.log(newValue, 'fn');
      return newValue;
    }) : setSecondNum(secondNum => {
      const newValue = '';
      setResult(Number(newValue));
      console.log(newValue, 'sn');
      return newValue;
    })
  };

  const resetClick = () => {
    setIsOperationClicked(false);
    setFirstNum('');
    setSecondNum('');
    setOperation('');
    setResult(0);
  };

  return (
    <div className='App' data-theme={theme}>
      <div className='main'>
        <CalcHeader modifyFun={modifyTheme}></CalcHeader>
        <div className='calc'>
          <CalcScreen result={result}></CalcScreen>
          <CalcButtons
            handleOperation={openClick}
            handleResult={calc}
            handleNums={numClick}
            handleReset={resetClick}
            handleDel={deleteClick}></CalcButtons>
        </div>
      </div>
    </div>
  );
}

export default App;
