import React from 'react'
import { Link } from 'react-router-dom'
import placeholder from './Images/placeholder.png'
import './CSS/Recommend.css'

export default function Recommend() {
    return (
        <div>
            <div className="rec-cont">
                <div className="rec-head">
                    <p>Recommended Products for your Oily Skin</p>
                </div>
                <div className="rec-cards">
                    <div className="row">
                        <div className="rec-cont col s3">
                            <div className="rec-card-cont">
                                <div className="rec-card-img">
                                    <img src={placeholder}></img>
                                </div>
                                <p>Product Name</p>
                                <div className="rec-card-btn">
                                    <Link to="#"><span>View Product</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="rec-cont col s3">
                            <div className="rec-card-cont">
                                <div className="rec-card-img">
                                    <img src={placeholder}></img>
                                </div>
                                <p>Product Name</p>
                                <div className="rec-card-btn">
                                    <Link to="#"><span>View Product</span></Link>
                                </div>
                            </div>
                        </div><div className="rec-cont col s3">
                            <div className="rec-card-cont">
                                <div className="rec-card-img">
                                    <img src={placeholder}></img>
                                </div>
                                <p>Product Name</p>
                                <div className="rec-card-btn">
                                    <Link to="#"><span>View Product</span></Link>
                                </div>
                            </div>
                        </div><div className="rec-cont col s3">
                            <div className="rec-card-cont">
                                <div className="rec-card-img">
                                    <img src={placeholder}></img>
                                </div>
                                <p>Product Name</p>
                                <div className="rec-card-btn">
                                    <Link to="#"><span>View Product</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
