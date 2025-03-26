import mongoose from "mongoose";
import schema from "./Account_Schema.js";
import { addStatics } from './Account_Statics.js'
import { addMethods } from './Account_Methods.js'

// Attach methods and statics
addStatics(schema);
addMethods(schema);

export default mongoose.model("Accounts", schema, "Accounts");
