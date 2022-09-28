"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const HardwareLogController_1 = require("../../controllers/logicos/HardwareLogController");
class HardwareLogRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/', HardwareLogController_1.hardwareLogController.create);
        this.router.get('/', HardwareLogController_1.hardwareLogController.read);
        this.router.get('/:id', HardwareLogController_1.hardwareLogController.readOne);
        this.router.put('/:id', HardwareLogController_1.hardwareLogController.update);
        this.router.delete('/:id', HardwareLogController_1.hardwareLogController.delete);
    }
    ;
}
const hardwareLogRoutes = new HardwareLogRoutes();
exports.default = hardwareLogRoutes.router;
