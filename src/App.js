import React from 'react';
import './App.css';
import Header from './components/Header'
import Cover from './components/Cover'
import Shorten from './components/Shorten'
import Statistics from './components/Statistics';

function App() {
  return (
    <>
      <Header/>
      <Cover/>
      <Shorten/>
      <Statistics/>
    </>
  );
}

export default App;
