import Project from "../model/project.js";
import Departement from "../model/departement.js";
import Joi from "joi";
import Valindasi from "../traits/valindasi.js";

class ProjectCont {

    static rules = {
        head:Joi.required(),
        name:Joi.required(),
        description:Joi.required(),
        departement_id:Joi.allow(null),
    }

    static async index (req,res) {
        const data = await Project.findAll();
        return res.json(data);
    }

    static async show (req,res) {
        const data = await Project.findOne({where:{id:req.params.id},include:Departement})
        return res.json(data);  
    }

    static async store (req,res) {
        const dataBody = req.body;
        const validatedData = Valindasi.valindasiData(ProjectCont.rules,dataBody);

        if(validatedData) return res.json(validatedData);

        const project = await Project.create(dataBody);
        if(req.body.departement_id){
            const departement = await Departement.findOne({where:{id:req.body.departement_id}});
            await project.addDepartement(departement);
        }
        return res.json(project);
    }   

    static async update (req,res){
        const data = await Project.update(req.body,{where:{id:req.params.id}});
        return res.json("success");
    }

    static async destroy (req,res) {
        const project = await Project.findOne({where:{id:req.params.id}});
        await Project.destroy({where:{id:req.params.id}});
        return res.json("success");
    }


}

export default ProjectCont;