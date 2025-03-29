import accountModel from '../../Model/Account_Model/Account_index.js'
import categoryModel from '../../Model/Category_Model/Category_Index.js'

export async function saveCategory(req, res, next){

    // TODO: Register a new category to the database and assign it to the user account saved in the session

    const cat_id = await categoryModel.newCategory();
    console.log(req.session.accountID);
    console.log(cat_id);
    console.log(await categoryModel.find());
}0