"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const HardwareLogRoutes_1 = __importDefault(require("./routes/logicos/HardwareLogRoutes"));
const OtrosLogRoutes_1 = __importDefault(require("./routes/logicos/OtrosLogRoutes"));
const SoftwareLogRoutes_1 = __importDefault(require("./routes/logicos/SoftwareLogRoutes"));
const TelecomLogRoutes_1 = __importDefault(require("./routes/logicos/TelecomLogRoutes"));
const HelpDeskLogRoutes_1 = __importDefault(require("./routes/logicos/HelpDeskLogRoutes"));
const SeguridadLogRoutes_1 = __importDefault(require("./routes/logicos/SeguridadLogRoutes"));
const LogFisicoRoutes_1 = __importDefault(require("./routes/fisicos/LogFisicoRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    //Metodo configuracion
    config() {
        this.app.set('port', process.env.PORT || 3000); // Servidor en puerto 3000
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    ;
    //Metodo para rutas
    routes() {
        //this.app.use('/api', indexRoutes); //ruta de prueba, deberia mostrar Index Correcto
        this.app.use('/hard', HardwareLogRoutes_1.default);
        this.app.use('/soft', SoftwareLogRoutes_1.default);
        this.app.use('/telc', TelecomLogRoutes_1.default);
        this.app.use('/help', HelpDeskLogRoutes_1.default);
        this.app.use('/seg', SeguridadLogRoutes_1.default);
        this.app.use('/otro', OtrosLogRoutes_1.default);
        this.app.use('/fis', LogFisicoRoutes_1.default);
    }
    ;
    //Metodo para iniciar servidor
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        });
    }
    ;
}
const server = new Server();
server.start();
