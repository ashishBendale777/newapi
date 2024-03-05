//imoort packages
const express = require("express")
const bodyparser = require("body-parser")
const bodyParser = require("body-parser")


//create SERVER
const Server = express()

//set bodyparser
Server.use(bodyParser.json())


Server.get("/", (req, res) => {
    res.send("Hi...")
})

Server.get("/users", (req, res) => {
    const studs = ["Ashish", "Sam", "Satish"]
    res.send(studs)
})

Server.get("/employees", (req, res) => {
    const emps = [{
        empId: 1,
        empName: "Ashish",
        empSalary: 345435
    }, {
        empId: 2,
        empName: "Dhiraj",
        empSalary: 34543
    }, {
        empId: 3,
        empName: "Pawan",
        empSalary: 3435
    }]
    res.json(emps)
})


//Sample JSON
// {
//     "userName":"AShish",
//     "userMob":4343342,
//     "userEmail":"asjhdhajd#gmasd"
// }

Server.post("/adduser", (req, res) => {
    const reqData = req.body
    console.log(reqData)
    res.send("data posted")
})


//start the server
Server.listen(5000, () => {
    console.log("server Started")
})