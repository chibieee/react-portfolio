import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className="header"> 
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#tech">Technologies</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        )
    }
}