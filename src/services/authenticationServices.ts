import { Employee } from '../model/EmployeeMode'
import credentials from '../common/credentails';
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'
export async function employeeLoginAuth(data: any) {
    try {
        const decoded = await jwt.verify(data.token, credentials.jwt.SECRET_KEY)
        return decoded
    } catch (error) {
        console.log('Error during log-in employee account', error);
        throw new Error('Login failed');
    }
}
