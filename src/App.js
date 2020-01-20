import React from 'react';
import './App.css';
import PropertyList from './PropertyList/PropertyList';

function App() {
  return (
    <div className="main">
      <h2 className="main__title">Доска объявлений</h2>
      <PropertyList />
    </div> 
  );
}

export default App;
