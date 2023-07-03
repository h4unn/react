
function TOC({data=[], onChangePage=()=>{}}) {
  let lists = [];

  for(let content of data){
    lists.push(
      <li key={content.id}>
        <a href="/" className="content" onClick={e => {
          e.preventDefault();
          setActive(content.id);
          onChangePage(content.id);
        }}>{content.title}</a>
      </li>
    );
  }

  return (
    <nav>
      <ul>
        {lists}
      </ul>
    </nav>
  );
}

function setActive(id) {
  let anchores = document.getElementsByClassName("content");
  
  for(let i=0; i<anchores.length; i++){
    anchores[i].classList.remove("active");
  }

  anchores[id-1].classList.add("active");
}

export default TOC;