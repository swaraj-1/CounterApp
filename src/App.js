import React from "react";
import Counter from "./component/Counter"

import './App.css';

function App() {
  return (
    <div className="App">
            <header className="App-header">Counter App</header>
      <div className='counter'>
      <Counter />
      </div>
    </div>
  );
}

export default App;
