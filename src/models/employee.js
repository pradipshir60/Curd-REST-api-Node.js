const mongoose = require("mongoose");

const schemaObject = mongoose.Schema({

    firstname: String,

    lastname: String,

    email: String,

    salary: Number

});

const Employee = mongoose.model("Employee", schemaObject);



module.exports = Employee;