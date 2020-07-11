import React from 'react'
import { withRouter } from "react-router";
import axios from 'axios'

class AddDefect extends React.Component{
    state={category: "", description: "", priority: ""}
    setDefectState=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    // Todo -- Try Catch Block -- HandleErrors
    addDefectHandler=(e)=>{
        axios.post('http://localhost:9000/newDefect',this.state).then(response=>{
                this.props.addDefectHandler(response.data);
            });
        this.props.history.push('/viewdefects');
    }
    render(){
        return(
            <>
                <form>
                    <label htmlFor="priority">Select Priority</label>
                    <select className="btn" name="priority" id="priority" onChange={this.setDefectState}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>

                    <label htmlFor="category">Select Category:</label>
                    <select className="btn" name="category" id="category" onChange={this.setDefectState} >
                        <option>UI</option>
                        <option>Functional</option>
                        <option>ChangeRequest</option>
                    </select>
                    <div>
                        <label htmlFor="description">Enter the defect description</label>
                        <textarea name="description" style={{display:"block"}} onChange={this.setDefectState}></textarea>
                    </div>

                    <button onClick={this.addDefectHandler}>Add Defect</button>
                </form>
            </>
        )
    }
}

export default withRouter(AddDefect)