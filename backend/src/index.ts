import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import HardwareLogRoutes from './routes/logicos/HardwareLogRoutes';
import OtrosLogRoutes from './routes/logicos/OtrosLogRoutes';
import SoftwareLogRoutes from './routes/logicos/SoftwareLogRoutes';
import TelecomLogRoutes from './routes/logicos/TelecomLogRoutes';
import HelpDeskLogRoutes from './routes/logicos/HelpDeskLogRoutes';
import SeguridadLogRoutes from './routes/logicos/SeguridadLogRoutes';
import LogFisicoRoutes from './routes/fisicos/LogFisicoRoutes';

class Server {
    public app : Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    //Metodo configuracion
    config(){
        this.app.set('port', process.env.PORT || 3000);// Servidor en puerto 3000
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    };

    //Metodo para rutas
    routes(){
        //this.app.use('/api', indexRoutes); //ruta de prueba, deberia mostrar Index Correcto
        this.app.use('/hard', HardwareLogRoutes);
        this.app.use('/soft', SoftwareLogRoutes);
        this.app.use('/telc', TelecomLogRoutes);
        this.app.use('/help', HelpDeskLogRoutes);
        this.app.use('/seg', SeguridadLogRoutes);
        this.app.use('/otro', OtrosLogRoutes);
        this.app.use('/fis', LogFisicoRoutes);
    };

    //Metodo para iniciar servidor
    start(){
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        });
    };
}

const server = new Server();
server.start();