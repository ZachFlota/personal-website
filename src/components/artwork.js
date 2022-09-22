import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import monitor3 from "../Assets/monitor3.png";
import NavBar from './navBar';

import PupCrew from '../Assets/PupCrew.jpg';
import Puppulents from '../Assets/Puppulents.jpg';
import Jackson from '../Assets/Jackson.jpg';
import CallMeByYourName from '../Assets/CallMeByYourName.JPG';
import Rose from '../Assets/Rose.jpg';
import BrittanyHoward from '../Assets/BrittanyHoward.JPG';
import StevieNicks from '../Assets/StevieNicks.JPG';
import AmyWinehouse from '../Assets/AmyWinehouse.JPG';
import CourtneyLove from '../Assets/CourtneyLove.JPG';
import GwenStefani from '../Assets/GwenStefani.jpg';
import SelfPortrait from '../Assets/SelfPortrait.jpg';
import Darwin from '../Assets/Darwin.jpg';
import Swiss from '../Assets/Swiss.jpg';
import Callie from '../Assets/Callie.JPG';

import { BsPower } from "react-icons/bs";

export default class ArtWork extends Component {
    render() {
        return(
            <div className="compscreen">
                <img className="monitor" src={monitor3} alt="monitor background"></img>
                <a className="powerOff" href="/">
                    <BsPower/>
                </a>
                <div className="screenOn">
                    <NavBar />
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="art"
                                src={PupCrew}
                                alt="Portrait of dogs in car"
                            />
                            <Carousel.Caption>
                                <h3>Pup-crew</h3>
                                <p>Oil Pastel on Paper</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="art"
                                src={Puppulents}
                                alt="Portrait of dogs and succulents"
                            />
                            <Carousel.Caption>
                                <h3>Puppulents</h3>
                                <p>Oil Pastel on Paper</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="art"
                                src={Jackson}
                                alt="Portrait of a boston terrier"
                            />
                            <Carousel.Caption>
                                <h3>Jackson</h3>
                                <p>Oil Pastel on Paper</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="art"
                                src={CallMeByYourName}
                                alt="Portrait of a boy"
                            />
                            <Carousel.Caption>
                                <h3>Scenes from Movies: Call Me By Your Name</h3>
                                <p>Oil Pastel on Paper</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="art"
                                src={Rose}
                                alt="Portrait of a girl"
                            />
                            <Carousel.Caption>
                                <h3>Scenes from Movies: Titanic</h3>
                                <p>Oil Pastel on Paper</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="art"
                                src={BrittanyHoward}
                                alt="Portrait of Brittany Howard"
                            />
                            <Carousel.Caption>
                                <h3>Brittany Howard</h3>
                                <p>Procreate</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="art"
                                src={StevieNicks}
                                alt="Portrait of Stevie Nicks"
                            />
                            <Carousel.Caption>
                                <h3>Stevie Nicks</h3>
                                <p>Procreate</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="art"
                                src={AmyWinehouse}
                                alt="Portrait of Amy Winehouse"
                            />
                            <Carousel.Caption>
                                <h3>Amy Winehouse</h3>
                                <p>Procreate</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="art"
                                src={CourtneyLove}
                                alt="Portrait of Courtney Love"
                            />
                            <Carousel.Caption>
                                <h3>Courtney Love</h3>
                                <p>Procreate</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="art"
                                src={GwenStefani}
                                alt="Portrait of Gwen Stefani"
                            />
                            <Carousel.Caption>
                                <h3>Gwen Stefani</h3>
                                <p>Chalk Pastel on Paper</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="art"
                                src={SelfPortrait}
                                alt="Self-portrait"
                            />
                            <Carousel.Caption>
                                <h3>Self-portrait</h3>
                                <p>Chalk Pastel on Paper</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="art"
                                src={Darwin}
                                alt="Portrait of a white dog"
                            />
                            <Carousel.Caption>
                                <h3>Darwin</h3>
                                <p>Oil Paint on Canvas</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="art"
                                src={Swiss}
                                alt="Portrait of a brown dog"
                            />
                            <Carousel.Caption>
                                <h3>Swiss</h3>
                                <p>Oil Paint on Canvas</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="art"
                                src={Callie}
                                alt="Portrait of golden retreiver"
                            />
                            <Carousel.Caption>
                                <h3>Calliope</h3>
                                <p>Pencil on Paper</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    
                </div>
            </div>
        )
    }
}