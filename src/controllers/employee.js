const Employee = require("../models/employee");
require("dotenv").config();
/*const getEmployeeInfo = async(request, response) => {
    return response.send({
        name: "Raj",

        email: "test@gmail.com",
    });
};*/
/*const getEmployeeInfo = async(request, response) => {
const firstName = request.query.firstname;
const employee = await Employee.findOne( /*{ firstname: `${firstName}` }*/
/*);
 console.log(employee);
    console.log("Company name", process.env.COMPANY_NAME);
    return response.send({
        firstname: employee.firstname,
        lastname: employee.lastname,
        email: employee.email,
        salary: employee.salary
    });
};*/
const getEmployee = async(req, res) => {
    try {
        const data = await Employee.find();
        const employeeData = data.map((emp) => {
            return {
                firstname: emp.firstname,
                lastname: emp.lastname,
                salary: emp.salary,
            };
        });
        console.log(employeeData);
        res.status(200).json({
            status: "success",
            data: {
                data: employeeData,
            },
        });
    } catch (err) {
        console.log(err);
        res.status(404).json({
            status: "fail",
            error: {
                err,
            },
        });
    }
};
const getEmployeeInfo = async(req, res) => {
    try {
        const data = await Employee.findOne({
            firstname: req.query.firstname,
        });
        res.status(200).json({
            status: "success",
            data: {
                data,
            },
        });
    } catch (err) {
        console.log(err);
        res.status(404).json({
            status: "fail",
            error: {
                err,
            },
        });
    }
};
const addEmployee = async(req, res) => {
    try {
        const data = await Employee.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            salary: req.body.salary,
        });
        res.status(201).json({
            status: "success",
            data: {
                data,
            },
        });
    } catch (err) {
        console.log(err);
        res.status(404).json({
            status: "fail",
            error: {
                err,
            },
        });
    }
};

/*const saveEmployee = async(request, response) => {
    const employeeData = {
        firstname: "Smith",

        lastname: "dven",

        email: "smith@gmail.com",
    };*/

/* const employee = new Employee(employeeData);
    try {
        await employee.save();
        return response.send({
            status: "200",

            message: "Data is saved Succesfully",
        });
    } catch (error) {
        console.log("error")
        return response.send({
            status: "500",

            message: "Failed to save !",
        });
    }
};
*/
/*  const updateEmployee = async(request, response) => {
      const firstName = request.body.firstname;
      const lastName = request.body.lastname;
      const email = request.body.email;
      const salary = request.body.slary;
      const employeeData = {
          firstname: firstName,
          lastname: lastName,
          email: email,
          salary: salary,
      };

      try {
          const result = await Employee.updateOne({ firstname: firstName }, employeeData);
          console.log("result", result);
          return response.send({
              status: "200",
              message: "Data is saved Succesfully",
          });
      } catch (error) {
          return response.send({
              status: "500",
              message: "Failed to save !",
          });
      }
  };*/
const updateEmployee = async(req, res) => {
    try {
        const data = await Employee.findOneAndUpdate({ firstname: req.body.firstname }, {
            lastname: req.body.lastname,
            email: req.body.email,
        }, { new: true });
        res.status(201).json({
            status: "success",
            data: {
                data,
            },
        });
    } catch (err) {
        console.log(err);
        res.status(404).json({
            status: "fail",
            error: {
                err,
            },
        });
    }
};
const deleteEmployee = async(req, res) => {
    try {
        await Employee.deleteOne({ firstname: req.body.firstname });
        res.status(204).json({
            status: "success",
        });
    } catch (err) {
        console.log(err);
        res.status(404).json({
            status: "fail",
            error: {
                err,
            },
        });
    }
};

module.exports = { getEmployee, getEmployeeInfo, addEmployee, updateEmployee, deleteEmployee };