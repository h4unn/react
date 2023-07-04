import { useRef } from "react";

function CreateContent({onSubmit=f=>f}){
    const txtTitle = useRef();
    const areaDesc = useRef();

    return(
        <article>
            <h2 className="article_title">Create</h2>
            <form action="/" method="post" onSubmit={function(e){
                e.preventDefault();
                onSubmit(txtTitle.current.value, areaDesc.current.value);
            }}>
                <p><input ref={txtTitle} type="text" name="title" placeholder="title" /></p>
                <p><textarea ref={areaDesc} name="desc" placeholder="desc"></textarea></p>
                <p><button type="submit">제출</button></p>
            </form>
        </article>
    );
}
export default CreateContent;