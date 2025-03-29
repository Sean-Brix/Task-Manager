import accountModel from '../../Model/Account_Model/Account_index.js'

export async function renderCategory(req, res, next){

    // Retrieve all the task of the session user
    const user = await accountModel.findById({_id: req.session.accountID}).select('tasks').populate('tasks');
    res.render('Main/main_page', { category: user.tasks });

}