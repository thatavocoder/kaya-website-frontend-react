import React from 'react'
import { Link } from 'react-router-dom'
import logo from './Images/Kaya_Clinic_logo2.png'
import dropdown from './Images/dropdown.png'
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
                        <li className="dropdown">
                            <a class='dropdown-trigger btn dropbtn' href='#' data-target='dropdown1'>
                                <i className="material-icons outlined">keyboard_arrow_down</i>
                            </a>
                        </li>
                        <li className="wish"><span>Good Morning!<br />Hello John Doe</span></li>
                    </ul>
                    <ul id='dropdown1' class='dropdown-content dropcontent'>
                        <li><a href="#!"><i><img src={dropdown}></img></i>Loremipsum</a></li>
                        <li class="divider" tabindex="-1"></li>
                        <li><a href="#!"><i><img src={dropdown}></img></i>Loremipsum</a></li>
                        <li class="divider" tabindex="-1"></li>
                        <li><a href="#!"><i><img src={dropdown}></img></i>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
