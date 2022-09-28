"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hardwareLogController = void 0;
const database_1 = __importDefault(require("../../database"));
class HardwareLogController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.promise().query(' INSERT INTO HardwareLog ' +
                ' SET ? ', [req.body]);
            res.json({ message: "Creado con exito" });
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const logs = yield database_1.default.promise().query(' SELECT h.idHardwareLog, ' +
                ' h.nroSerie, ' +
                ' h.codigo, ' +
                ' h.marca, ' +
                ' h.modelo, ' +
                ' h.ultimaActualizacion, ' +
                ' h.estado ' +
                ' FROM HardwareLog h ' +
                ' WHERE estado = 1 ');
            res.json(logs[0]);
        });
    }
    readOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const logs = yield database_1.default.promise().query(' SELECT h.idHardwareLog, ' +
                ' h.nroSerie, ' +
                ' h.codigo, ' +
                ' h.marca, ' +
                ' h.modelo, ' +
                ' h.ultimaActualizacion, ' +
                ' h.estado ' +
                ' FROM HardwareLog h ' +
                ' WHERE h.idHardwareLog = ? ' +
                ' AND h.estado = 1 ', [id]);
            res.json(logs[0]);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.promise().query(' UPDATE HardwareLog ' +
                ' SET ? ' +
                ' WHERE idHardwareLog = ? ', [req.body, id]);
            res.json({ message: "Actualizado con exito" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.promise().query(' UPDATE HardwareLog ' +
                ' SET estado = 0 ' +
                ' WHERE idHardwareLog = ? ', [id]);
            res.json({ message: "Borrado con exito" });
        });
    }
}
exports.hardwareLogController = new HardwareLogController();
