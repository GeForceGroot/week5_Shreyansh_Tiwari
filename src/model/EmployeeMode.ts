import { DataTypes, Model } from 'sequelize'
import sequelize from '../pgConfig/db';
import { Shift } from '../model/ShiftMode'
import { Claims } from '../model/ClaimsModel'
import { Timesheet } from '../model/TimesheetMode'
import { v4 as uuidv4 } from 'uuid';

interface EmployeeAttributes {
    id: string,
    name: string,
    email: string,
    password: string,
    assignedShiftHours: number,
    role: string,
}


class Employee extends Model<EmployeeAttributes> implements EmployeeAttributes {
    public id !: string
    public name !: string
    public email !: string
    public password !: string
    public assignedShiftHours !: number
    public role !: string
}


Employee.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: uuidv4()
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    assignedShiftHours: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
    {
        sequelize,
        tableName: 'Employees',
    }
)

// Assoication

Employee.hasMany(Shift, {
    foreignKey: 'employeeId'
})
Employee.hasMany(Timesheet, {
    foreignKey: 'employeeId'
})
Shift.hasMany(Timesheet, {
    foreignKey: 'shiftId'
})
Shift.belongsTo(Employee);
Timesheet.belongsTo(Employee)
Timesheet.belongsTo(Shift)

export {
    Employee
}



