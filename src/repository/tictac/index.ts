import { Tictac } from "../../models/TicTac";
import {prisma} from '../../../prisma/generated/prisma-client/index'
export interface ITictacRepository{
    gamePlays(): Promise<Tictac[]>;
    gamePlay(id:string):Promise<Tictac>;
    saveGamePlay(tictac:Tictac):Promise<Tictac>
}
export class TictacRepository implements ITictacRepository{
    async gamePlays():Promise<Tictac[]>{
        return prisma.gamePlays().$fragment("{id player1 player2 winner draw}")
    }
    async gamePlay(gpid:string):Promise<Tictac>{
        return prisma.gamePlay({id:gpid}).$fragment("{id player1 player2 winner draw}")
    }
    async saveGamePlay(tictac:Tictac):Promise<Tictac>{
        return prisma.createGamePlay({
            player1:tictac.player1,
            player2:tictac.player2,
            winner:tictac.winner,
            draw:tictac.draw,
            boxes:{create:tictac.boxes}}).$fragment("{id}")
    }

}