import Joi from "joi";

class Valindasi {

    static bodyNull (body = {}) {
        const keys = Object.keys(body);
        let check = false;

        keys.forEach(key => {
            if(body[key] === "") return check = `${key} tidak memiliki isi`;
        });

        return check;
    }

    static joiMsg (valindasi) {
        return valindasi.error.details[0].message.replace(/"/g,"");
    }

    static valindasiData (rules,body){
        let pesan = false;
        const validatedData = Joi.object(rules).validate(body);
        if(!body) return pesan = "Tidak ada data";
        if(validatedData.error) return pesan = Valindasi.joiMsg(validatedData);
        if(Valindasi.bodyNull(body)) return pesan = Valindasi.bodyRequired(body);
        return pesan;
    }

}

export default Valindasi;