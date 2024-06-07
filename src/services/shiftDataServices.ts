import { Employee } from '../model/EmployeeMode'
import { Shift } from '../model/ShiftMode';
import credentials from '../common/credentails';
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken'
import { CreatedAt } from 'sequelize-typescript';
export async function generateShiftData(data: any) {
    try {
        const sT: any =  `${data.startT.hour}:${data.startT.min}`;
        const eT: any =  `${data.endT.hour}:${data.endT.min}`;
        const acutalH : any = `${Math.abs(Math.abs(data.endT.hour - data.startT.hour))}:${Math.abs(60-data.startT.min) + data.endT.min}`
        const timeSheetData = await Shift.create({
            id: uuidv4(),
            employeeId: data.empId,
            startTime: sT,
            endTime: eT,
            actualHours: acutalH,
        })
        return timeSheetData;
    } catch (error) {
        console.log('Error in generate shift data', error);
        throw new Error('Logout failed');
    }
}
