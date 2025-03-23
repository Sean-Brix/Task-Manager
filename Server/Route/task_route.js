import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

//* Configuration
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//* ___________ ROUTE ___________

const task = express.Router();


task.route('/')
    // render page
    .get((req, res)=>{
        res.render('Main/main_page');
    })

    // Authenticate
    .post((req, res)=>{

    })


export default task;