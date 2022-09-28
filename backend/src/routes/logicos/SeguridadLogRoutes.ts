import { Router } from "express";
import { seguridadLogController } from '../../controllers/logicos/SeguridadLogController'; 

class SeguridadLogRoute{
    public router: Router = Router();

    constructor(){
        this.config();
    }
    
    config(){
        this.router.post('/', seguridadLogController.create);
        this.router.get('/', seguridadLogController.read);
        this.router.get('/:id', seguridadLogController.readOne);
        //this.router.get('/type', seguridadLogController.readType);
        this.router.put('/:id', seguridadLogController.update);
        this.router.delete('/:id', seguridadLogController.delete);
    };
}

const seguridadLogRoute = new SeguridadLogRoute();
export default seguridadLogRoute.router;