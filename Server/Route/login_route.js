import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

//* Configuration
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//* ___________ ROUTE ___________

const login = express.Router();


//* CONTROLLER


login.route('/')
    // render page
    .get((req, res)=>{
        res.render('Entry/login_page');
    })

    // Authenticate
    .post((req, res)=>{

    })


login.route('/register')
    // render page
    .get((req, res)=>{
        res.render('Entry/register_page');
    })

    // Register Account
    .post((req, res)=>{

    })

export default login;