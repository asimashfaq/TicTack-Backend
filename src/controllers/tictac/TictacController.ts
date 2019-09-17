import {Request,Response} from "express"
import { TictacService } from "../../services/tictac"
import { TictacRepository } from "../../repository/tictac";
class TictacController {
    private tictacService:TictacService;
    constructor(){
        this.tictacService = new TictacService(new TictacRepository())
    }
    index = async(req:Request,res:Response)=>{
        const gameplays = await this.tictacService.getGamePlays();
        res.json(gameplays)
    }
}
export default new TictacController()