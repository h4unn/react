import { Component } from 'react';
import './App.css';
import AddNumberRoot from './Components/AddNumberRoot';
import DisplayNumberRoot from './Components/DisplayNumberRoot';

class App extends Component {
  state = {number: 0};
  
  render() {
    return (
      <div className="App">
        <h1>Root</h1>
        <AddNumberRoot onClick={function(size){
          this.setState({number: this.state.number + size});
        }.bind(this)} />
        <DisplayNumberRoot number={this.state.number} />
      </div>
    );
  }
}

export default App;
