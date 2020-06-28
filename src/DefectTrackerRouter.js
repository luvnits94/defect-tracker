import React from 'react'
import {BrowserRouter as Router,Route,Link,NavLink} from 'react-router-dom'
import DefectListComponent from './DefectListComponents'
import TBD from './TBD'
import Contact from './Contact'
import Home from './Home'
import Logout from './Logout'
import About from './About'


export default class DefectTrackerRouter extends React.Component{
    render(){
        return(
                <>
                    <Router>
                        <div className="topnav">
                            {/* Centered link */}
                            <div className="topnav-centered">
                                <span id="topnav-text">Defect Tracker</span>
                            </div>

                            {/* Right Aligned links */}
                            <div className="topnav-right">
                                <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                                <NavLink to="/about" activeClassName="active">About</NavLink>
                                <NavLink to="/logout" activeClassName="active">Logout</NavLink>
                            </div>

                            <NavLink to="/home" activeClassName="active">Home</NavLink>
                            <NavLink to="/adddefect" activeClassName="active">Add Defects</NavLink>
                            <NavLink to="/viewdefects" activeClassName="active">View Defects</NavLink>

                        </div>
                            <Route path="/home" component={Home}></Route>
                            <Route path="/viewdefects" component={DefectListComponent}></Route>
                            <Route path="/adddefect" component={TBD}></Route>
                            <Route path="/logout" component={Logout}></Route>
                            <Route path="/contact" component={Contact}></Route>
                            <Route path="/about" component={About}></Route>
                    </Router>
                </>
        )
    }
}