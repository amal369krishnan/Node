import express from "express";
import cors from "cors";
import http from "http";
import mongodbconnector from "./src/db/index.js";
import defaultRouters from "./src/controller/index.js";

const app = express();
app.use(express.json());
app.use("/api/v1", defaultRouters());
const Port = process.env.PORT || 8080;
const server = http.createServer(app);
mongodbconnector();

server.listen(Port, () => {
	console.log(`server running on port :${Port}`);
});
