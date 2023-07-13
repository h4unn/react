import { Component } from "react";
import store from "../Store/store";

class AddNumber extends Component {
    state = {size: 1};

    render(){
        return(
            <div>
                <h1>Add Number</h1>
                <button onClick={function(){
                    store.dispatch({type: 'INCREMENT', size: this.state.size});
                }.bind(this)}>+</button>
                <input value={this.state.size} onChange={function(e){
                    this.setState({size: Number(e.target.value)});
                }.bind(this)}/>
            </div>
        );
    }
}

export default AddNumber;