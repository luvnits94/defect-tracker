const defectModel = require('../models/defectSchema');

exports.getAllDefects = async (req,res)=>{
    try {
      const defectArray = await defectModel.find({});
      res.status(200).json(defectArray)
      
    } catch (error) {
      console.log(error)
    }
    
};

exports.newDefect = async (req, res) => {
    try {
      const defectObj = {
        id: Math.round(Math.random()*100000,5),
        priority: req.body.priority,
        category: req.body.category,
        description: req.body.description,
      };
      const newDefect = await defectModel.create(defectObj);
      console.log(newDefect);
      res.status(200).json(
        newDefect
      );
    } catch (err) {
      console.log(err);
      const errorObj = {
        status:"fail",
        message:err
      }
      res.status(404).json(
        errorObj
      );
    }
  };

