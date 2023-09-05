const express = require("express")
const getVacation = require("../handlers/vacations/getVacation")
const vacationRouter = express.Router()

vacationRouter.post("/", (req, res) => {
    res.send("create") 
});

vacationRouter.get("/", (req, res) => {
    const id = getVacation(req, res);
    console.log(id);
    res.send(id) 
});

vacationRouter.patch("/", (req, res) => {
    res.send("update") 
});

vacationRouter.put("/", (req, res) => {
    res.send("delete") 
});

module.exports = vacationRouter;