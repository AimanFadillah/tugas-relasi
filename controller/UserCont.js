import Departement from "../model/departement.js";
import User from "../model/user.js";

class UserCont {

    static async index (req,res) {
        const data = await User.findAll();
        return res.json(data);
    }

    static async show (req,res) {
        const data = await User.findOne({where:{id:req.params.id},include:Departement})
        return res.json(data);  
    }

    static async store (req,res) {
        const data = await User.create(req.body);
        return res.json(data);
    }   

    static async update (req,res){
        const data = await User.update(req.body,{where:{id:req.params.id}});
        return res.json("success");
    }

    static async destroy (req,res) {
        const data = await User.destroy({where:{id:req.params.id}});
        return res.json("success");
    }


}

export default UserCont;