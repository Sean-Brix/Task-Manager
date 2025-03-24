import accountModel from '../../Model/Account_Model/schema/AccountModel.js'
import bcrypt from 'bcrypt'
import { destroySession } from './sessionController.js';

const saltRounds = process.env.SALT_ROUNDS || 10;

export async function user_exist(req, res, next){

    try{
        const user = req.body.username;
        const password = req.body.password;

        const check_user = await accountModel.exists({username: user});

        if(!check_user){
            return res.status(409).json({
                message: "User is not yet registered"
            });
        }

        const user_data = await accountModel.find({_id: check_user});
        req.account = user_data[0];
        next();
    }
    catch(e){
        console.log("User_Exist Middleware: " + e.message);
    }

}

export async function verify_password(req, res, next){

    //! DON'T FORGET!!!! -  Encrypt the password after adding the registration controller

    if(req.body.password !== req.account.password){
        console.log("Password Don't match");
        return res.status(401).json({
            message: "Incorrect Password"
        })
    }
    next();
}