import './css/style.css';
import { useState } from 'react';
import Subject from './Components/Subject';
import ReadContent from './Components/ReadContent';
import TOC from './Components/TOC';

function App() {
  const [mode, setMode] = useState('welcome');
  const [selectContentId, setSelectContentId] = useState(1);
  const [subject, setSubject] = useState({ title: 'Hyundai', sub: 'Component' });
  const [welcome, setWelcome] = useState({ title: 'welcome', desc: 'Component Welcome' });
  const [contents, setContens] = useState([
    { id: 0, title: 'HTML', desc: 'HTML is Hyper Text Markup Language' },
    { id: 1, title: 'CSS', desc: 'Css is for design' },
    { id: 2, title: 'JAVASCRIPT', desc: 'javascript is interactive' },
    { id: 3, title: 'REACT', desc: 'React is for interactive' }
  ]);
  let _title, _desc, _article = null;
  if (mode === 'welcome') {
    _title = welcome.title;
    _desc = welcome.desc;
    _article = <ReadContent title={_title} desc={_desc} mode={mode} onChangeMode={_mode => setMode(_mode)} />
  } else if (mode === 'read') {
    let cont = getContent(contents, selectContentId);
    _article = <ReadContent title={cont.title} desc={cont.desc}
    />
  }
  return (
    <div>
      <Subject title={subject.title} sub={subject.sub} onChagePage={_mode => setMode(_mode)} />
      <TOC data={contents} onChagePage={id => {
        setMode('read');
        setSelectContentId(id);
      }} />
      {_article}
    </div>
  );
}
function getContent(contents, selectContentId) {
  for (let cont of contents) {
    if (cont.id === selectContentId) {
      return cont
    }
  }
}

export default App;
