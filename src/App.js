import React from 'react';
import './App.scss';
import ToDoList from './components/ToDoList/ToDoList';
import WeatherInfo from "./components/WeatherWidget/WeatherWidget";


function App() {
  return (
    <div className="App">
        <WeatherInfo/>
        <ToDoList/>
    </div>
  );
}

export default App;
