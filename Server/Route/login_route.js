import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

//* Configuration
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//* ___________ ROUTE ___________

const login = express.Router();


//* CONTROLLER
import { user_exist, verify_password } from '../Controller/Authentication/loginController.js'
import { openSession, destroySession } from '../Controller/Authentication/sessionController.js';


login.route('/')
    // render page
    .get(destroySession, (req, res)=>{
        res.render('Entry/login_page');
    })

    // Authenticate
    .post(user_exist, verify_password, openSession, (req, res, next)=>{

        console.log("Logged in\n\n");

        res.status(200).json({
            message: "User Successfully logged in",
            authenticate: true
        });
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