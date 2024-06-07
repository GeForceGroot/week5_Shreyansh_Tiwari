"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Claims = void 0;
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../pgConfig/db"));
const uuid_1 = require("uuid");
class Claims extends sequelize_1.Model {
}
exports.Claims = Claims;
Claims.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        defaultValue: (0, uuid_1.v4)()
    },
    canReceiveReport: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    canAssignTasks: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        unique: true
    },
    EmployeeId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: db_1.default,
    tableName: 'Claims',
});
//# sourceMappingURL=ClaimsModel.js.map