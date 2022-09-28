import { Router } from "express";
import { logFisicoController } from '../../controllers/fisicos/LogFisicoController'; 

class LogFisicoRoute{
    public router: Router = Router();

    constructor(){
        this.config();
    }
    
    config(){
        this.router.post('/', logFisicoController.create);
        this.router.get('/', logFisicoController.read);
        this.router.get('/:id', logFisicoController.readOne);
        //this.router.get('/area', logFisicoController.readArea);
        //this.router.get('/serv', logFisicoController.readServicio);
        this.router.put('/:id', logFisicoController.update);
        this.router.delete('/:id', logFisicoController.delete);
    };
}

const logFisicoRoute = new LogFisicoRoute();
export default logFisicoRoute.router;