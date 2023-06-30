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
      for(let content of this.state.contents) {
        if(content.id == this.state.select_content_id) {
          _title = content.title;
          _desc = content.desc;
          break;
        }
      }
      _article = <ReadContent 
        title={_title} 
        desc={_desc} 
        onChangeMode={function(_mode){
          this.setState({mode: _mode});
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
      _article = <UpdateContent />
    }

    return(
      <div>
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub} 
          onChangePage={function(_mode){
            this.setState({mode: _mode});
          }.bind(this)} 
        />

        <TOC data={this.state.contents} onChangePage={function(id){
          console.log(id);
          this.setState({mode: "read", select_content_id: id});
        }.bind(this)} />

        {_article}
      </div>
    );
  }
}

export default App;
