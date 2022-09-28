import { Router } from "express";
import { otrosLogController } from "../../controllers/logicos/OtrosLogController";

class OtrosLogRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }
    
    config(){
        this.router.post('/', otrosLogController.create);
        this.router.get('/', otrosLogController.read);
        this.router.get('/:id', otrosLogController.readOne);
        this.router.put('/:id', otrosLogController.update);
        this.router.delete('/:id', otrosLogController.delete);
    };
}

const otrosLogRoutes = new OtrosLogRoutes();
export default otrosLogRoutes.router;