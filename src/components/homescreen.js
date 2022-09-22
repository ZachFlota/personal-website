import React, { Component } from 'react';

import monitor3 from "../Assets/monitor3.png";
import screensaver from "../Assets/screensaver.png";
import { BsPower } from "react-icons/bs";
import { BsFileTextFill }from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { BsPaletteFill } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";

export default class Homescreen extends Component {
    render() {
        return(
            <div className="compscreen">
                <img className="monitor" src={monitor3} alt="monitor background"></img>
                <a className="powerOff" href="/">
                    <BsPower/>
                </a>
                <div className="screenOn">
                    <img className="screensaver" src={screensaver} alt="screen saver"></img>
                        <div className="deskIcons">
                            <div className="aboutLink">
                                <a className="Link" href="/about">
                                    <BsPersonCircle />
                                </a>
                                <p className="linkTitle">About Me</p>
                            </div>
                            <div className="resumeLink" >
                                <a className="Link" href="/resume">
                                    <BsFileTextFill /> 
                                </a>
                                <p className="linkTitle" >Resume</p>
                            </div>
                            <div className="portfolioLink">
                                <a className="Link" href="/portfolio">
                                    <BsFillBriefcaseFill />
                                </a>
                                <p className="linkTitle">Portfolio</p>
                            </div>
                            <div className="artLink">
                                <a className="Link" href="/art">
                                    <BsPaletteFill />
                                </a>
                                <p className="linkTitle">Artwork</p>
                            </div>
                            <div className="contactLink">
                                <a className="Link" href="/contact">
                                    <BsTelegram />
                                </a>
                                <p className="linkTitle">Contact Me</p>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}