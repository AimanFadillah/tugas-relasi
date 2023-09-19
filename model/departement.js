import Database from "../config/database.js";
import User from "./user.js";

const Departement = Database.db.define("departement",{
    head:Database.DataTypes.STRING,
    description : Database.DataTypes.TEXT,
},Database.freeze)

Departement.hasMany(User,{foreignKey:"departement_id"});
User.belongsTo(Departement,{foreignKey:"departement_id"});

export default Departement;
