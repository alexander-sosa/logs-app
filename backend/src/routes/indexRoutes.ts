import { Router } from "express";

import { indexController } from "../controllers/indexController";

//Prueba hecha para auth0
class IndexRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.get('/', indexController.index);
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;