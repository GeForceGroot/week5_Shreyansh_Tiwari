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
exports.timeSheetGenerate = void 0;
const timeSheetService_1 = require("../services/timeSheetService");
const timeSheetGenerate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const timesheet = yield (0, timeSheetService_1.timeSheet)(req.body);
    res.send(timeSheetService_1.timeSheet);
});
exports.timeSheetGenerate = timeSheetGenerate;
//# sourceMappingURL=timeSheetController.js.map