import React from 'react'
import './CSS/Menu.css'

export default function SubMenu() {
    return (
        <div className="nav-options row">
            <ul>
                <li className="opt-box col l3 m0 s0"><div></div></li>
                <li className="opt-box col l2 m4 s4"><div>Know your skin</div></li>
                <li className="opt-box col l2 m4 s4"><div>Measure Improvement</div></li>
                <li className="opt-box col l2 m4 s4"><div>Past Recommendation</div></li>
                <li className="opt-box col l3 m0 s0"><div></div></li>
            </ul>
        </div>
    )
}
