import React, { Component } from 'react';

import { BsPower } from "react-icons/bs";

import background3 from '../Assets/background3.png';
import Zachbot2 from '../Assets/Zachbot2.png';

export default class Home extends Component {
    render() {
        return(
            <div className="homepage">
                <img className="background" src={Zachbot2} alt="desk background"></img>
                <div className="screenOff">
                    
                </div>
                <a className="powerOn" href="/monitor">
                    <BsPower/>
                </a>
                <a className="bootstrapLink" href="https://getbootstrap.com/docs/5.2/getting-started/introduction/">
                    <div className="bootstrap"></div>
                </a>
                <a className="javaLink" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                    <div className="javascript"></div>
                </a>
                <a className="sqlLink" href="https://dev.mysql.com/doc/">
                    <div className="sql"></div>
                </a>
                <a className="reactLink" href="https://reactjs.org/docs/getting-started.html">
                    <div className="react"></div> 
                </a>
                <a className="cssLink" href="https://www.w3schools.com/w3css/defaulT.asp">
                    <div className="css"></div>
                </a>
                <a className="pythonLink" href="https://docs.python.org/3/">
                    <div className="python"></div>
                </a>
                
            </div>
        )
    }

}