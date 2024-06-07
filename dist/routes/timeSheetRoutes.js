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
exports.fillTimeSheet = void 0;
const express_1 = require("express");
const timeSheetController_1 = require("../controller/timeSheetController");
const fillTimeSheet = (0, express_1.Router)();
exports.fillTimeSheet = fillTimeSheet;
fillTimeSheet.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const timesheet = yield (0, timeSheetController_1.timeSheetGenerate)(req, res);
        res.send(timesheet);
    }
    catch (error) {
        console.log('Error in create timesheet' + error);
    }
}));
//# sourceMappingURL=timeSheetRoutes.js.map