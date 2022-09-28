"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const OtrosLogController_1 = require("../../controllers/logicos/OtrosLogController");
class OtrosLogRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/', OtrosLogController_1.otrosLogController.create);
        this.router.get('/', OtrosLogController_1.otrosLogController.read);
        this.router.get('/:id', OtrosLogController_1.otrosLogController.readOne);
        this.router.put('/:id', OtrosLogController_1.otrosLogController.update);
        this.router.delete('/:id', OtrosLogController_1.otrosLogController.delete);
    }
    ;
}
const otrosLogRoutes = new OtrosLogRoutes();
exports.default = otrosLogRoutes.router;
