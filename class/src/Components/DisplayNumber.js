import { Component } from "react";
import store from "../Store/store";

class DisplayNumber extends Component {
    state = {number: store.getState().number}
    constructor(props) {
        super(props);
        store.subscribe(function(){
            this.setState({number: store.getState().number})
        }.bind(this));
    }

    render(){
        return (
            <div>
                <h1>Display Number</h1>
                <input value={this.state.number} readOnly />
            </div>
        );
    }
}

export default DisplayNumber;