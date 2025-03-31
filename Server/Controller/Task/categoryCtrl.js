import accountModel from '../../Model/Account_Model/Account_index.js'
import categoryModel from '../../Model/Category_Model/Category_Index.js'

// CREATING NEW CATEGORY
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

// UPDATING EXISTING CATEGORY
export async function updateCategory(req, res, next){
    try{
        const category_id = req.params.id;
        const data = req.body;

        const updated = await categoryModel.updateCategory(category_id, data);

        if(!updated){
            throw new Error('Failure in updating the document.');
        }

        return res.status(200).json({
            message: 'Category Successfully Updated'
        })
    }
    catch(e){
        console.log('ERROR: updateCategory function in categoryCtrl module \n\n' + e);
        res.status(500).json({
            message: 'Something went wrong, Restart?',
            error: e
        })
    }
}

export async function getCategory(req, res, next){
    const { id, query } = req.query;
    const data = await categoryModel.findOne({_id: id}).select(`${query} -_id`);

    res.status(200).json(data);
}