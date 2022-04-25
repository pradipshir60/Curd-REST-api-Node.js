require("./config/dbConnect");
const express = require("express");
const app = express();
app.use(express.json())
const employeeRouter = require("./routes/employee");
app.use(employeeRouter);

app.get("/", function(req, res) {

    res.send("Hello world!");

});

app.listen(8000, () => {

    console.log(`Server is up on port 8000`);



}); // starting server at port 8000
module.exports = app;