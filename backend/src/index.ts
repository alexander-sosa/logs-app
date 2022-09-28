import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';

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
        this.app.use('/api', indexRoutes); //ruta de prueba, deberia mostrar Index Correcto
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