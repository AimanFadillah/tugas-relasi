import express from "express";
import DepartementCont from "./controller/departementCont.js";
import UserCont from "./controller/UserCont.js";
import ProjectCont from "./controller/ProjectCont.js";
import ComputerCont from "./controller/ComputerCont.js";

const Route = express.Router();

Route.get("/departement",DepartementCont.index);
Route.get("/departement/:id",DepartementCont.show);
Route.post("/departement",DepartementCont.store);
Route.put("/departement/:id",DepartementCont.update);
Route.delete("/departement/:id",DepartementCont.destroy);

Route.get("/user",UserCont.index);
Route.get("/user/:id",UserCont.show);
Route.post("/user",UserCont.store);
Route.put("/user/:id",UserCont.update);
Route.delete("/user/:id",UserCont.destroy);

Route.get("/project",ProjectCont.index);
Route.get("/project/:id",ProjectCont.show);
Route.post("/project",ProjectCont.store);
Route.put("/project/:id",ProjectCont.update);
Route.delete("/project/:id",ProjectCont.destroy);

Route.get("/computer",ComputerCont.index);
Route.get("/computer/:id",ComputerCont.show);
Route.post("/computer",ComputerCont.store);
Route.put("/computer/:id",ComputerCont.update);
Route.delete("/computer/:id",ComputerCont.destroy);

export default Route;