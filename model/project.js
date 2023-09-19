import Database from "../config/database.js";

const Project = Database.db.define("project",{
    head:Database.DataTypes.STRING,
    name:Database.DataTypes.STRING,
    description:Database.DataTypes.TEXT,
},Database.freeze)

export default Project;