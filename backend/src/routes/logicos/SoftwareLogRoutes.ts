import { Router } from "express";
import { softwareLogController } from '../../controllers/logicos/SoftwareLogController'; 

class SoftwareLogRoute{
    public router: Router = Router();

    constructor(){
        this.config();
    }
    
    config(){
        this.router.post('/', softwareLogController.create);
        this.router.get('/', softwareLogController.read);
        this.router.get('/:id', softwareLogController.readOne);
        //this.router.get('/type', softwareLogController.readType);
        this.router.put('/:id', softwareLogController.update);
        this.router.delete('/:id', softwareLogController.delete);
    };
}

const softwareLogRoute = new SoftwareLogRoute();
export default softwareLogRoute.router;