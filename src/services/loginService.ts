import { Employee } from '../model/EmployeeMode'
import credentials from '../common/credentails';
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';
export async function employeeLogin(data: any) {
    try {
        const employee = await Employee.findOne({
            where: {
                email: data.email
            }
        });

        if (!employee) {
            return 'Employee Not Found';
        }

        const isPasswordMatch = await bcrypt.compare(data.password, employee.password);
        if (isPasswordMatch) {
            const date = new Date();
            const hour = date.getHours();
            const min = date.getMinutes();
            const token = jwt.sign({ email: employee.email }, credentials.jwt.SECRET_KEY);
            return {
                "token": token,
                "startTime": {
                    "Hour": hour,
                    "Min": min,
                }
            };
        } else {
            return 'Password does not match';
        }
    } catch (error) {
        console.log('Error during log-in employee account', error);
        throw new Error('Login failed');
    }
}
