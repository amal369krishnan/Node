const express = require("express")
const routers = require("./routers/routers")
const sequelize = require("./database/dbConnection")

let app = express()
app.use(express.json())
app.use(routers);
let port = process.env.PORT || 8000;

app.listen(port,()=>{
    sequelize.sync()
    console.log(`server running on ${port}`);
});