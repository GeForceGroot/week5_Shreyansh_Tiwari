"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createEmployeeRoute_1 = require("./routes/createEmployeeRoute");
const loginRoute_1 = require("./routes/loginRoute");
const authenticationRoutes_1 = require("./routes/authenticationRoutes");
const logoutRoutes_1 = require("./routes/logoutRoutes");
const shiftDataRoute_1 = require("./routes/shiftDataRoute");
const timeSheetRoutes_1 = require("./routes/timeSheetRoutes");
const generateReportRoute_1 = require("./routes/generateReportRoute");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
const port = 5080;
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
// Middelware to create an employee account
app.use('/createEmployee', createEmployeeRoute_1.createEmployeeRoute);
// Middleware to login an employee
app.use('/login', loginRoute_1.loginRoute);
// Middleware to authenticate an employee login password
app.use('/authenticateEmployee', authenticationRoutes_1.authenticationRoute);
// Middleware to logout an employee
app.use('/logout', logoutRoutes_1.logoutRoute);
// Middleware to Generate shift an employee
app.use('/generateShift', shiftDataRoute_1.shiftDataRoute);
// Middleware to Fill Time Sheet by employee
app.use('/fillTimeSheet', timeSheetRoutes_1.fillTimeSheet);
// // Middleware to generate report of employee
app.use('/generateReport', generateReportRoute_1.generateReportRoute);
app.listen(port, () => [
    console.log('server is running on http://localhost:5080')
]);
//# sourceMappingURL=app.js.map