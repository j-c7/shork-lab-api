import { ShortRepo } from "../data/repository/ShortRepo.js";
import { ShortService } from "../service/ShortService.js";

const shortRepo = new ShortRepo();
const shortService = new ShortService(shortRepo);

const createPublicShort = async (req, res) => {
    const model = await shortService.createUrl(req.body);
    const { success, msg, data } = model;
    if(success){
        return res.status(200).json({msg, data});
    }
    else{
        res.json(msg);
    }
}

export { createPublicShort }