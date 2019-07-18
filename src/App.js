import React, { useState } from 'react';
import Header from './Header';
import Button from './Button';
import Coeff from './Coeff';
import List from './List';
import './App.css';

function App() {
  const [entries, setEntries] = useState([]);
  return (
    <div className="App">
      <Header />
      <List entries={entries} />
      <Coeff />
      <Button text='zalupa' />
    </div>
  );
}

export default App;
