import Control from "./Control";

function Content({ title, desc, onChangeMode = f => {} }) {
    return (
      <article>
        <h2 className="article_title">{title}</h2>
        {desc}

        <Control onChangeMode={onChangeMode}/>
      </article>
    );
}

export default Content;