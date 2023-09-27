import Computer from "../model/computer.js";
import User from "../model/user.js";
import Valindasi from "../traits/valindasi.js";

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
        const required = ["name"]
        const dataBody = req.body;

        if(Valindasi.bodyRequired(dataBody,required)) return res.json(Valindasi.bodyRequired(dataBody,required));
        if(Valindasi.bodyNull(dataBody)) return res.json(Valindasi.bodyRequired(dataBody));

        return res.json("gagal");

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