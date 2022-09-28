"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const HelpDeskLogController_1 = require("../../controllers/logicos/HelpDeskLogController");
class HelpDeskLogRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/', HelpDeskLogController_1.helpDeskLogController.create);
        this.router.get('/', HelpDeskLogController_1.helpDeskLogController.read);
        this.router.get('/:id', HelpDeskLogController_1.helpDeskLogController.readOne);
        //this.router.get('/type', helpDeskLogController.readType);
        this.router.put('/:id', HelpDeskLogController_1.helpDeskLogController.update);
        this.router.delete('/:id', HelpDeskLogController_1.helpDeskLogController.delete);
    }
    ;
}
const helpDeskLogRoute = new HelpDeskLogRoute();
exports.default = helpDeskLogRoute.router;
