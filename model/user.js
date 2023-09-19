import Database from "../config/database.js";
import Computer from "./computer.js";

const User = Database.db.define("user",{
    name:Database.DataTypes.STRING,
    nik:Database.DataTypes.STRING,
},Database.freeze)

User.hasOne(Computer,{
    foreignKey:"user_id",
    onDelete:"CASCADE",
    onUpdate:"CASCADE"
});
Computer.belongsTo(User,{foreignKey:"user_id"});

export default User;