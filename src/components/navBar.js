import React, { Component } from 'react';
import { BsXLg } from "react-icons/bs";

export default class NavBar extends Component {
    render() {
        return(
            <div className="navBar">
                <a className="exitButton" href="/monitor">
                    <BsXLg />
                </a>
            </div>
        )
    }

}