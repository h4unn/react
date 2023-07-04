import {Component,useState} from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Hello World!</h1>
      <FuncComp initNumber={2} />
      <ClassComp initNumber={2} />
    </div>
  );
}
function FuncComp({initNumber}){
  const numberState = useState(initNumber);
  let number = numberState[0];
  let setNumber = numberState[1];
  console.log(number)
  console.log(setNumber);
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {numberState[0]}</p>
    </div>
  );
}
class ClassComp extends Component {
  // state = {
  //   number : this.props.initNumber;
  // }
  render(){
    return(
      <div className='container'>
        <h2>Class Style Component</h2>
        <p>Number : {this.props.initNumber}</p>
        
      </div>
    );
  }
}
export default App;
