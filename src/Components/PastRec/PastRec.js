import React from 'react'
import { Link } from 'react-router-dom'
import SubMenu from '../SubMenu'
import placeholder from './Images/placeholder.png'
import './CSS/PastRec.css'

export default function PastRec() {
    return (
        <div>
            <SubMenu />
            <div className="prec-cont">
                <div className="prec-head">
                    <p>Past Recommendation</p>
                </div>
                <div className="prec-cards">
                    <div className="row">
                        <div className="prec-cont col l4 m6 s6">
                            <div className="prec-card-cont">
                                <div className='date'>
                                    <p>10<sup>th</sup> March</p>
                                </div>
                                <div className="prec-card-img">
                                    <img src={placeholder}></img>
                                </div>
                                <ul className='row'>
                                    <li className='col s6 blueli left-align' style={{ 'paddingLeft': '6vmin' }}>Dark spots</li>
                                    <li className='col s6 purpleli left-align' style={{ 'paddingLeft': '-6vmin' }}>Pigmented Scar</li>
                                    <li className='col s6 redli left-align' style={{ 'paddingLeft': '6vmin' }}>Scar</li>
                                    <li className='col s6 greenli left-align' style={{ 'paddingLeft': '-6vmin' }}>Acne</li>
                                </ul>
                                <div className="prec-card-btn">
                                    <Link to="/ImageDiag"><span>View Report</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="prec-cont col l4 m6 s6">
                            <div className="prec-card-cont">
                                <div className='date'>
                                    <p>10<sup>th</sup> March</p>
                                </div>
                                <div className="prec-card-img">
                                    <img src={placeholder}></img>
                                </div>
                                <ul className='row'>
                                    <li className='col s6 blueli left-align' style={{ 'paddingLeft': '6vmin' }}>Dark spots</li>
                                    <li className='col s6 purpleli left-align' style={{ 'paddingLeft': '-6vmin' }}>Pigmented Scar</li>
                                    <li className='col s6 redli left-align' style={{ 'paddingLeft': '6vmin' }}>Scar</li>
                                    <li className='col s6 greenli left-align' style={{ 'paddingLeft': '-6vmin' }}>Acne</li>
                                </ul>
                                <div className="prec-card-btn">
                                    <Link to="/ImageDiag"><span>View Report</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="prec-cont col l4 m6 s6">
                            <div className="prec-card-cont">
                                <div className='date'>
                                    <p>10<sup>th</sup> March</p>
                                </div>
                                <div className="prec-card-img">
                                    <img src={placeholder}></img>
                                </div>
                                <ul className='row'>
                                    <li className='col s6 blueli left-align' style={{ 'paddingLeft': '6vmin' }}>Dark spots</li>
                                    <li className='col s6 purpleli left-align' style={{ 'paddingLeft': '-6vmin' }}>Pigmented Scar</li>
                                    <li className='col s6 redli left-align' style={{ 'paddingLeft': '6vmin' }}>Scar</li>
                                    <li className='col s6 greenli left-align' style={{ 'paddingLeft': '-6vmin' }}>Acne</li>
                                </ul>
                                <div className="prec-card-btn">
                                    <Link to="/ImageDiag"><span>View Report</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul class="pagination">
                    <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                    <li class="active"><a href="#!">1</a></li>
                    <li class="waves-effect"><a href="#!">2</a></li>
                    <li class="waves-effect"><a href="#!">3</a></li>
                    <li class="waves-effect"><a href="#!">4</a></li>
                    <li class="waves-effect"><a href="#!">5</a></li>
                    <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
                </ul>
            </div>
        </div>
    )
}
