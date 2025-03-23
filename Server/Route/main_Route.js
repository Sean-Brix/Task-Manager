import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

//* Configuration
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//* ___________ ROUTE ___________

const route = express.Router();

// Authentication/Session
import login from './login_route.js'
route.use('/login', login)

// Main Page
import task from './task_route.js'
route.use('/main', task);

export default route