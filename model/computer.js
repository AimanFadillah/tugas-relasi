import Database from "../config/database.js";

const Computer = Database.db.define("computer",{
    name:Database.DataTypes.STRING,
},Database.freeze);

export default Computer;