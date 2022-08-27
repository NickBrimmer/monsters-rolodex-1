import { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // local state
  constructor(){ // available on all class components, when "constructed"
    super();  // calls any other underlying classes you are calling with your method
    
    // this is referencing THIS class
    // JavaScript knows a change by referencing a new memory object
    // Object.assign({}, obj1)
    this.state = {
      name: 'Nick',
      company: "Emsi"  // all React cares about is that the key matches, and will just overwrite the value
    }
  }

  // this is what you are RENDERING
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <p>
            Hello {this.state.name}, I work at {this.state.company}
          </p>
          {/* setting state to a NEW object -- SHALLOW MERGE */}
          <button onClick={() => {
            this.setState({name: "Joey"}) // state updated Asynchronously!!!
            // console.log(this.state) 
            // this.setState(() => {}, () => {})  (updater function, )
            this.setState((state, props) => {
              return {
                name: "Gabe"
              }
            }, () => {
              // optional second callback - "call back when the previous function is fully done"
              // this function is going to run synchronously within the closure.
              console.log(this.state)
            }) 
          }}>Change my name</button>
          
        </header>
      </div> 
    );
  }
}

export default App;
