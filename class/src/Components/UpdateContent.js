import { Component } from "react";

class UpdateContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            id : this.props.id,
            title : this.props.data.title,
            desc : this.props.data.desc
        }
    }
    render() {
        return (
            <article>
                <h2 className="article_title">Update</h2>
                <form action="/" method="post" onSubmit={function(e){
                    e.preventDefault();
                    this.props.onSubmit(this.state.id, this.state.title, this.state.desc);
                }.bind(this)}>
                    <p>
                        <input type="text" name="title" placeholder="title" value={this.state.title} onChange={function(e){
                            console.log(e.target.value);
                            this.setState({title : e.target.value});
                        }.bind(this)}/>
                    </p>
                    <p>
                        <textarea name="desc" placeholder="desc" value={this.state.desc} onChange={function(e){
                            this.setState({desc : e.target.value});
                        }.bind(this)}></textarea>
                    </p>
                    <p><button type="submit">수정</button></p>
                </form>
            </article>
        );
    }
}

export default UpdateContent;