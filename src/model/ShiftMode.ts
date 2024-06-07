import { DataTypes, Model } from 'sequelize'
import sequelize from '../pgConfig/db';
import { v4 as uuidv4 } from 'uuid';

interface ShiftAttributes {
    id: string,
    employeeId: string,
    startTime: string,
    endTime: string,
    actualHours: string,
}


class Shift extends Model<ShiftAttributes> implements ShiftAttributes {
    public id !: string
    public employeeId !: string
    public startTime !: string
    public endTime !: string
    public actualHours !: string
}


Shift.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: uuidv4()
    },
    employeeId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    startTime: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    endTime: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    actualHours: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
    {
        sequelize,
        tableName: 'Shift',
    }
)


export {
    Shift
}