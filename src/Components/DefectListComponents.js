import React from 'react'
import axios from 'axios'


import '../DefectListComponent.css'

class DefectListComponent extends React.Component{
    state={defects:[]}
    componentDidMount(){
        axios.get('defectsData.json').then(response=>{
            this.setState({defects:response.data})
        })
    }
    render(){
        return(
            <>
                <DefectFilterComponent />
                <DefectDetailsComponent defects={this.state.defects}/>
            </>
        )
    }
}

class DefectDetailsComponent extends React.Component{ 
        render(){
            if(this.props.defects.length == "0"){
                return(<h3 style={{textAlign:'center'}}>No Results to be displayed </h3>)
            }
            else{
                return(
                    <>
                        <h1 style={{textAlign:'center'}}>Defect Details</h1>
                        <h3 style={{textAlign:'center'}}>Search Results: {this.props.defects.length}</h3>
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
                            {this.props.defects.map(defect => {
                                return(  
                                    <Defect id={defect.id} description={defect.description} category={defect.category} priority={defect.priority} status={defect.status} changeStatus={defect.changeStatus}/>
                                )
                            })}
                                
                            </tbody>
                        </table>
                    </>
                )
            }
        }
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