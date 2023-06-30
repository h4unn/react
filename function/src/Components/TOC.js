function TOC({data=[], onChangePage=()=>{}}) {
  let lists = [];

  for(let content of data){
    lists.push(
      <li key={content.id}>
        <a href="/" onClick={e => {
          e.preventDefault();
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

export default TOC;