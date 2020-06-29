import React from 'react'
import { withRouter } from "react-router";

class AddDefect extends React.Component{
    addDefectHandler=(e)=>{
        this.props.addDefectHandler();
        this.props.history.push('/viewdefects');
    }
    render(){
        return(
            <>
                <form>
                    <label htmlFor="priority-dropdown">Select Priority</label>
                    <select className="btn" name="priority-dropdown" id="priority-dropdown" >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>

                    <label htmlFor="category-dropdown">Select Category:</label>
                    <select className="btn" name="category-dropdown" id="category-dropdown" >
                        <option>UI</option>
                        <option>Functional</option>
                        <option>ChangeRequest</option>
                    </select>
                    <div>
                        <label htmlFor="description">Enter the defect description</label>
                        <textarea name="description" style={{display:"block"}}></textarea>
                    </div>

                    {/* Todo -- push form data in UI instead of hardcoded data */}
                    <button onClick={this.addDefectHandler}>Add Defect</button>
                </form>
            </>
        )
    }
}

export default withRouter(AddDefect)