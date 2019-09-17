import {Router} from "express"
import TictacController from "../controllers/tictac/TictacController"
const router = Router();
router.get("/",  TictacController.index); 
export { router };