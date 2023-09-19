import express from "express"
import fileUpload from "express-fileupload";
import Computer from "./model/computer.js";
import Departement from "./model/departement.js"
import DeptProj from "./model/deptproj.js"
import Project from "./model/project.js";
import User from "./model/user.js";

const app = express();
const port = 5000;

Computer.sync();
Departement.sync();
DeptProj.sync();
Project.sync();
User.sync();

app.use(fileUpload());

app.get("/",(req,res) => res.send("Hello World"));

app.listen(port,() => console.log("Serve nyala pada http://localhost:5000/"))
