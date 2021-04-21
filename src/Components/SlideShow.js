import React from 'react'
import { Link } from 'react-router-dom'
import Rectangle from './Images/Rectangle.png'
import main from './Images/main.png'
import './CSS/SlideShow.css'

export default function SlideShow() {
    return (
        <div>
            <div class="carousel carousel-slider center ss-cont">
                <div class="carousel-fixed-item car-btn-cont">
                    <div className="circle"></div>
                    <div className="car-btn">
                        <Link to="#"><span>Start Diagnosis</span></Link>
                    </div>
                </div>
                <div class="carousel-item row" href="#one!">
                    <div className="sec1 col s5">
                         <img className="rect" src={Rectangle}></img>
                    </div>
                    <div className="col s1"></div>
                    <div className="sec2 col s6">
                        <img src={main}></img>
                    </div>
                </div>
                <div class="carousel-item amber" href="#two!">
                    <h2>Second Panel</h2>
                    <p class="black-text">This is your second panel</p>
                </div>
                <div class="carousel-item green" href="#three!">
                    <h2>Third Panel</h2>
                    <p class="black-text">This is your third panel</p>
                </div>
            </div>
        </div>
    )
}

