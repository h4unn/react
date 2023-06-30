function Subject({title="", sub="", onChangePage=()=>{}}) {
  return (
    <header>
      <h1>
        <a href="/" onClick={e => {
          e.preventDefault();
          onChangePage("welcome");
        }}>{title}</a>
      </h1>
      {sub}
    </header>
  );
}

export default Subject;