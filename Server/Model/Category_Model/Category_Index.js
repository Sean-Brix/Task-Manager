import mongoose from "mongoose"
import schema from "./Category_schema.js"

import { addMethods } from "./Category_methods.js"
import { addStatics } from "../Category_Model/Category_Statics.js"

// Attach methods and statics
addStatics(schema);
addMethods(schema);

export default mongoose.model('Categories', schema, 'Categories');