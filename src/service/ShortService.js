import generateId from "../util/generateId.js";

export class ShortService {
    constructor(shortRepo) {
        this.shortRepo = shortRepo;
    }

    createUrl = async (model) => {
        // TODO: Para evitar registrar una url que se repita, verificar si la url acortada ya existe, si es el caso, volver a generarla.
        const { url, shortUrl } = this.short(model);
        const modelSaved = await this.shortRepo.create({ url, shortUrl });
        if(modelSaved)
            this.autoDeleteShort(modelSaved);
        return modelSaved;
    }

    async autoDeleteShort(model, res) {
        setTimeout(async () => {
            const { id } = model.data.createdUser;
            const deleted = await this.shortRepo.remove(id);
            const { success, msg, data } = deleted
            if(success){
                console.log(`${msg}} ${data}`)
            }
            else{
                console.log(`${msg}`)
            }
        }, "120000")
    }

    short = (model) => {
        const { url } = model;
        const shortUrl = generateId();
        return { url, shortUrl };
    };

    async getUrlByShort(short){
        const url = await this.shortRepo.getByShort(short);
        return url;
    }
}