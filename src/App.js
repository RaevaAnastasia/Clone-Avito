import React from 'react';
import './App.css';
import {Switch,Route} from "react-router-dom";
import PropertyList from './PropertyList/PropertyList';
import PropertyDetails from './PropertyDetail/PropertyDetail';

function App() {
  return (
    <Switch>
      <Route path='/:id'>
        <PropertyDetails />
      </Route>
      <Route path='/'>
        <div className="main container">
          <h2 className="main__title">Доска объявлений</h2>
          <PropertyList />
        </div> 
      </Route>
    </Switch>
  );
}

export default App;
