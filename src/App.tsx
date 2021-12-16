import React from 'react';
import './App.css';
import Hero from './components/Hero'
import QuotesList from './components/QuotesList'
import StickFooter from './components/StickFooter'

function App() {
  return (
    <div className="App">
      <StickFooter />
      <Hero />
      <QuotesList />
    </div>
  );
}

export default App;
