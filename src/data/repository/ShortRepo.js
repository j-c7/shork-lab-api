import { RepoBase } from "./RepoBase.js";

export class ShortRepo extends RepoBase {
    constructor() {
        super()
    }

    async create(model) {
        const { url, shortUrl } = model;
        if (!url || !shortUrl) {
            const err = new Error(`Alguno de los campos no esta definido url: ${url}, shortUrl: ${shortUrl}`);
            return {
                success: false,
                msg: err,
                data: null
            }
        }

        const createdUser = await this.prisma.short.create({
            data: {
                url: model.url,
                shortUrl: model.shortUrl
            }
        })

        if (createdUser) {
            return {
                success: true,
                msg: "Url creada con exito",
                data: {
                    createdUser
                }
            }
        }

        return {
            success: false,
            msg: "No se pudo crear url",
            data: null
        }
    }

    async remove(id) {
        const checkUrl = await this.checkShort(id);
        if(checkUrl){
            const deletedUrl = await this.prisma.short.delete({
                where: {
                    id,
                }
            })
            return {
                success: true,
                msg: `${JSON.stringify(deletedUrl)} borrado correctamente`,
                data: JSON.stringify(deletedUrl)
            }
        }
        else{
            return {
                success: false,
                msg: `Error al borrar url`,
                data: null
            }
        }
    }

    async checkShort(id) {
        const short = await this.prisma.short.findUnique({
            where: {
                id,
            }
        })

        return short ? true : false;
    }

    // TODO: Añadir función para obtener la url acortada a partir de la url
}


