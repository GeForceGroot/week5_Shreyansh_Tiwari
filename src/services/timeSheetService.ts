import { Employee } from '../model/EmployeeMode'
import { Timesheet } from '../model/TimesheetMode';
import { Shift } from '../model/ShiftMode';
import credentials from '../common/credentails';
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken'
import { CreatedAt } from 'sequelize-typescript';
export async function timeSheet(data: any) {
    try {
        const isUserLoggedIn = await jwt.verify(data.token, credentials.jwt.SECRET_KEY);
        if (isUserLoggedIn) {
            const timeSheetData = await Timesheet.create({
                id: uuidv4(),
                employeeId: data.empId,
                shiftId: data.shiftId,
                projectName: data.projectName,
                taskName: data.taskName,
                fromDate: data.fromDate,
                toDate: data.toDate
            })
            return timeSheetData;
        }else{
            return "User not logged in"
        }
    } catch (error) {
        console.log('Error in create timesheet', error);
        throw new Error('Logout failed');
    }
}