import { Component } from 'react';

import Control from './Control';

class ReadContent extends Component {
    render() {
        console.log("Content render");
    
        let _buttons = null;
        if(this.props.mode !== "welcome") {
            _buttons = <Control onChangeMode={this.props.onChangeMode}/>
        }
    
        return (
            <article>
                <h2 className="article_title">{this.props.title}</h2>
                {this.props.desc}
                {_buttons}
            </article>
        );
    }
}

export default ReadContent;