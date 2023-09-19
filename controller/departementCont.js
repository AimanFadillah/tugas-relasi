import Departement from "../model/departement.js";
import User from "../model/user.js";

class DepartementCont {

    static async index (req,res) {
        const data = await Departement.findAll();
        return res.json(data);
    }

    static async show (req,res) {
        const data = await Departement.findOne({where:{id:req.params.id},include:User})
        return res.json(data);  
    }

    static async store (req,res) {
        const data = await Departement.create(req.body);
        return res.json(data);
    }   

    static async update (req,res){
        const data = await Departement.update(req.body,{where:{id:req.params.id}});
        return res.json("success");
    }

    static async destroy (req,res) {
        const data = await Departement.destroy({where:{id:req.params.id}});
        return res.json("success");
    }


}

export default DepartementCont;