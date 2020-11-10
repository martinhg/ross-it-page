import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services />
    </div>
  );
}

export default App;
