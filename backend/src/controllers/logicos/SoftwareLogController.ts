import { Response, Request } from "express";
import pool from '../../database';

class SoftwareLogController{

    public async create (req: Request, res: Response){
        await pool.promise().query(' INSERT INTO SoftwareLog ' + 
                                   ' SET ? ' ,
                                   [req.body]);

        res.json({message : "Creado con exito"});
    }

    public async read (req: Request, res: Response){
        const logs = await pool.promise().query(' SELECT s.idSoftwareLog, ' + 
                                                ' s.idTipoSoftware, ' +
                                                ' t.descripcion, ' +
                                                ' s.codigo, ' +
                                                ' s.marca, ' +
                                                ' s.version, ' +
                                                ' s.ultimaActualizacion, ' +
                                                ' s.estado ' +
                                                ' FROM SoftwareLog s ' +
                                                ' LEFT JOIN TipoSoftware t ON (s.idTipoSoftware = t.idTipoSoftware)' + 
                                                ' WHERE s.estado = 1 ');

        res.json(logs[0]); 
    }

    public async readType (req: Request, res: Response){
        const types = await pool.promise().query(' SELECT idTipoSoftware, ' +
                                                ' descripcion, ' +
                                                ' ultimaActualizacion, ' +
                                                ' estado ' +
                                                ' FROM TipoSoftware ' +
                                                ' WHERE estado = 1 ');

        res.json(types[0]); 
    }

    public async readOne (req: Request, res: Response){

        const { id } = req.params;

        const logs = await pool.promise().query(' SELECT s.idSoftwareLog, ' + 
                                                ' s.idTipoSoftware, ' +
                                                ' t.descripcion, ' +
                                                ' s.codigo, ' +
                                                ' s.marca, ' +
                                                ' s.version, ' +
                                                ' s.ultimaActualizacion, ' +
                                                ' s.estado ' +
                                                ' FROM SoftwareLog s ' +
                                                ' LEFT JOIN TipoSoftware t ON (s.idTipoSoftware = t.idTipoSoftware)' + 
                                                ' WHERE s.idSoftwareLog = ? ' + 
                                                ' AND s.estado = 1 ',
                                                [id]);

        res.json(logs[0]); 
    }

    public async update (req: Request, res: Response){

        const { id } = req.params;

        await pool.promise().query(' UPDATE SoftwareLog ' + 
                                   ' SET ? ' +
                                   ' WHERE idSoftwareLog = ? ',
                                   [req.body, id]);

        res.json({message : "Actualizado con exito"}); 
    }

    public async delete (req: Request, res: Response){

        const { id } = req.params;

        await pool.promise().query(' UPDATE SoftwareLog ' + 
                                   ' SET estado = 0 ' +
                                   ' WHERE idSoftwareLog = ? ',
                                   [id]);

        res.json({message : "Borrado con exito"}); 
    }
}

export const softwareLogController = new SoftwareLogController();