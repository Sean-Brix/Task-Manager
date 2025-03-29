import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { renderCategory } from '../Controller/Rendering/category_rendr.js' 
import { saveCategory } from '../Controller/Task/categoryCtrl.js';

//* Configuration
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//* ___________ ROUTE ___________

const task = express.Router();


task.route('/')
    // render page
    .get((req, res)=>{

        // TODO: You can add this to its own middleware so we can use a single authentication for every page and actions
        console.log(req.session);
        if(!req.session.accountID){
            return res.redirect('/login')
        }

        // ! REMEMBER TO MOVE THIS TO THE renderCategory function inside the category_rendr module
        res.render('Main/main_page', {
            card: [
                {title:'School Works', objectID: 'sample'}, 
                {title:'Programming', objectID: 'sample1'}, 
                {title:'Commissions', objectID: 'sample2'}, 
                {title:'House Chores', objectID: 'sample3'}
            ]
        });
        
    }, renderCategory)

    // Authenticate
    .post((req, res)=>{})



task.route('/category')
    // Return List of Category
    .get((req, res)=>{

    })

    // Register new Category
    .post(saveCategory, (req, res)=>{
        console.log('hello');
    })

export default task;