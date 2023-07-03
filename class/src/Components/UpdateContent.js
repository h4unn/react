import { Component } from "react";

class UpdateContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.data.id,
            title: this.props.data.title,
            desc: this.props.data.desc
        };
        this.inputFormHabdler = this.inputFormHabdler.bind(this);
    }

    inputFormHabdler(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        console.log("UpdateContent render");

        return (
            <article>
                <h2 className="article_title">Update</h2>
                <form action="/" method="post" onSubmit={function(e){
                    e.preventDefault();
                    this.props.onSubmit(
                        this.state.id, this.state.title, this.state.desc
                    );
                }.bind(this)}>
                    <p>
                        <input 
                            type="text" name="title" placeholder="title" 
                            value={this.state.title}
                            onChange={this.inputFormHabdler}
                        />
                    </p>
                    <p>
                        <textarea 
                            name="desc" placeholder="desc" value={this.state.desc}
                            onChange={this.inputFormHabdler}
                        ></textarea>
                    </p>
                    <p><button type="submit">수정</button></p>
                </form>
            </article>
        );
    }
}

export default UpdateContent;