import Departement from "../model/departement.js";
import User from "../model/user.js";
import Joi from "joi";
import Valindasi from "../traits/valindasi.js";

class DepartementCont {

    static rules = {
        head:Joi.required(),
        description:Joi.required(),
    }

    static async index (req,res) {
        const data = await Departement.findAll();
        return res.json(data);
    }

    static async show (req,res) {
        const data = await Departement.findOne({where:{id:req.params.id},include:User})
        return res.json(data);  
    }

    static async store (req,res) {
        const dataBody = req.body;
        const validatedData = Valindasi.valindasiData(DepartementCont.rules,dataBody);

        if(validatedData) return res.json(validatedData);

        const data = await Departement.create(dataBody);
        return res.json(data);
    }   

    static async update (req,res){
        const dataBody = req.body;
        const validatedData = Valindasi.valindasiData(DepartementCont.rules,dataBody);

        if(validatedData) return res.json(validatedData);

        const data = await Departement.update(dataBody,{where:{id:req.params.id}});
        return res.json("success");
    }

    static async destroy (req,res) {
        const data = await Departement.destroy({where:{id:req.params.id}});
        return res.json("success");
    }


}

export default DepartementCont;