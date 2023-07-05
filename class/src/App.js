<<<<<<< HEAD
import './css/style.css';
import { Component } from 'react';

import Subject from './Components/Subject';
import TOC from './Components/TOC'
import ReadContent from './Components/ReadContent';
import CreateContent from './Components/CreateContent';
import UpdateContent from './Components/UpdateContent';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode: "welcome",
      select_content_id: 2,
      subject: {title: "WEB", sub: "use Class Component"},
      welcome: {title: "Welcome", desc: "Hello React!!!"},
      contents: [
        {id: 1, title: "HTML5", desc: "Hyper Text Markup Language"},
        {id: 2, title: "CSS3", desc: "CSS is for design"},
        {id: 3, title: "JavaScript", desc: "JavaScript is for interactive"},
        {id: 4, title: "React", desc: "React is dynamic"}
      ]
    };
  }

  getMaxId(contents=[]) {
    let max = contents[0].id;
    for(let i=1; i<contents.length; i++) {
      if(max < contents[i].id) {
        max = contents[i].id;
      }
    }
    return max;
  }

  getReadContent() {
    for(let data of this.state.contents) {
      if(data.id == this.state.select_content_id) {
        return data;
      }
    }
  }

  render() {
    console.log("App render");

    let _title, _desc, _article = null;

    if(this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent 
        title={_title} 
        desc={_desc} 
        mode={"welcome"}
        onChangeMode={function(_mode){
          this.setState({mode: _mode});
        }.bind(this)} 
      />
    } else if(this.state.mode === "read") {
      let data = this.getReadContent();
      _article = <ReadContent 
        title={data.title} 
        desc={data.desc} 
        onChangeMode={function(_mode){
          if(_mode === "delete") {
            let newContents = Array.from(this.state.contents);
            
            for(let i=0; i<newContents.length; i++) {
              if(newContents[i].id === this.state.select_content_id){
                newContents.splice(i, 1);
                break;
              }
            }

            this.setState({contents: newContents, mode: "welcome"});
          } else {
            this.setState({mode: _mode});
          }
        }.bind(this)} 
      />
    } else if(this.state.mode === "create") {
      _article = <CreateContent onSubmit={function(_title, _desc){
        let newContents = Array.from(this.state.contents);
        let _id = this.getMaxId(this.state.contents) + 1;
        
        newContents.push({id: _id, title: _title, desc: _desc});
        
        this.setState({
          contents: newContents,
          mode: "read",
          select_content_id: _id
        });
      }.bind(this)} />
    } else if(this.state.mode === "update") {
      let _data = this.getReadContent();
      _article = <UpdateContent 
        data={_data} 
        onSubmit={function(_id, _title, _desc){
          console.log(_id, _title, _desc);
          
          let newContents = Array.from(this.state.contents);
          
          for(let i=0; i<newContents.length; i++){
            if(_id === newContents[i].id) {
              newContents[i].title = _title;
              newContents[i].desc = _desc;
              break;
            }
          }

          this.setState({contents: newContents, mode: "read"});
        }.bind(this)}
      />
    }
=======
import {Component,useState} from 'react';
import './App.css';
>>>>>>> 0f96c1f10681a36e39ae5c9279c4d72144cb3de2

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
