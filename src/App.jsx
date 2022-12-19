import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  const onClick = () => setCounter((prev) => prev + 1);
  console.log('render');
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};
export default App;
