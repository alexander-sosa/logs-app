"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LogFisicoController_1 = require("../../controllers/fisicos/LogFisicoController");
class LogFisicoRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/', LogFisicoController_1.logFisicoController.create);
        this.router.get('/', LogFisicoController_1.logFisicoController.read);
        this.router.get('/:id', LogFisicoController_1.logFisicoController.readOne);
        //this.router.get('/area', logFisicoController.readArea);
        //this.router.get('/serv', logFisicoController.readServicio);
        this.router.put('/:id', LogFisicoController_1.logFisicoController.update);
        this.router.delete('/:id', LogFisicoController_1.logFisicoController.delete);
    }
    ;
}
const logFisicoRoute = new LogFisicoRoute();
exports.default = logFisicoRoute.router;
