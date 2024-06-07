import {Router, Request, Response} from 'express'
import {timeSheetGenerate} from '../controller/timeSheetController'
const fillTimeSheet = Router();

fillTimeSheet.post('/',async (req: Request, res: Response)=>{
    try{
        const timesheet: any = await timeSheetGenerate(req, res);
        res.send(timesheet)
    }catch(error){
        console.log('Error in create timesheet' + error)
    }
})


export {fillTimeSheet}