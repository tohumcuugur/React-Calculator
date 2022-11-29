import { useState } from 'react';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import Operators from './components/Operators';
import Digits from './components/Digits';
import "./index.css"

function App() {
  const [calc , setCalc] = useState("");
  const [result , setResult] = useState("");

  const ops= ["/","*","+","-","." ]

  const updateCalc = (value)=>{
    if(
      (ops.includes(value) && calc === '') || (ops.includes(value) && ops.includes(calc.slice(-1)))
    ){
      return 
    };

    setCalc(calc + value);

    if(!ops.includes(value)){
      setResult(eval(calc + value).toString());
    }
  };
  const calculate = () => {
    setCalc(eval(calc).toString());

  };
  const deleteLast = () => {
    if(calc === ""){
      return;
    }
      const value = calc.slice(0, -1);
      setCalc(value);
    
  };

  return (
    <div className="App">
      <div className='calculator'>
        <Wrapper>
          <Screen screenSendValue={{calc,result}} /> 
          <Operators opSendValue ={{updateCalc,deleteLast}}/>
          <Digits digSendValue= {{updateCalc,calculate}}/>
        </Wrapper>
      </div>
    </div>
  );
}

export default App;
