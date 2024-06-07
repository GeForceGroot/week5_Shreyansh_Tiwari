import { DataTypes, Model } from 'sequelize'
import sequelize from '../pgConfig/db';
import { v4 as uuidv4 } from 'uuid';

interface TimesheetAttributes {
    id: string,
    employeeId: string,
    shiftId: string,
    projectName: string,
    taskName: string,
    fromDate: string,
    toDate: string,
}


class Timesheet extends Model<TimesheetAttributes> implements TimesheetAttributes {
    public id !: string
    public employeeId !: string
    public shiftId !: string
    public projectName !: string
    public taskName !: string
    public fromDate !: string
    public toDate !: string
}


Timesheet.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: uuidv4()
    },
    employeeId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    shiftId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    projectName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    taskName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fromDate:  {
        type: DataTypes.STRING,
        allowNull: false,
    },
    toDate:  {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
    {
        sequelize,
        tableName: 'Timesheets',
    }
)


export {
    Timesheet
}