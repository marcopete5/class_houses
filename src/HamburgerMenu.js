import React, { Component } from 'react';
import Resizer from 'react-resize-detector';
import Navbar from './Navbar';

class HamburgerMenu extends Component {
    constructor(){
        super()
        this.state = {
            open: false,
            class: "hamDisplay"
        }
    }

    toggle = () => {
        this.setState(prevState => {
            return {
                open: !prevState.open
            }
        })
    }

    checkSize = () => {
        console.log('hit')
        if(window.innerWidth < 768){
            this.setState({class: "hamDisplay"})
        }else {
            this.setState({class: "hamHide"})
        }
    }
    render() {
        return (
            <div>
            <div className={this.state.class}>
                {!this.state.open ?
                    <img id='hamburger' onClick={this.toggle} src="https://cdn2.iconfinder.com/data/icons/4web-3/139/menu-512.png" alt=""/>
                    :
                    <Navbar toggle={this.toggle} />
                }
            </div>
            <Resizer handleWidth={true} onResize={this.checkSize} />
            </div>
        );
    }
}

export default HamburgerMenu;