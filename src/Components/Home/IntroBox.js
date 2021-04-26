import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/IntroBox.css'
import placeholder from './Images/placeholder.png'
import beforeplastic from './Images/face-skin-check-before-plastic.png'

export default function IntroBox() {
    return (
        <div>
            <div className="intro-grid">
                <div className="intro-box">
                    <div className="ques">Loremipsum Loremipsum Loremipsum Loremipsumipsum ?</div>
                    <div className="intro-text">Loremipsum Loremipsum Loremipsum Loremipsum LoremipsumLoremipsum Loremipsum Loremipsum</div>
                    <Link to='/GeneralDetails' className='intro-btn'>
                        <div className="intro-btn">
                            <span>Start Diagnosis &nbsp; &nbsp; &gt;</span>
                        </div>
                    </Link>
                    <img src={beforeplastic} className="intro-img"></img>
                </div>
                <div className="last-vis">
                    <div className="vis-header">
                        <p>Last Visited</p>
                    </div>
                    <div className="calendar">
                        <p>March 2021</p>
                        <div className="cal-row">
                            <div className="cal-item mon">M</div>
                            <div className="cal-item tues">T</div>
                            <div className="cal-item wed">W</div>
                            <div className="cal-item thur">T</div>
                            <div className="cal-item fri">F</div>
                            <div className="cal-item sat">S</div>
                            <div className="cal-item sun">S</div>
                            <div className="cal-item twentynine">29</div>
                            <div className="cal-item thirty">30</div>
                            <div className="cal-item one">1</div>
                            <div className="cal-item two">2</div>
                            <div className="cal-item three">3</div>
                            <div className="cal-item four">4</div>
                            <div className="cal-item five">5</div>
                        </div>
                    </div>
                </div>
                <div className="last-diag">
                    <div className="diag-header">
                        <p>Last Diagnosed Report</p>
                    </div>
                    <div className="diag-cards">
                        <div className="row">
                            <div className="diag-cont col s4">
                                <div className="diag-card-cont">
                                    <div className="diag-card-img">
                                        <img src={placeholder}></img>
                                    </div>
                                    <div className="diag-card-btn">
                                        <Link to="#"><span>View Report</span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="diag-cont col s4">
                                <div className="diag-card-cont">
                                    <div className="diag-card-img">
                                        <img src={placeholder}></img>
                                    </div>
                                    <div className="diag-card-btn">
                                        <Link to="#"><span>View Report</span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="diag-cont col s4">
                                <div className="diag-card-cont">
                                    <div className="diag-card-img">
                                        <img src={placeholder}></img>
                                    </div>
                                    <div className="diag-card-btn">
                                        <Link to="#"><span>View Report</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
