import { Router } from "express";
import { hardwareLogController } from "../../controllers/logicos/HardwareLogController";

class HardwareLogRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }
    
    config(){
        this.router.post('/', hardwareLogController.create);
        this.router.get('/', hardwareLogController.read);
        this.router.get('/:id', hardwareLogController.readOne);
        this.router.put('/:id', hardwareLogController.update);
        this.router.delete('/:id', hardwareLogController.delete);
    };
}

const hardwareLogRoutes = new HardwareLogRoutes();
export default hardwareLogRoutes.router;