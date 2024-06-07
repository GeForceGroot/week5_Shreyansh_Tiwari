"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shift = void 0;
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../pgConfig/db"));
const uuid_1 = require("uuid");
class Shift extends sequelize_1.Model {
}
exports.Shift = Shift;
Shift.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        defaultValue: (0, uuid_1.v4)()
    },
    employeeId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    startTime: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    endTime: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    actualHours: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: db_1.default,
    tableName: 'Shift',
});
//# sourceMappingURL=ShiftMode.js.map