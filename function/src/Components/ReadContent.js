import Control from "./Control";

function ReadContent({ title, desc, mode="", onChangeMode = f => f }) {
  let _artice= null;
  if(mode !== "welcome"){
    _artice = <Control onChangeMode={onChangeMode}/>;
  }

  return (
    <article>
      <h2 className="article_title">{title}</h2>
      {desc}

      {_artice}
    </article>
  );
}

export default ReadContent;