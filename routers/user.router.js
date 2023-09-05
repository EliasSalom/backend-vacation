const express = require("express")
const userRouter = express.Router()

userRouter.post("/", (req, res) => {
    res.send("create") 
});

userRouter.get("/", (req, res) => {
    res.send("read") 
});

userRouter.patch("/", (req, res) => {
    res.send("update") 
});

userRouter.put("/", (req, res) => {
    res.send("delete") 
});

module.exports = userRouter;