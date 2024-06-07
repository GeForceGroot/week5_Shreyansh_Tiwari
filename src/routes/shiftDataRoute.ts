import {Router, Request, Response} from 'express'
import {shiftDataGenerate} from '../controller/shiftDataController'
const shiftDataRoute = Router();

shiftDataRoute.post('/',async (req: Request, res: Response)=>{
    try{
        const shfitData: any = await shiftDataGenerate(req, res);
        res.send(shfitData)
    }catch(error){
        console.log('Error in generate shift data' + error)
    }
})


export {shiftDataRoute}