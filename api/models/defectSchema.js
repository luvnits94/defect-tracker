const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/DefectTrackerDB', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!'));

const defectSchema = new mongoose.Schema(
    {
      id: {
        // autogenerate
        type: Number,
        unique: true,
        required: true,
      },
      logger: {
        //todo -- take from user session
        default: "nitish",
        type: String,
        required: true,
      },
      category: {
        type: String,
        enum: ["UI","Functional","ChangeRequest"],
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      priority:{
        type: Number,
        required: true,
      },
      status:{
        default: "open",
        type: String,
        required: true,
      },
      changeStatus: {
        default: "Close Defect",
        type: String,
        required: true,
      }
    },
    {
      timestamps: {
        createdAt: true,
        updatedAt: true,
      },
    }
  );

  const repo = mongoose.model('defects',defectSchema);

  module.exports = repo;