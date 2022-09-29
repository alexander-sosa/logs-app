import { Response, Request } from "express";
import pool from '../../database';

class LogFisicoController{

    public async create (req: Request, res: Response){
        await pool.promise().query(' INSERT INTO LogFisico ' + 
                                   ' SET ? ' ,
                                   [req.body]);

        res.json({message : "Creado con exito"});
    }

    public async read (req: Request, res: Response){
        const logs = await pool.promise().query(' SELECT f.idFisicoLog, ' + 
                                                ' f.idArea, ' +
                                                ' a.descripcion as descArea, ' +
                                                ' f.idServicio, ' +
                                                ' s.descripcion as descServ, ' +
                                                ' f.fecha, ' +
                                                ' f.condicionServicio, ' +
                                                ' f.nroEvento, ' +
                                                ' f.tipoEvento, ' +
                                                ' f.condicion, ' +
                                                ' f.resultado, ' +
                                                ' f.responsable, ' +
                                                ' f.ultimaActualizacion, ' +
                                                ' f.estado ' +
                                                ' FROM LogFisico f ' +
                                                ' LEFT JOIN Area a ON (a.idArea = f.idArea)' + 
                                                ' LEFT JOIN Servicio s ON (s.idServicio = f.idServicio)' +
                                                ' WHERE f.estado = 1 ');

        res.json(logs[0]); 
    }

    public async readArea (req: Request, res: Response){
        const types = await pool.promise().query(' SELECT idArea, ' +
                                                ' descripcion, ' +
                                                ' ultimaActualizacion, ' +
                                                ' estado ' +
                                                ' FROM Area ' +
                                                ' WHERE estado = 1 ');

        res.json(types[0]); 
    }

    public async readServicio (req: Request, res: Response){
        const types = await pool.promise().query(' SELECT idServicio, ' +
                                                ' descripcion, ' +
                                                ' ultimaActualizacion, ' +
                                                ' estado ' +
                                                ' FROM Servicio ' +
                                                ' WHERE estado = 1 ');

        res.json(types[0]); 
    }

    public async readOne (req: Request, res: Response){

        const { id } = req.params;

        const logs = await pool.promise().query(' SELECT f.idFisicoLog, ' + 
                                                ' f.idArea, ' +
                                                ' a.descripcion as descArea, ' +
                                                ' f.idServicio, ' +
                                                ' s.descripcion as descServ, ' +
                                                ' f.fecha, ' +
                                                ' f.condicionServicio, ' +
                                                ' f.nroEvento, ' +
                                                ' f.tipoEvento, ' +
                                                ' f.condicion, ' +
                                                ' f.resultado, ' +
                                                ' f.responsable, ' +
                                                ' f.ultimaActualizacion, ' +
                                                ' f.estado ' +
                                                ' FROM LogFisico f ' +
                                                ' LEFT JOIN Area a ON (a.idArea = f.idArea)' + 
                                                ' LEFT JOIN Servicio s ON (s.idServicio = f.idServicio)' + 
                                                ' WHERE f.idFisicoLog = ? ' + 
                                                ' AND f.estado = 1 ',
                                                [id]);

        res.json(logs[0]); 
    }

    public async update (req: Request, res: Response){

        const { id } = req.params;

        await pool.promise().query(' UPDATE LogFisico ' + 
                                   ' SET ? ' +
                                   ' WHERE idFisicoLog = ? ',
                                   [req.body, id]);

        res.json({message : "Actualizado con exito"}); 
    }

    public async delete (req: Request, res: Response){

        const { id } = req.params;

        await pool.promise().query(' UPDATE LogFisico ' + 
                                   ' SET estado = 0 ' +
                                   ' WHERE idFisicoLog = ? ',
                                   [id]);

        res.json({message : "Borrado con exito"}); 
    }
}

export const logFisicoController = new LogFisicoController();