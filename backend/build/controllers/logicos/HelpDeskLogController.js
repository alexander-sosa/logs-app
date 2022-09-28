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
exports.helpDeskLogController = void 0;
const database_1 = __importDefault(require("../../database"));
class HelpDeskLogController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.promise().query(' INSERT INTO HelpDeskLog ' +
                ' SET ? ', [req.body]);
            res.json({ message: "Creado con exito" });
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const logs = yield database_1.default.promise().query(' SELECT h.idHelpDeskLog, ' +
                ' h.idTipoSoporte, ' +
                ' t.descripcion, ' +
                ' h.usuario, ' +
                ' h.condicion, ' +
                ' h.resultado, ' +
                ' h.ultimaActualizacion, ' +
                ' h.estado ' +
                ' FROM HelpDeskLog h ' +
                ' LEFT JOIN TipoSoporte t ON (h.idTipoSoporte = t.idTipoSoporte)' +
                ' WHERE h.estado = 1 ');
            res.json(logs[0]);
        });
    }
    readType(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const types = yield database_1.default.promise().query(' SELECT idTipoSoporte, ' +
                ' descripcion, ' +
                ' ultimaActualizacion, ' +
                ' estado ' +
                ' FROM TipoSoporte ' +
                ' WHERE estado = 1 ');
            res.json(types[0]);
        });
    }
    readOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const logs = yield database_1.default.promise().query(' SELECT h.idHelpDeskLog, ' +
                ' h.idTipoSoporte, ' +
                ' t.descripcion, ' +
                ' h.usuario, ' +
                ' h.condicion, ' +
                ' h.resultado, ' +
                ' h.ultimaActualizacion, ' +
                ' h.estado ' +
                ' FROM HelpDeskLog h ' +
                ' LEFT JOIN TipoSoporte t ON (h.idTipoSoporte = t.idTipoSoporte)' +
                ' WHERE h.idHelpDeskLog = ? ' +
                ' AND h.estado = 1 ', [id]);
            res.json(logs[0]);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.promise().query(' UPDATE HelpDeskLog ' +
                ' SET ? ' +
                ' WHERE idHelpDeskLog = ? ', [req.body, id]);
            res.json({ message: "Actualizado con exito" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.promise().query(' UPDATE HelpDeskLog ' +
                ' SET estado = 0 ' +
                ' WHERE idHelpDeskLog = ? ', [id]);
            res.json({ message: "Borrado con exito" });
        });
    }
}
exports.helpDeskLogController = new HelpDeskLogController();
