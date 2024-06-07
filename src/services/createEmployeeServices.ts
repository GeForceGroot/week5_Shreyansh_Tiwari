import { Employee } from '../model/EmployeeMode'
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid';    

export async function createNewEmployee(data: any) {
    try {
        // Hashing password
        const newPassword = await bcrypt.hash(data.password, 10)
        const newEmployee = await Employee.create({
            id: uuidv4(),
            name: data.name,
            email: data.email,
            password: newPassword,
            assignedShiftHours: data.assignedShiftHours,
            role: data.role,
        })
        return newEmployee;
    } catch (erro) {
        console.log('Error during creating new employee account')
    }
}