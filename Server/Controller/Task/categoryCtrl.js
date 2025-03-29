import accountModel from '../../Model/Account_Model/Account_index.js'
import categoryModel from '../../Model/Category_Model/Category_Index.js'

export async function saveCategory(req, res, next){

    try{
        // Creates a new category (return ID)
        const cat_id = await categoryModel.newCategory();
        if(!cat_id){
            return res.status(500).json({
                message: 'Server Error - Failed to create a new category'
            });
        }

        // Takes the sessions user
        const user = await accountModel.findOne({_id: req.session.accountID});
        if(!user){
            return res.status(500).json({
                message: 'Server Error - User not found'
            });
        }

        // Adds the category to the session user
        const added = await user.addCategory(cat_id);
        if(!added){
            return res.status(500).json({
                message: 'Server Error - failed to add category'
            });
        }

        req.newCategory = await categoryModel.findOne({_id: cat_id})
        next()
    }
    catch(e){
        console.log('ERROR: saveCategory function in categoryCtrl module \n\n' + e);

        return res.status(500).json({
            message: 'Something went wrong',
            error: e
        });
    }

}
