import Control from "./Control";

function ReadContent({ title, desc, mode, onChangeMode = f => f }) {
    let _btn = null
    if (mode === 'welcome') {
        _btn = <Control onChangeMode={onChangeMode} />
    }
    return (
        <article>
            <h2 className="article_title">{title}</h2>
            {desc}
            {_btn}
        </article>
    );
}
export default ReadContent;