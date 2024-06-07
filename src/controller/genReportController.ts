import {Request, Response} from 'express'
import {generateReportData} from  '../services/genReportService'


export const newReport = async (req: Request, res: Response)=>{
    const shfitData = await generateReportData(req, res);
    res.send(shfitData)
}