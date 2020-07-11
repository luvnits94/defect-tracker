exports.getAllDefects = async (req,res)=>{
    //To do connect to db and fetch all defects
    //Currently using static data
    res.status(200).json(
        [
            { id:101,category: "UI", description: "Submit Button coming to the extreme left.Refer the screenshots ", "priority": 2, status:"open", changeStatus:"CloseDefect"},
            { id:102,category: "Functional", description: "While submitting the form data. a confirmation popup should appear. Refer the SRS document.", priority:1, status:"open", changeStatus:"CloseDefect"},
            { id:103,category: "ChangeRequest", description: "Add remove user functionality",priority:3, status:"closed", changeStatus:"No Action Pending"},
            { id:104,category: "ChangeRequest", description: "Add remove user functionality",priority:3, status:"closed", changeStatus:"No Action Pending"},
            { id:105,category: "ChangeRequest", description: "Add remove user functionality",priority:3, status:"closed", changeStatus:"No Action Pending"}
        ]
    )
};