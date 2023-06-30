function Content({title, desc}) {
    return (
      <article>
        <h2 className="article_title">{title}</h2>
        {desc}
      </article>
    );
}

export default Content;