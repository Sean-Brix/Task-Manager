import express from "express";
import path from "path";
import { fileURLToPath } from "url";

//* Configuration
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//* ___________ ROUTE ___________

const login = express.Router();

//* CONTROLLER
import { user_exist, verify_password } from "../Controller/Authentication/loginCtrl.js";
import { openSession, destroySession } from "../Controller/Authentication/sessionCtrl.js";
import { server_filter, register_user } from '../Controller/Authentication/signupCtrl.js';

login
    .route("/")
    // render page
    .get(destroySession, (req, res) => {
        res.render("Entry/login_page");
    })

    // Authenticate
    .post(user_exist, verify_password, openSession, (req, res, next) => {

        res.status(200).json({
            message: "User Successfully logged in",
            authenticate: true,
        });
    });

login
    .route("/register")
    // render page
    .get((req, res) => {
        res.render("Entry/register_page");
    })

    // Register Account
    .post(server_filter, register_user, (req, res) => {
        res.status(201).json({
          valid: true,
          message: 'Account Successfully Registered!'
        }) 
    });

export default login;
