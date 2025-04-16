import { ShortRepo } from "../repository/ShortRepo.js";
import { ShortService } from "../services/ShortService.js";

export const shortRepo = new ShortRepo();
export const shortService = new ShortService(shortRepo);
