import { Response, Request } from "express";
import pool from '../../database';

class OtrosLogController{

    public async create (req: Request, res: Response){
        await pool.promise().query(' INSERT INTO OtrosLog ' + 
                                   ' SET ? ' ,
                                   [req.body]);

        res.json({message : "Creado con exito"});
    }

    public async read (req: Request, res: Response){
        const logs = await pool.promise().query(' SELECT o.idOtrosLog, ' + 
                                                ' o.caso, ' +
                                                ' o.descripcion, ' +
                                                ' o.condicion, ' +
                                                ' o.resultado, ' +
                                                ' o.ultimaActualizacion, ' +
                                                ' o.estado ' +
                                                ' FROM OtrosLog o ' + 
                                                ' WHERE o.estado = 1 ');

        res.json(logs[0]); 
    }

    public async readOne (req: Request, res: Response){

        const { id } = req.params;

        const logs = await pool.promise().query(' SELECT o.idOtrosLog, ' + 
                                                ' o.caso, ' +
                                                ' o.descripcion, ' +
                                                ' o.condicion, ' +
                                                ' o.resultado, ' +
                                                ' o.ultimaActualizacion, ' +
                                                ' o.estado ' +
                                                ' FROM OtrosLog o ' + 
                                                ' WHERE o.estado = 1 ' + 
                                                ' AND o.idOtrosLog = ? ',
                                                [id]);

        res.json(logs[0]); 
    }

    public async update (req: Request, res: Response){

        const { id } = req.params;

        await pool.promise().query(' UPDATE OtrosLog ' + 
                                   ' SET ? ' +
                                   ' WHERE idOtrosLog = ? ',
                                   [req.body, id]);

        res.json({message : "Actualizado con exito"}); 
    }

    public async delete (req: Request, res: Response){

        const { id } = req.params;

        await pool.promise().query(' UPDATE OtrosLog ' + 
                                   ' SET estado = 0 ' +
                                   ' WHERE idOtrosLog = ? ',
                                   [id]);

        res.json({message : "Borrado con exito"}); 
    }
}

export const otrosLogController = new OtrosLogController();