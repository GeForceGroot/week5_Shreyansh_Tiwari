"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../pgConfig/db"));
const ShiftMode_1 = require("../model/ShiftMode");
const TimesheetMode_1 = require("../model/TimesheetMode");
const uuid_1 = require("uuid");
class Employee extends sequelize_1.Model {
}
exports.Employee = Employee;
Employee.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        defaultValue: (0, uuid_1.v4)()
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    assignedShiftHours: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    role: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: db_1.default,
    tableName: 'Employees',
});
// Assoication
Employee.hasMany(ShiftMode_1.Shift, {
    foreignKey: 'employeeId'
});
Employee.hasMany(TimesheetMode_1.Timesheet, {
    foreignKey: 'employeeId'
});
ShiftMode_1.Shift.hasMany(TimesheetMode_1.Timesheet, {
    foreignKey: 'shiftId'
});
ShiftMode_1.Shift.belongsTo(Employee);
TimesheetMode_1.Timesheet.belongsTo(Employee);
TimesheetMode_1.Timesheet.belongsTo(ShiftMode_1.Shift);
//# sourceMappingURL=EmployeeMode.js.map