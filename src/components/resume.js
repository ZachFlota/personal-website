import React, { Component } from 'react';

import monitor3 from "../Assets/monitor3.png";
import NavBar from './navBar';
import resume from "../Assets/resume.png";
import { BsPower } from "react-icons/bs";

export default class Resume extends Component {
    render() {
        return(
            <div className="compscreen">
                <img className="monitor" src={monitor3} alt="monitor background"></img>
                <a className="powerOff" href="/">
                    <BsPower/>
                </a>
                <div className="screenOn">
                    <NavBar />
                    <img className="resume" src={resume} alt="resume"></img>
                </div>
            </div>
        )
    }
}