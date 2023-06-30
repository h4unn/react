import { Component } from "react";

class Control extends Component {
    render() {
        return (
            <div className="buttons">
                <button onClick={function(){
                    this.props.onChangeMode("create");
                }.bind(this)}>Create</button>
                <button onClick={function(){
                    this.props.onChangeMode("update");
                }.bind(this)}>Update</button>
                <button onClick={function(){
                    this.props.onChangeMode("delete");
                }.bind(this)}>Delete</button>
            </div>
        );
    }
}

export default Control;