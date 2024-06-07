"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateShiftData = void 0;
const ShiftMode_1 = require("../model/ShiftMode");
const uuid_1 = require("uuid");
function generateShiftData(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const sT = `${data.startT.hour}:${data.startT.min}`;
            const eT = `${data.endT.hour}:${data.endT.min}`;
            const acutalH = `${Math.abs(Math.abs(data.endT.hour - data.startT.hour))}:${Math.abs(60 - data.startT.min) + data.endT.min}`;
            const timeSheetData = yield ShiftMode_1.Shift.create({
                id: (0, uuid_1.v4)(),
                employeeId: data.empId,
                startTime: sT,
                endTime: eT,
                actualHours: acutalH,
            });
            return timeSheetData;
        }
        catch (error) {
            console.log('Error in generate shift data', error);
            throw new Error('Logout failed');
        }
    });
}
exports.generateShiftData = generateShiftData;
//# sourceMappingURL=shiftDataServices.js.map