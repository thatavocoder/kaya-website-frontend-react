import React from 'react'
import { Link } from 'react-router-dom'
import logo from './Images/Kaya_Clinic_logo2.png'
import './CSS/Menu.css'

export default function Menu() {
    return (
        <div>
            <div className="header row">
                <div className="logo col s2">
                    <Link to="/"><img src={logo} alt="kaya"></img></Link>
                </div>
                <div className="login-info col s10">
                    <ul>
                        <li><i className="material-icons">person</i></li>
                        <li className="dropdown"><i className="material-icons outlined">keyboard_arrow_down</i></li>
                        <li className="wish">Good Morning!<br />Hello John Doe</li>
                    </ul>
                </div>
            </div>
            <div className="nav-options row">
                <ul>
                    <li className="opt-box col l3 m0 s0"><div></div></li>
                    <li className="opt-box col l2 m4 s4"><div>Know your skin</div></li>
                    <li className="opt-box col l2 m4 s4"><div>Measure Improvement</div></li>
                    <li className="opt-box col l2 m4 s4"><div>Past Recommendation</div></li>
                    <li className="opt-box col l3 m0 s0"><div></div></li>
                </ul>
            </div>
        </div>
    )
}
