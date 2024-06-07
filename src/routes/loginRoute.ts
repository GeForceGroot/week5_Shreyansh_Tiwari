import {Router, Request, Response} from 'express'
import {loginEmployee} from '../controller/loginEmployeeController'
const loginRoute = Router();

loginRoute.post('/',async (req: Request, res: Response)=>{
    try{
        const employeeData: any = await loginEmployee(req, res);
        res.send(employeeData)
    }catch(error){
        console.log('Error in log-in employee account' + error)
    }
})


export {loginRoute}