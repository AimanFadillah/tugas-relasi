class Valindasi {

    static bodyNull (body = {}) {
        const keys = Object.keys(body);
        let check = false;

        keys.forEach(key => {
            if(body[key] === "") return check = `${key} tidak memiliki isi`;
        });

        return check;
    }

    static bodyRequired (body = {},required = []) {

        return check;
    }

}

export default Valindasi;