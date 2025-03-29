import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { renderCategory } from '../Controller/Rendering/category_rendr.js' 
import { saveCategory, updateCategory } from '../Controller/Task/categoryCtrl.js';

//* Configuration
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//* ___________ ROUTE ___________

const task = express.Router();


task.route('/')
    // render page
    .get((req, res, next)=>{

        // TODO: You can add this to its own middleware so we can use a single authentication for every page and actions
        if(!req.session.accountID){
            return res.redirect('/login')
        }
        next()
    }, renderCategory)

    // Authenticate
    .post((req, res)=>{})



task.route('/category')
    // Return List of Category
    .get((req, res)=>{

    })

    // Register new Category
    .post(saveCategory, (req, res)=>{
        const data = req.newCategory;
        console.log(data);
        res.status(200).json({
            category:{
                title: data.title,
                color: data.color,
                id: data._id
            },
            message: "Category successfully added"
        })
    })

    
// Updating Category
task.put('/category/:id', updateCategory)

export default task;