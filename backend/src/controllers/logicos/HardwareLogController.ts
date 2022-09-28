import { Response, Request } from "express";
import pool from '../../database';

class HardwareLogController{

    public async create (req: Request, res: Response){
        await pool.promise().query(' INSERT INTO HardwareLog ' + 
                                   ' SET ? ' ,
                                   [req.body]);

        res.json({message : "Creado con exito"});
    }

    public async read (req: Request, res: Response){
        const logs = await pool.promise().query(' SELECT h.idHardwareLog, ' + 
                                                ' h.nroSerie, ' +
                                                ' h.codigo, ' +
                                                ' h.marca, ' +
                                                ' h.modelo, ' +
                                                ' h.ultimaActualizacion, ' +
                                                ' h.estado ' +
                                                ' FROM HardwareLog h ' + 
                                                ' WHERE estado = 1 ');

        res.json(logs[0]); 
    }

    public async readOne (req: Request, res: Response){

        const { id } = req.params;

        const logs = await pool.promise().query(' SELECT h.idHardwareLog, ' + 
                                                ' h.nroSerie, ' +
                                                ' h.codigo, ' +
                                                ' h.marca, ' +
                                                ' h.modelo, ' +
                                                ' h.ultimaActualizacion, ' +
                                                ' h.estado ' +
                                                ' FROM HardwareLog h '+
                                                ' WHERE h.idHardwareLog = ? ' + 
                                                ' AND h.estado = 1 ',
                                                [id]);

        res.json(logs[0]); 
    }

    public async update (req: Request, res: Response){

        const { id } = req.params;

        await pool.promise().query(' UPDATE HardwareLog ' + 
                                   ' SET ? ' +
                                   ' WHERE idHardwareLog = ? ',
                                   [req.body, id]);

        res.json({message : "Actualizado con exito"}); 
    }

    public async delete (req: Request, res: Response){

        const { id } = req.params;

        await pool.promise().query(' UPDATE HardwareLog ' + 
                                   ' SET estado = 0 ' +
                                   ' WHERE idHardwareLog = ? ',
                                   [id]);

        res.json({message : "Borrado con exito"}); 
    }
}

export const hardwareLogController = new HardwareLogController();