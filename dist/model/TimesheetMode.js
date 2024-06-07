"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timesheet = void 0;
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../pgConfig/db"));
const uuid_1 = require("uuid");
class Timesheet extends sequelize_1.Model {
}
exports.Timesheet = Timesheet;
Timesheet.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        defaultValue: (0, uuid_1.v4)()
    },
    employeeId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    shiftId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    projectName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    taskName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    fromDate: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    toDate: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: db_1.default,
    tableName: 'Timesheets',
});
//# sourceMappingURL=TimesheetMode.js.map