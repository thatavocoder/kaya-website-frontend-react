import React from 'react'
import {NavLink} from 'react-router-dom'
import './CSS/Menu.css'

export default function SubMenu() {
    return (
        <div className="nav-options row">
            <ul>
                <li className="opt-box col l4 m2 s2"><div></div></li>
                <NavLink to='/KnowSkin' exact={true} style={{'color':'black'}} activeClassName = 'isactive' className='opt-box'><li className="col l2 m4 s4"><div>Know your skin</div></li></NavLink>
                {/*<li className="opt-box col l2 m4 s4"><div>Measure Improvement</div></li>*/}
                <NavLink to='PastRec' exact={true} style={{'color':'black'}} activeClassName = 'isactive' className='opt-box'><li className="col l2 m4 s4"><div>Past Recommendation</div></li></NavLink>
                <li className="opt-box col l4 m2 s2"><div></div></li>
            </ul>
        </div>
    )
}
