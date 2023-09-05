const express = require("express");
bodyParser = require("body-parser"),
swaggerJsdoc = require("swagger-jsdoc"),
swaggerUi = require("swagger-ui-express");
const app = express();
const userRouter = require("./routers/user.router")
const authRouter = require("./routers/auth.router")
const vacationRouter = require("./routers/vacation.router")
const options = require("./utils/swagger/swagger.config")
const port = 3000

app.use("/user",userRouter)
app.use("/auth",authRouter)
app.use("/vacation",vacationRouter)

const specs = swaggerJsdoc(options);
app.use(
  "/api",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

app.listen(port, () => {
    console.log(`the server is running on http://localhost:${port}`);
})

