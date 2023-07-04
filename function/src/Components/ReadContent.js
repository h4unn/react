import Control from "./Control";

function ReadContent({ title, desc, mode="" ,onChangeMode = f => f }) {
  let _article = null;
  if(mode !== "welcome"){
    _article = <Control onChangeMode={onChangeMode}/>;
  }

  return (
    <article>
      <h2 className="article_title">{title}</h2>
      {desc}
      {_article}
    </article>
  );
}

export default ReadContent;