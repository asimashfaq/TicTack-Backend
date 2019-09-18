import {Tictac} from '../../models/TicTac'
import { TictacRepository } from '../../repository/tictac'
export class TictacService {
    private repo: TictacRepository
    constructor(repo:TictacRepository){
        this.repo = repo
    }
    async getGamePlays():Promise<Tictac[]>{
        const gamePlays = await this.repo.gamePlays();
        return gamePlays;
    }
    async getGamePlay(id:string):Promise<Tictac>{
        const gamePlay = await this.repo.gamePlay(id);
        return gamePlay;
    }
    async saveGamePlay(tictac:Tictac):Promise<Tictac>{
        const gamePlay = await this.repo.saveGamePlay(tictac);
        return gamePlay;
    }
}