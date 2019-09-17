import tictacModel from "../typings/tictacModel"
import boxModel from "../typings/boxModel"
import { Int, ID_Input } from "../../prisma/generated/prisma-client"
export class Box implements boxModel {
    id:string
    player:Int
    step:Int
    value:string
    constructor(id:string,player:number,step:number,value:string){
        this.id = id
        this.player = player
        this.step = step
        this.value = value
    }
}
export class Tictac {
    id:ID_Input
    player1:string 
    player2:string
    winner:string
    draw:boolean
    boxes:Box[]
    constructor(
        id:string,
        player1:string, 
        player2:string,
        winner:string,
        draw:boolean,
        boxes:Box[]
    ){
        this.id = id
        this.player1 = player1
        this.player2 = player2
        this.winner =winner
        this.draw = draw
        this.boxes = boxes
    }
}