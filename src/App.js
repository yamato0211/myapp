import './App.css';
import './component/Button'
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(count => count + 1);
  }
  const countDown = () => {
    if (count > 0) {
      setCount(count => count - 1);
    } else {
      alert("countDown Error");
    }
  }

  return (
    <div className="App">
      <p>Hello React</p>
      <p>corrent Num : {count}</p>
      <button onClick={countUp}>count Up!</button>
      <button onClick={countDown}>count Down!</button>
    </div>
  );
}

export default App;
