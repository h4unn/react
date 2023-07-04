import { useRef, useState } from "react";

function UpdateContent({data ,onSubmit=f=>f}){
    const [title,setTitle] = useState(data.title);
    const [desc,setDesc] = useState(data.desc);
    const txtTitle = useRef();
    const areaDesc = useRef();

    return(
        <article>
            <h2 className="article_title">Update</h2>
            <form action="/" method="post" onSubmit={function(e){
                e.preventDefault();
                onSubmit(data.id ,txtTitle.current.value, areaDesc.current.value);
            }}>
                <p><input ref={txtTitle} type="text" name="title" value={title} onChange={function(e){
                    console.log(e.target.value);
                    setTitle(e.target.value);
                }} /></p>
                <p><textarea ref={areaDesc} name="desc" value={desc} onChange={function(e){
                    setDesc(e.target.value);
                    console.log(e.target.value);
                }}></textarea></p>
                <p><button type="submit">제출</button></p>
            </form>
        </article>
    );
}
export default UpdateContent;