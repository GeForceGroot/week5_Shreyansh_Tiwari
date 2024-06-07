import { DataTypes, Model } from 'sequelize'
import sequelize from '../pgConfig/db';
import { v4 as uuidv4 } from 'uuid';

interface ClaimssheetAttributes {
    id: string,
    canReceiveReport: boolean,
    canAssignTasks: boolean,
    EmployeeId: string,
}


class Claims extends Model<ClaimssheetAttributes> implements ClaimssheetAttributes {
    public id !: string
    public canReceiveReport !: boolean
    public canAssignTasks !: boolean
    public EmployeeId !: string
}


Claims.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: uuidv4()
    },
    canReceiveReport: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    canAssignTasks: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        unique: true
    },
    EmployeeId: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
    {
        sequelize,
        tableName: 'Claims',
    }
)


export {
    Claims
}