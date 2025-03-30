import accountModel from "../../Model/Account_Model/Account_index.js";
import bcrypt from "bcrypt";

export async function user_exist(req, res, next) {
  try {
    const user = req.body.username;

    // Verify user identity (return boolean)
    const check_user = await accountModel.userExist(user);

    if (!check_user) {
      return res.status(409).json({
        message: "User is not yet registered",
        authenticate: false,
      });
    }

    // Retrieve user data (return document)
    const user_data = await accountModel.byName(user);
    req.account = user_data[0];
    next();

  } catch (e) {
    console.log("User_Exist Middleware: " + e.message);
  }
}

export async function verify_password(req, res, next) {

  // Validate encrypted password
  if (!(await bcrypt.compare(req.body.password, req.account.password))) {

    return res.status(401).json({

      message: "Incorrect Password",
      authenticate: false,

    });
  }
  next();
}
