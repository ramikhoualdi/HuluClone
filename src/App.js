import './App.css';
import Header from './Header.js'
import Nav from './Nav.js'
import Content from './Content.js'
import requests from'./requests'
import { useState } from 'react';

function App() {
  const [selectedOp, setSelectedOp] = useState(requests.fetchTrending)
  
  return (
    <div className="app">
        <Header />
        <Nav setSelectedOp={setSelectedOp} />
        <Content selectedOp={selectedOp} />
    </div>
  );
}

export default App;
