import Database from "../config/database.js";
import Departement from "./departement.js";
import Project from "./project.js";

const DeptProj = Database.db.define("deptproj",{

},Database.freeze,Database.offTimes)

Departement.belongsToMany(Project,{through:DeptProj});
Project.belongsToMany(Departement,{through:DeptProj});

export default DeptProj;

