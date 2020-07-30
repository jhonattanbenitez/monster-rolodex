import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      SearchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, SearchField } = this.state;
    const filteredMonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(SearchField.toLocaleLowerCase()));
    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search monsters"
          onChange={e =>  this.setState({ SearchField: e.target.value })}/>
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}
export default App;
