import {Sequelize} from "sequelize";

class Database {

    static db = new Sequelize("relasidb","root","",{
        host:"localhost",
        dialect:"mysql"
    })

    static DataTypes = Sequelize.DataTypes; 
    static freeze = {freezeTableName : true};
    static offTimes = {timestamps : false};
}

export default Database;