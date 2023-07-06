import './css/style.css';
import { useState } from 'react';
import Subject from './Components/Subject';
import TOC from './Components/TOC';

function App() {
  const [mode, setMode] = useState('welcome');
  const [selectContentId, setSelectContentId] = useState(1);
  const [subject, setSubject] = useState({ title: 'Test WEB', sub: 'Component' });
  const [welcome, setWelcome] = useState({ title: 'welcome', desc: 'Component Welcome' });
  const [contents, setContens] = useState([
    { id: 0, title: 'HTML', desc: 'HTML is Hyper Text Markup Language' },
    { id: 1, title: 'CSS', desc: 'Css is for design' },
    { id: 2, title: 'JAVASCRIPT', desc: 'javascript is interactive' },
    { id: 3, title: 'REACT', desc: 'React is for interactive' }
  ]);

  return (
    <div>
      <Subject title={subject.title} sub={subject.sub} onChagePage={f => setMode(f)} />
      <TOC data={contents} onChagePage={id => {
        setMode('read');
        setSelectContentId(id);
      }}/>
    </div>
  );
}

export default App;
