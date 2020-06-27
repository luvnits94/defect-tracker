import React from 'react'
import './DefectListComponent.css'

class DefectListComponent extends React.Component{
    render(){
        return(
            <>
                <DefectTrackerNavBarComponent />
                <DefectFilterComponent />
                <DefectDetailsComponent />
            </>
        )
    }
}

function DefectDetailsComponent(){ 
        var defects = [
            { id:101,category: "UI", description: 'Submit Button coming to the extreme left.Refer the screenshots ', priority: 2, status:"open", changeStatus:"CloseDefect"},
            { id:102,category: "Functional", description: 'While submitting the form data. a confirmation popup should appear. Refer the SRS document.', priority:1, status:"open", changeStatus:"CloseDefect"},
            { id:103,category: "ChangeRequest", description: 'Add remove user functionality',priority:3, status:"closed", changeStatus:"No Action Pending"},
            { id:104,category: "ChangeRequest", description: 'Add remove user functionality',priority:3, status:"closed", changeStatus:"No Action Pending"},
            { id:105,category: "ChangeRequest", description: 'Add remove user functionality',priority:3, status:"closed", changeStatus:"No Action Pending"}
          ]
        return(
            <>
                <h1 style={{textAlign:'center'}}>Defect Details</h1>
                <h3 style={{textAlign:'center'}}>Search Results: {defects.length}</h3>
                <table style={{tableLayout:'auto'}} id="defect-details-table">
                    <thead>
                        <tr>
                            <th>Defect Category</th>
                            <th>Description</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>ChangeStatus</th>
                        </tr>
                    </thead>
                    <tbody>
                    {defects.map(defect => {
                        return(  
                            <Defect id={defect.id} description={defect.description} category={defect.category} priority={defect.priority} status={defect.status} changeStatus={defect.changeStatus}/>
                        )
                    })}
                        
                    </tbody>
                </table>
            </>
        )
}

function DefectTrackerNavBarComponent (){
    return(
            <>
                <div className="topnav">

                    {/* Centered link */}
                    <div className="topnav-centered">
                        <span id="topnav-text">Defect Tracker</span>
                    </div>


                    {/* Right Aligned links */}
                    <div className="topnav-right">
                        <a href="#">Contact</a>
                        <a href="#">About Us</a>
                        <a href="#">Logout</a>
                    </div>

                    <a href="#" className="active">Home</a>
                    <a href="#">Add Defects</a>
                    <a href="#">View Defects</a>
                    
                    
                    
                </div>
            </>
    )
}

class DefectFilterComponent extends React.Component{
    state={category:"All", priorty:"All"}
    // To Do -- implement filter functionality
    filterTableHandler=(filterType)=>{

        // Declare variables
        var filter, table, tr, td, i;
        if(filterType.target.name== 'filter-reset-button'){
            table = document.getElementById("defect-details-table");
            tr = table.getElementsByTagName("tr");
            
            // Loop through all table rows, and hide those who don't match the search query
            for (i = 1; i < tr.length; i++) {
                tr[i].style.display = "";
            }
            document.getElementById("priority-dropdown").setAttribute('class','btn');
            document.getElementById("category-dropdown").setAttribute('class','btn');
            document.getElementById("filter-reset-button").setAttribute('class','btn active');

        }
        else if(filterType.target.name == 'priority-dropdown'){
            filter = filterType.target.value;

            table = document.getElementById("defect-details-table");
            tr = table.getElementsByTagName("tr");
            
            // Loop through all table rows, and hide those who don't match the search query
            for (i = 1; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td");
                if(filter == "All" || td[2].innerHTML == filter){
                    tr[i].style.display = "";
                }
                else{
                    tr[i].style.display = "none";
                } 
            }
            document.getElementById("priority-dropdown").setAttribute('class','btn active');
            document.getElementById("category-dropdown").setAttribute('class','btn');
            document.getElementById("filter-reset-button").setAttribute('class','btn');
        }
        else if(filterType.target.name == 'category-dropdown'){
            filter = filterType.target.value;

            table = document.getElementById("defect-details-table");
            tr = table.getElementsByTagName("tr");
            
            // Loop through all table rows, and hide those who don't match the search query
            for (i = 1; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td");
                if(filter == "All" || td[0].innerHTML == filter){
                    tr[i].style.display = "";
                }
                else{
                    tr[i].style.display = "none";
                } 
            }
            document.getElementById("priority-dropdown").setAttribute('class','btn');
            document.getElementById("category-dropdown").setAttribute('class','btn  active');
            document.getElementById("filter-reset-button").setAttribute('class','btn');
        }

    }
    
    render(){
        return(
            <>
                <div id="defectFilterContainer" style={{textAlign:'center'}}>
                    <h2>Filter Details</h2>
                    <button className="btn active" name="filter-reset-button" id="filter-reset-button" onClick={this.filterTableHandler}> Show all</button>

                    <label htmlFor="priority-dropdown">Filter By Priority:</label>

                    <select className="btn" name="priority-dropdown" id="priority-dropdown" onChange={this.filterTableHandler}>
                        <option>All</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>

                    <label htmlFor="category-dropdown">Filter By Category:</label>
                    <select className="btn" name="category-dropdown" id="category-dropdown" onChange={this.filterTableHandler}>
                        <option>All</option>
                        <option>UI</option>
                        <option>Functional</option>
                        <option>ChangeRequest</option>
                    </select>
                </div>
            </>
        )
    }
}

class Defect extends React.Component{
    render(){
        return(
            <>
                <tr key={this.props.id}>
                    <td>{this.props.category}</td>
                    <td>{this.props.description}</td>
                    <td>{this.props.priority}</td>
                    <td>{this.props.status}</td>
                    <td><a href="#">{this.props.changeStatus}</a></td>
                </tr>
            </>
        )
    }
}



export default DefectListComponent;