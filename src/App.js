import React from 'react';
import './App.css';
import Header from './components/Header'
import Cover from './components/Cover'
import Shorten from './components/Shorten'
import Statistics from './components/Statistics';
import CTA from './components/CTA';
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header/>
      <Cover/>
      <Shorten/>
      <Statistics/>
      <CTA/>
      <Footer/>
    </>
  );
}

export default App;
