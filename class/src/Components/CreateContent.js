import { Component } from "react";

class CreateContent extends Component {
    render() {
        console.log("UpdateContent render");

        return (
            <article>
                <h2 className="article_title">Create</h2>
                <form action="/" method="post" onSubmit={function(e){
                    e.preventDefault();
                    this.props.onSubmit(e.target.title.value, e.target.desc.value);
                }.bind(this)}>
                    <p><input type="text" name="title" placeholder="title" /></p>
                    <p><textarea name="desc" placeholder="desc"></textarea></p>
                    <p><button type="submit">제출</button></p>
                </form>
            </article>
        );
    }
}

export default CreateContent;