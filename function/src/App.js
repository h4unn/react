import "./css/style.css";

import Subject from "./Components/Subject";
import TOC from "./Components/TOC";
import Content from "./Components/Content";

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

  let _title, _desc = null;
  if(mode === "welcome") {
    _title = welcome.title;
    _desc = welcome.desc;
  } else if(mode === "read") {
    for(let record of contents) {
      if(record.id === selectContentId) {
        _title = record.title;
        _desc = record.desc;
        break;
      }
    }
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

      <Content title={_title} desc={_desc} onChangeMode={_mode => setMode(_mode)} />
    </div>
  );
}

export default App;
