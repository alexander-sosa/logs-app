"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SoftwareLogController_1 = require("../../controllers/logicos/SoftwareLogController");
class SoftwareLogRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/', SoftwareLogController_1.softwareLogController.create);
        this.router.get('/', SoftwareLogController_1.softwareLogController.read);
        this.router.get('/:id', SoftwareLogController_1.softwareLogController.readOne);
        //this.router.get('/type', softwareLogController.readType);
        this.router.put('/:id', SoftwareLogController_1.softwareLogController.update);
        this.router.delete('/:id', SoftwareLogController_1.softwareLogController.delete);
    }
    ;
}
const softwareLogRoute = new SoftwareLogRoute();
exports.default = softwareLogRoute.router;
