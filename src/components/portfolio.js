import React, { Component } from 'react';

import monitor3 from "../Assets/monitor3.png";
import NavBar from './navBar';

import { BsPower } from "react-icons/bs";

export default class Portfolio extends Component {
    render() {
        return(
            <div className="compscreen">
                <img className="monitor" src={monitor3} alt="monitor background"></img>
                <a className="powerOff" href="/">
                    <BsPower/>
                </a>
                <div className="screenOn">
                    <NavBar />
                    
                </div>
            </div>
        )
    }
}