import accountModel from '../../Model/Account_Model/Account_index.js'

export async function renderCategory(req, res, next){

    // Retrieve all the category of the session user
    const user = await accountModel.findById({_id: req.session.accountID});
    const data = await user.populate('tasks');
    
    // TODO: Start sending data the will be rendered initially



    res.render('Main/main_page', 
        {
            category: data.tasks, 
            account: {username: user.username},
            initial: data.tasks[0]
        });

    console.log(data.tasks);
}