import Computer from "../model/computer.js";
import User from "../model/user.js";

class ComputerCont {

    static async index (req,res) {
        const data = await Computer.findAll();
        return res.json(data);
    }

    static async show (req,res) {
        const data = await Computer.findOne({where:{id:req.params.id},include:User})
        return res.json(data);  
    }

    static async store (req,res) {
        const data = await Computer.create(req.body);
        return res.json(data);
    }   

    static async update (req,res){
        const data = await Computer.update(req.body,{where:{id:req.params.id}});
        return res.json("success");
    }

    static async destroy (req,res) {
        const data = await Computer.destroy({where:{id:req.params.id}});
        return res.json("success");
    }


}

export default ComputerCont;