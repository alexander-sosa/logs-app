import { Response, Request } from "express";
import pool from '../../database';

class HelpDeskLogController{

    public async create (req: Request, res: Response){
        await pool.promise().query(' INSERT INTO HelpDeskLog ' + 
                                   ' SET ? ' ,
                                   [req.body]);

        res.json({message : "Creado con exito"});
    }

    public async read (req: Request, res: Response){
        const logs = await pool.promise().query(' SELECT h.idHelpDeskLog, ' + 
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
    }

    public async readType (req: Request, res: Response){
        const types = await pool.promise().query(' SELECT idTipoSoporte, ' +
                                                ' descripcion, ' +
                                                ' ultimaActualizacion, ' +
                                                ' estado ' +
                                                ' FROM TipoSoporte ' +
                                                ' WHERE estado = 1 ');

        res.json(types[0]); 
    }

    public async readOne (req: Request, res: Response){

        const { id } = req.params;

        const logs = await pool.promise().query(' SELECT h.idHelpDeskLog, ' + 
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
                                                ' AND h.estado = 1 ',
                                                [id]);

        res.json(logs[0]); 
    }

    public async update (req: Request, res: Response){

        const { id } = req.params;

        await pool.promise().query(' UPDATE HelpDeskLog ' + 
                                   ' SET ? ' +
                                   ' WHERE idHelpDeskLog = ? ',
                                   [req.body, id]);

        res.json({message : "Actualizado con exito"}); 
    }

    public async delete (req: Request, res: Response){

        const { id } = req.params;

        await pool.promise().query(' UPDATE HelpDeskLog ' + 
                                   ' SET estado = 0 ' +
                                   ' WHERE idHelpDeskLog = ? ',
                                   [id]);

        res.json({message : "Borrado con exito"}); 
    }
}

export const helpDeskLogController = new HelpDeskLogController();