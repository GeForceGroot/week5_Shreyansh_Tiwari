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
exports.shiftDataRoute = void 0;
const express_1 = require("express");
const shiftDataController_1 = require("../controller/shiftDataController");
const shiftDataRoute = (0, express_1.Router)();
exports.shiftDataRoute = shiftDataRoute;
shiftDataRoute.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shfitData = yield (0, shiftDataController_1.shiftDataGenerate)(req, res);
        res.send(shfitData);
    }
    catch (error) {
        console.log('Error in generate shift data' + error);
    }
}));
//# sourceMappingURL=shiftDataRoute.js.map