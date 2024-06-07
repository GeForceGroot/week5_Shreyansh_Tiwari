import express, {Request, Response} from 'express'
import {createEmployeeRoute} from './routes/createEmployeeRoute'
import {loginRoute} from './routes/loginRoute'
import { authenticationRoute } from './routes/authenticationRoutes';
import { logoutRoute } from './routes/logoutRoutes';
import { shiftDataRoute } from './routes/shiftDataRoute';
import { fillTimeSheet } from './routes/timeSheetRoutes';
import { generateReportRoute } from './routes/generateReportRoute';
import cookieParser from 'cookie-parser'
const app = express();

const port : number = 5080;

app.use(cookieParser());
app.use(express.json())

// Middelware to create an employee account
app.use('/createEmployee', createEmployeeRoute)

// Middleware to login an employee
app.use('/login', loginRoute)

// Middleware to authenticate an employee login password

app.use('/authenticateEmployee', authenticationRoute)

// Middleware to logout an employee

app.use('/logout', logoutRoute)

// Middleware to Generate shift an employee
 
app.use('/generateShift', shiftDataRoute)

// Middleware to Fill Time Sheet by employee

app.use('/fillTimeSheet', fillTimeSheet)

// // Middleware to generate report of employee

app.use('/generateReport', generateReportRoute)


app.listen(port, ()=>[
    console.log('server is running on http://localhost:5080')
])