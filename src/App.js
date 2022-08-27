import { Component } from 'react'
import './App.css';

class App extends Component {
  // local state
  constructor(){ // available on all class components, when "constructed"
    super();  // calls any other underlying classes you are calling with your method
    
    // this is referencing THIS class
    // JavaScript knows a change by referencing a new memory object
    // Object.assign({}, obj1)
    this.state = {
      monsters: [
        {
          name: 'Linda'
        },
        {
          name: 'Frank'
        },
        {
          name: 'Jackie'
        } 
      ]
    }
  }

  // this is what you are RENDERING
  render() {

    return (
      <div className="App">
          {
            this.state.monsters.map((monster) => {
              return <h1 key={monster.name}>{monster.name}</h1>
            })
          }
      </div> 
    );
  }
}

export default App;
