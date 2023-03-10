import { useState, useEffect } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState('');

  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  console.log('i run all the time');

  useEffect(() => {
    console.log('I run only once.');
  }, []);

  useEffect(() => {
    if (keyword !== '' && keyword.length > 5)
      console.log(`I run when 'keyword' changes. keyword: ${keyword}`);
  }, [keyword]);

  useEffect(() => {
    console.log(`I urn when 'counter' changes> counter: ${counter}`);
  }, [counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type='text'
        placeholder='Search here...'
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};
export default App;
