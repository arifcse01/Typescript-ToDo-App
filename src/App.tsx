import React, { useState } from 'react';

import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';


export interface IState{
  people: {
    name: string,
    img: string,
    salary: number,
    designation?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      salary: 3500,
      img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      designation: "Project Manager",
    },
    {
      name: "Kobe Bryant",
      salary: 2500,
      img: "https://fullpresscoverage.com/wp-content/uploads/2020/01/101524695-457220551.jpg",
      designation: "Back End Developer"
    }
  ]);
  

  return (
    <div className="App">
      <h1>My Team Member List</h1>   
      <List people = {people}></List>
      <AddToList people = {people} setPeople = {setPeople}></AddToList>       
    </div>
  );
}

export default App;
