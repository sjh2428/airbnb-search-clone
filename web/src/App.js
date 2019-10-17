import React, { useState } from 'react';
import Card from './components/card';
import Info from './components/info';
import Average from './components/average';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>{visible ? '숨기기' : '보이기'}</button>
      <hr />
      {visible && <Card />}
      <Info />
      <Average />
    </div>
  );
}

export default App;
