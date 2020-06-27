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
            { id:103,category: "ChangeRequest", description: 'Add remove user functionality',priority:3, status:"closed", changeStatus:"No Action Pending"}
          ]
        return(
            <>
                <table style={{tableLayout:'auto'}}>
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
                                       return(  <tr key={defect.id}>
                                                <td>{defect.category}</td>
                                                <td>{defect.description}</td>
                                                <td>{defect.priority}</td>
                                                <td>{defect.status}</td>
                                                <td><a href="#">{defect.changeStatus}</a></td>
                                        </tr>) 
                                }) 
                                }
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
    // filterTableHandler=(filterType)=>{
        // Declare variables
    // var input, filter, table, tr, td, i, txtValue;


    // if(filterType === 'priorty'){
    //     input = document.getElementById("priority-dropdown");
    //     filter = input.value;
    //     console.log(filter);
    // }
    // else if(filterType=='category'){

    // }
    // else{

    // }
    
    // 
    // 
    // table = document.getElementById("myTable");
    // tr = table.getElementsByTagName("tr");
  
    // // Loop through all table rows, and hide those who don't match the search query
    // for (i = 0; i < tr.length; i++) {
    //   td = tr[i].getElementsByTagName("td")[0];
    //   if (td) {
    //     txtValue = td.textContent || td.innerText;
    //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //       tr[i].style.display = "";
    //     } else {
    //       tr[i].style.display = "none";
    //     }
    //   }
    // }
    // alert(filterType);
    // }
    render(){
        return(
            <>
                <div id="defectFilterContainer" style={{textAlign:'center'}}>
                    <h2>Filter Details</h2>
                    <button className="btn active" > Show all</button>

                    <label htmlFor="priority-dropdown">Filter By Priority:</label>

                    <select className="btn" name="priority-dropdown" id="priority-dropdown" >
                        <option>All</option>
                        <option>1</option>
                        <option>2</option>
                    </select>

                    <label htmlFor="category-dropdown">Filter By Category:</label>
                    <select className="btn" name="category-dropdown" id="category-dropdown" >
                        <option>All</option>
                        <option>UI</option>
                        <option>Functional</option>
                        <option>Change Request</option>
                    </select>
                </div>
            </>
        )
    }
}


export default DefectListComponent;