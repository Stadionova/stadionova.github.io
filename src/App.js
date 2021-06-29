import './App.scss';
import SearchContainer from './Components/Search/SearchContainer';
import DetailedSnippet from './Components/DetailedSnippet/DetailedSnippet';
import { Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      <Route path='/works/' component={DetailedSnippet} />
      <Route path='/' component={SearchContainer} />
    </div>
  );
}

export default App;
