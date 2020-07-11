import React from 'react'
import {BrowserRouter as Router,Route,Link,NavLink} from 'react-router-dom'
import DefectListComponent from './Components/DefectListComponents'
import TBD from './Components/TBD'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Logout from './Components/Logout'
import About from './Components/About'
import AddDefect from './Components/AddDefect'
import axios from 'axios'


export default class DefectTrackerRouter extends React.Component{
    state={defects:[],nextDefectId:null}
    componentDidMount(){
        axios.get('http://localhost:9000/getalldefects').then(response=>{
            this.setState({defects:response.data})
            // console.log(response.data);
            // console.log(response.status);
            // console.log(response.statusText);
            // console.log(response.headers);
            // console.log(response.config);
        },(error)=>{
            console.log('Some Error' + error);
        })
    }

    // todo -- pass form data to ui instead of static data
    addDefectHandler=(defect)=>{
        this.setState({nextDefectId:this.state.defects[this.state.defects.length-1].id})
        this.setState({defects:[...this.state.defects,{ "id":this.state.nextDefectId,"category": defect.category, "description": defect.description, "priority":defect.priority, "status":"open", "changeStatus":"CloseDefect"}]});
    }
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
                            <Route path="/viewdefects" component={()=><DefectListComponent defects={this.state.defects} />}></Route>
                            <Route path="/adddefect" component={()=><AddDefect addDefectHandler={this.addDefectHandler} />}></Route>
                            <Route path="/logout" component={Logout}></Route>
                            <Route path="/contact" component={Contact}></Route>
                            <Route path="/about" component={About}></Route>
                    </Router>
                </>
        )
    }
}