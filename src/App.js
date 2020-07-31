import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from './components/search-box/search-box.component.jsx'
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
  handleChange = (e) => {
      this.setState({ SearchField: e.target.value })
  }
  render() {
    const { monsters, SearchField } = this.state;
    const filteredMonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(SearchField.toLocaleLowerCase()));
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='Search monsters'
          handleChange = {this.handleChange}
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}
export default App;
