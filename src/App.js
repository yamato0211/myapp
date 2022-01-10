import './App.css';
import './component/Button'
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [count3, setCount3] = useState(false)
  const [Mode, setMode] = useState('normalCountUpMode')
  const Btn3 = document.getElementById('btn3')

  const countUp = () => {
    if (count3) {
      setCount(count => count + 3)
    } else {
      setCount(count => count + 1)
    }
  }
  const countDown = () => {
    if (count > 0 && count3 === false) {
      setCount(count => count - 1);
    } else if (count > 2 && count3 === true) {
      setCount(count => count - 3)
    } else {
      alert('CountDown Error')
    }
  }
  const count3Up = () => {
    if (count3) {
      setCount3(false)
      Btn3.textContent = "3倍CountUpModeへ移行"
      setMode('normalCountUpMode')
    } else {
      setCount3(true)
      Btn3.textContent = 'normalCountUpModeへ移行'
      setMode('3倍CountUpMode')
    }
  }

  return (
    <div className="App">
      <p>Hello React</p>
      <p>corrent Num : {count}</p>
      <p>現在は{Mode}</p>
      <p>0より小さくなる時にエラーが出ます</p>
      <button onClick={countUp}>count Up!</button>
      <button onClick={countDown}>count Down!</button>
      <button onClick={count3Up} id='btn3'>3倍CountUpModeへ移行</button>
    </div>
  );
}

export default App;
