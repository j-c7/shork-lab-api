import { ShortRepo } from "../repository/ShortRepo";
import { ShortService } from "../services/ShortService";

export const shortRepo = new ShortRepo();
export const shortService = new ShortService(shortRepo);
