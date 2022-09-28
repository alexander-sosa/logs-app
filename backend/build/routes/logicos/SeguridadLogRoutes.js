"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SeguridadLogController_1 = require("../../controllers/logicos/SeguridadLogController");
class SeguridadLogRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/', SeguridadLogController_1.seguridadLogController.create);
        this.router.get('/', SeguridadLogController_1.seguridadLogController.read);
        this.router.get('/:id', SeguridadLogController_1.seguridadLogController.readOne);
        //this.router.get('/type', seguridadLogController.readType);
        this.router.put('/:id', SeguridadLogController_1.seguridadLogController.update);
        this.router.delete('/:id', SeguridadLogController_1.seguridadLogController.delete);
    }
    ;
}
const seguridadLogRoute = new SeguridadLogRoute();
exports.default = seguridadLogRoute.router;
