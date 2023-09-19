import express from "express"
import fileUpload from "express-fileupload";
import Route from "./route.js";
import Computer from "./model/computer.js";
import Departement from "./model/departement.js";
import DeptProj from "./model/deptproj.js";
import Project from "./model/project.js";
import User from "./model/user.js";

const app = express();
const port = 5000;

Computer.sync();
User.sync();
Departement.sync();
Project.sync();
DeptProj.sync();

app.use(fileUpload());
app.use(Route);

app.listen(port,() => console.log("Serve nyala pada http://localhost:5000/"))
