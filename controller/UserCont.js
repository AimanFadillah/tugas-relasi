import Departement from "../model/departement.js";
import User from "../model/user.js";
import Joi from "joi";
import Valindasi from "../traits/valindasi.js";

class UserCont {

    static rules = {
        name:Joi.required(),
        nik:Joi.required(),
        departement_id:Joi.required(),
    }

    static async index (req,res) {
        const data = await User.findAll();
        return res.json(data);
    }

    static async show (req,res) {
        const data = await User.findOne({where:{id:req.params.id},include:Departement})
        return res.json(data);  
    }

    static async store (req,res) {
        const dataBody = req.body;
        const validatedData = Valindasi.valindasiData(UserCont.rules,dataBody);
        if(validatedData) return res.json(validatedData);

        const data = await User.create(dataBody);
        return res.json(data);
    }   

    static async update (req,res){
        const dataBody = req.body;
        const validatedData = Valindasi.valindasiData(UserCont.rules,dataBody);
        if(validatedData) return res.json(validatedData);

        const data = await User.update(dataBody,{where:{id:req.params.id}});
        return res.json("success");
    }

    static async destroy (req,res) {
        const data = await User.destroy({where:{id:req.params.id}});
        return res.json("success");
    }


}

export default UserCont;