import { Response, Request } from "express";
import pool from '../../database';

class TelecomLogController{

    public async create (req: Request, res: Response){
        await pool.promise().query(' INSERT INTO TelecomLog ' + 
                                   ' SET ? ' ,
                                   [req.body]);

        res.json({message : "Creado con exito"});
    }

    public async read (req: Request, res: Response){
        const logs = await pool.promise().query(' SELECT tc.idTelecomLog, ' + 
                                                ' tc.idHardwareLog, ' +
                                                ' tc.idSoftwareLog, ' +
                                                ' tc.ultimaActualizacion, ' +
                                                ' tc.estado ' +
                                                ' FROM TelecomLog tc ' +
                                                ' LEFT JOIN SoftwareLog s ON (s.idSoftwareLog = tc.idSoftwareLog)' +
                                                ' LEFT JOIN HardwareLog h ON (h.idHardwareLog = tc.idHardwareLog)' + 
                                                ' WHERE tc.estado = 1 ');

        res.json(logs[0]); 
    }

    public async readOne (req: Request, res: Response){

        const { id } = req.params;

        const logs = await pool.promise().query(' SELECT tc.idTelecomLog, ' + 
                                                ' tc.idHardwareLog, ' +
                                                ' tc.idSoftwareLog, ' +
                                                ' tc.ultimaActualizacion, ' +
                                                ' tc.estado ' +
                                                ' FROM TelecomLog tc ' +
                                                ' LEFT JOIN SoftwareLog s ON (s.idSoftwareLog = tc.idSoftwareLog)' +
                                                ' LEFT JOIN HardwareLog h ON (h.idHardwareLog = tc.idHardwareLog)' + 
                                                ' WHERE tc.idTelecomLog = ? ' + 
                                                ' AND tc.estado = 1 ',
                                                [id]);

        res.json(logs[0]); 
    }

    public async update (req: Request, res: Response){

        const { id } = req.params;

        await pool.promise().query(' UPDATE TelecomLog ' + 
                                   ' SET ? ' +
                                   ' WHERE idTelecomLog = ? ',
                                   [req.body, id]);

        res.json({message : "Actualizado con exito"}); 
    }

    public async delete (req: Request, res: Response){

        const { id } = req.params;

        await pool.promise().query(' UPDATE TelecomLog ' + 
                                   ' SET estado = 0 ' +
                                   ' WHERE idTelecomLog = ? ',
                                   [id]);

        res.json({message : "Borrado con exito"}); 
    }
}

export const telecomLogController = new TelecomLogController();