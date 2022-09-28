import { Router } from "express";
import { helpDeskLogController } from '../../controllers/logicos/HelpDeskLogController'; 

class HelpDeskLogRoute{
    public router: Router = Router();

    constructor(){
        this.config();
    }
    
    config(){
        this.router.post('/', helpDeskLogController.create);
        this.router.get('/', helpDeskLogController.read);
        this.router.get('/:id', helpDeskLogController.readOne);
        //this.router.get('/type', helpDeskLogController.readType);
        this.router.put('/:id', helpDeskLogController.update);
        this.router.delete('/:id', helpDeskLogController.delete);
    };
}

const helpDeskLogRoute = new HelpDeskLogRoute();
export default helpDeskLogRoute.router;