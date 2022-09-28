import { Router } from "express";
import { telecomLogController } from '../../controllers/logicos/TelecomLogController'; 

class TelecomLogRoute{
    public router: Router = Router();

    constructor(){
        this.config();
    }
    
    config(){
        this.router.post('/', telecomLogController.create);
        this.router.get('/', telecomLogController.read);
        this.router.get('/:id', telecomLogController.readOne);
        //this.router.get('/type', softwareLogController.readType);
        this.router.put('/:id', telecomLogController.update);
        this.router.delete('/:id', telecomLogController.delete);
    };
}

const telecomLogRoute = new TelecomLogRoute();
export default telecomLogRoute.router;