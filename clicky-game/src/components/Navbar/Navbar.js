import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
            <ul>
                <li className="alignLeft">Rick and Morty</li>
                <li className="alignCenter"></li>
                <li className="alignRight">Score: {this.props.score}</li>
            </ul>
            </nav>
        );
    }
}

export default Navbar;