import { DataTypes, Model } from 'sequelize'
import sequelize from '../pgConfig/db';
import { v4 as uuidv4 } from 'uuid';

interface ReportAttributes {
    id: string,
    EmployeeId: string,
    actualHours: string,
    assignedHours: string,
    date: string,
}


class Report extends Model<ReportAttributes> implements ReportAttributes {
    public id !: string
    public EmployeeId !: string
    public actualHours !: string
    public assignedHours !: string
    public date !: string
}


Report.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: uuidv4()
    },
    EmployeeId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    actualHours: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    assignedHours: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
    {
        sequelize,
        tableName: 'Reports',
    }
)


export {
    Report
}