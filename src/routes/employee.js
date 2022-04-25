const express = require("express");
const router = express.Router();
//const auth = require("../middleware/auth");
// Importing methods from controller 
const { getEmployee, addEmployee, updateEmployee, deleteEmployee, getEmployeeInfo } = require("../controllers/employee");
router.get("/api/getEmployee", getEmployee);
router.post("/api/addEmployee", addEmployee);
router.put("/api/updateEmployee", updateEmployee);
router.delete("/api/deleteEmployee", deleteEmployee);
router.get("/api/getEmployeeInfo", getEmployeeInfo);
module.exports = router;