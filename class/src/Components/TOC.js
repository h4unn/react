import { Component } from 'react';

class TOC extends Component {
    setAcive(id) {
        let anchors = document.getElementsByClassName("content");
        for(let i=0; i<anchors.length; i++){
            anchors[i].classList.remove("active");
        }
        anchors[id-1].classList.add("active");
    }

    shouldComponentUpdate(newProps, newState) {
        if(this.props.data === newProps.data) {
            return false;
        }

        return true;
    }

    render() {
        console.log("TOC render");

        let data = this.props.data;
        let lists = [];
        
        for(let content of data) {
            lists.push(
                <li key={content.id}>
                    <a className='content' href="/" onClick={function(id, e){
                       e.preventDefault();
                       this.props.onChangePage(id);
                       this.setAcive(id);
                    }.bind(this, content.id)}>{content.title}</a>
                </li>
            );
        }

        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default TOC;