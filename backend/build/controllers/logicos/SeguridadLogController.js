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
exports.seguridadLogController = void 0;
const database_1 = __importDefault(require("../../database"));
class SeguridadLogController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.promise().query(' INSERT INTO SeguridadLog ' +
                ' SET ? ', [req.body]);
            res.json({ message: "Creado con exito" });
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const logs = yield database_1.default.promise().query(' SELECT s.idSeguridadLog, ' +
                ' s.idTipoEvento, ' +
                ' t.descripcion, ' +
                ' s.nroEvento, ' +
                ' s.condicion, ' +
                ' s.resultado, ' +
                ' s.ultimaActualizacion, ' +
                ' s.estado ' +
                ' FROM SeguridadLog s ' +
                ' LEFT JOIN TipoEvento t ON (s.idTipoEvento = t.idTipoEvento)' +
                ' WHERE s.estado = 1 ');
            res.json(logs[0]);
        });
    }
    readType(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const types = yield database_1.default.promise().query(' SELECT idTipoEvento, ' +
                ' descripcion, ' +
                ' ultimaActualizacion, ' +
                ' estado ' +
                ' FROM TipoEvento ' +
                ' WHERE estado = 1 ');
            res.json(types[0]);
        });
    }
    readOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const logs = yield database_1.default.promise().query(' SELECT s.idSeguridadLog, ' +
                ' s.idTipoEvento, ' +
                ' t.descripcion, ' +
                ' s.nroEvento, ' +
                ' s.condicion, ' +
                ' s.resultado, ' +
                ' s.ultimaActualizacion, ' +
                ' s.estado ' +
                ' FROM SeguridadLog s ' +
                ' LEFT JOIN TipoEvento t ON (s.idTipoEvento = t.idTipoEvento)' +
                ' WHERE s.idSeguridadLog = ? ' +
                ' AND s.estado = 1 ', [id]);
            res.json(logs[0]);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.promise().query(' UPDATE SeguridadLog ' +
                ' SET ? ' +
                ' WHERE idSeguridadLog = ? ', [req.body, id]);
            res.json({ message: "Actualizado con exito" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.promise().query(' UPDATE SeguridadLog ' +
                ' SET estado = 0 ' +
                ' WHERE idSeguridadLog = ? ', [id]);
            res.json({ message: "Borrado con exito" });
        });
    }
}
exports.seguridadLogController = new SeguridadLogController();
