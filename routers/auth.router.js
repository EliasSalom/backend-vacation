const express = require("express")
const authRouter = express.Router()

authRouter.post("/login", (req, res) => {
    res.send("login") 
});

authRouter.post("/signup", (req, res) => {
    res.send("signup") 
});



module.exports = authRouter;