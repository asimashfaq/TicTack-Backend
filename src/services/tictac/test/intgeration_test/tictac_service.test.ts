import { Tictac,  Box } from "../../../../models/TicTac";
import { TictacService } from "../..";
import { TictacRepository } from "../../../../repository/tictac";
import {prisma as db} from '../../../../../prisma/generated/prisma-client' 
test("getGameplay_noGameplayInDB_emptyList", async () => {
    await db.deleteManyGamePlays({})
    const tictacSerivce = new TictacService(new TictacRepository());
    const history: Tictac[] = await tictacSerivce.getGamePlays();
    expect(history.length).toBe(0);
  });
  test("getGameplay_oneGameplayInDB_ListOneGameplay", async () => {
    await db.deleteManyGamePlays({})
    const gameplay = new Tictac("1","o","x","1",false,
    [
        new Box("box0",1,1,'x'),
        new Box("box4",1,3,'x'),
        new Box("box8",1,5,'x'),
        new Box("box2",2,2,'o'),
        new Box("box3",2,4,'o')    
    ]
   )
 //  const gp = db.
   await db.createGamePlay({
    player1:gameplay.player1,
    player2:gameplay.player2,
    winner:gameplay.winner,
    draw:gameplay.draw,
    boxes:{create:gameplay.boxes}
})
    const tictacSerivce = new TictacService(new TictacRepository());
    const history: Tictac[] = await tictacSerivce.getGamePlays();
    expect(history.length).toBe(1);
 await db.deleteManyGamePlays({})
  });