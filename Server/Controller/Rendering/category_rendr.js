import accountModel from '../../Model/Account_Model/Account_index.js'

export async function renderCategory(req, res, next){

    // Retrieve all the category of the session user
    const user = await accountModel.findById({_id: req.session.accountID});
    const tasks = await user.populate('tasks');
    
    res.render('Main/main_page', { category: tasks.tasks, account: {username: user.username} });

}