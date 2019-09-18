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
    one = async(req:Request,res:Response)=>{
        const gameplay = await this.tictacService.getGamePlay(req.body);
        res.json(gameplay)
    }
    add = async(req:Request,res:Response)=>{
        const gameplay = await this.tictacService.saveGamePlay(req.body);
        res.json(gameplay)
    }
}
export default new TictacController()