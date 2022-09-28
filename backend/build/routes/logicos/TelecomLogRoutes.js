"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TelecomLogController_1 = require("../../controllers/logicos/TelecomLogController");
class TelecomLogRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/', TelecomLogController_1.telecomLogController.create);
        this.router.get('/', TelecomLogController_1.telecomLogController.read);
        this.router.get('/:id', TelecomLogController_1.telecomLogController.readOne);
        //this.router.get('/type', softwareLogController.readType);
        this.router.put('/:id', TelecomLogController_1.telecomLogController.update);
        this.router.delete('/:id', TelecomLogController_1.telecomLogController.delete);
    }
    ;
}
const telecomLogRoute = new TelecomLogRoute();
exports.default = telecomLogRoute.router;
