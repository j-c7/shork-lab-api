import shortService from "../infraestructure/Container.js"

const createPublicShort = async (req, res) => {
    const model = await shortService.createUrl(req.body);
    const { success, msg, data } = model;
    if (success) {
        return res.status(200).json({ msg, data });
    }
    else {
        res.json(msg);
    }
}

const getUrlByShort = async (req, res) => {
    const model = await shortService.getUrlByShort(req.params.short);
    const { success, msg, data } = model;
    if(success){
        return res.status(200).json({ msg, data });
    }
    else{
        res.status(403).json(msg);
    }
}

export { createPublicShort, getUrlByShort }