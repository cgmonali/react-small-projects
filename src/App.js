import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
 
  const [buttonState, setButtonState] = useState(true);
  // const [buttonName, setButtonName] = useState('arrange ascending order');
  const buttonName=buttonState?'Arrange in ascending order':'Arrange in descending order';
  const title=buttonState?"this is in decending order":"this is in ascending order";
  const changeTitleHandler = useCallback(() => {
    setButtonState((prev)=>!prev);
  },[]);

  

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={title} items={listItems} butstate={buttonState}/>
      < Button onClick={changeTitleHandler} butname={buttonName}/>
    </div>
  );
}

export default App;