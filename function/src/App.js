import "./css/style.css";

import Subject from "./Components/Subject";
import TOC from "./Components/TOC";
import ReadContent from "./Components/ReadContent";
import CreateContent from "./Components/CreateContent";
import UpdateContent from "./Components/UpdateContent";

import { useState } from "react";

function App() {
  const [mode, setMode] = useState("welcome");
  const [selectContentId, setSelectContentId] = useState(2);
  const [subject, setSubject] = useState({title: "WEB", sub: "use Function Component"});
  const [welcome, setWelcome] = useState({title: "Welcome", desc: "Hello React!!!"});
  const [contents, setContents] = useState([
    {id: 1, title: "HTML5", desc: "HTML is Hyper Text Markup Language"},
    {id: 2, title: "CSS3", desc: "CSS is for design"},
    {id: 3, title: "JavaScript", desc: "JavaScript is for interactive"},
    {id: 4, title: "React", desc: "React는 역동적인 화면을 표현해 줍니다."}
  ]);

  let _title, _desc, _artice = null;
  if(mode === "welcome") {
    _title = welcome.title;
    _desc = welcome.desc;
    _artice = <ReadContent title={_title} desc={_desc} mode={mode} onChangeMode={_mode => setMode(_mode)} />
  
  } else if(mode === "read") {
    let record = getContent(contents, selectContentId);
    _artice = <ReadContent title={record.title} desc={record.desc} 
      onChangeMode={function(_mode) {
        if(_mode === "delete") {
          if(window.confirm("really?")) {
            let data = Array.from(contents);
            for(let i=0; i<data.length; i++){
              if(selectContentId === data[i].id){
                data.splice(i, 1);
                break;
              }
            }

            setContents(data);
            setMode("welcome");
            window.confirm("deleted");
          }
        } else {
          setMode(_mode);
        }
      }} 
    />

  } else if(mode === "create") {
    _artice = <CreateContent onSubmit={(_title, _desc) => {
      let _id = getNewId(contents);
      let newContents = contents.concat({id: _id, title: _title, desc: _desc});
      
      setContents(newContents);
      setMode("read");
      setSelectContentId(_id);
    }} />

  } else if(mode === "update") {
    let record = getContent(contents, selectContentId);

    _artice = <UpdateContent data={record} onSubmit={(_id, _title, _desc) => {
      let data = Array.from(contents);
      
      for(let i=0; i<data.length; i++) {
        if(_id === data[i].id) {
          data[i].title = _title;
          data[i].desc = _desc;
          break;
        }
      }

      setContents(data);
      setMode("read");
    }} />
  }

  return (
    <div>
      <Subject 
        title={subject.title} 
        sub={subject.sub} 
        onChangePage={_mode => setMode(_mode)}
      />

      <TOC data={contents} onChangePage={id => {
        setMode("read");
        setSelectContentId(id);
      }} />

      {_artice}
    </div>
  );
}

function getNewId(contents) {
  let max = contents[0].id;

  for(let i=1; i<contents.length; i++) {
    if(max < contents[i].id) {
      max = contents[i].id;
    }
  }
  return ++max;
}

function getContent(contents, selectContentId) {
  for(let record of contents) {
    if(record.id === selectContentId) {
      return record;
    }
  }
}

export default App;
