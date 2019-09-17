import { Tictac } from "../../models/TicTac";
import {prisma} from '../../../prisma/generated/prisma-client/index'
export interface ITictacRepository{
    gamePlays(): Promise<Tictac[]>;
}
export class TictacRepository implements ITictacRepository{
    async gamePlays():Promise<Tictac[]>{
        return prisma.gamePlays().$fragment("{id player1 player2 winner draw}")
    }
}