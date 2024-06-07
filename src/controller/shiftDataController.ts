import {Request, Response} from 'express'
import {generateShiftData} from  '../services/shiftDataServices'


export const shiftDataGenerate = async (req: Request, res: Response)=>{
    const shfitData = await generateShiftData(req.body);
    res.send(shfitData)
}