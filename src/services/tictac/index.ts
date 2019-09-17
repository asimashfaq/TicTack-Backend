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
}