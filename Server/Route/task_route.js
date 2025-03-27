import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { renderCategory } from '../Controller/Rendering/category_rendr.js' 

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
        if(!req.session.authenticated){
            return res.redirect('/login')
        }

        // ! REMEMBER TO MOVE THIS TO THE renderCategory function inside the category_rendr module
        res.render('Main/main_page', {card: [{title:'School Works'}, {title:'Programming'}, {title:'Commissions'}, {title:'House Chores'}]});
        
    }, renderCategory)

    // Authenticate
    .post((req, res)=>{})


export default task;