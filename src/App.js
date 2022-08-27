import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  onSearchChange = event => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  render() {
    const filteredMonsters = this.state.monsters.filter(monster => {
      return monster.name.toLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search monsters"
          onChange={this.onSearchChange}
        />
        {filteredMonsters.map(monster => {
          return <h1 key={monster.name}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
