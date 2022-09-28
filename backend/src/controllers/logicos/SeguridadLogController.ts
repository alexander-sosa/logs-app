import { Response, Request } from "express";
import pool from '../../database';

class SeguridadLogController{

    public async create (req: Request, res: Response){
        await pool.promise().query(' INSERT INTO SeguridadLog ' + 
                                   ' SET ? ' ,
                                   [req.body]);

        res.json({message : "Creado con exito"});
    }

    public async read (req: Request, res: Response){
        const logs = await pool.promise().query(' SELECT s.idSeguridadLog, ' + 
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
    }

    public async readType (req: Request, res: Response){
        const types = await pool.promise().query(' SELECT idTipoEvento, ' +
                                                ' descripcion, ' +
                                                ' ultimaActualizacion, ' +
                                                ' estado ' +
                                                ' FROM TipoEvento ' +
                                                ' WHERE estado = 1 ');

        res.json(types[0]); 
    }

    public async readOne (req: Request, res: Response){

        const { id } = req.params;

        const logs = await pool.promise().query(' SELECT s.idSeguridadLog, ' + 
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
                                                ' AND s.estado = 1 ',
                                                [id]);

        res.json(logs[0]); 
    }

    public async update (req: Request, res: Response){

        const { id } = req.params;

        await pool.promise().query(' UPDATE SeguridadLog ' + 
                                   ' SET ? ' +
                                   ' WHERE idSeguridadLog = ? ',
                                   [req.body, id]);

        res.json({message : "Actualizado con exito"}); 
    }

    public async delete (req: Request, res: Response){

        const { id } = req.params;

        await pool.promise().query(' UPDATE SeguridadLog ' + 
                                   ' SET estado = 0 ' +
                                   ' WHERE idSeguridadLog = ? ',
                                   [id]);

        res.json({message : "Borrado con exito"}); 
    }
}

export const seguridadLogController = new SeguridadLogController();