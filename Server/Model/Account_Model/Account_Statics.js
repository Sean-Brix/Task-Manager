import categoryModel from '../Category_Model/Category_Index.js'

export function addStatics(schema){

    // Returns True or False
    schema.statics.userExist = async function(username_inp){
        return !!(await this.exists({username: username_inp}));
    }

    // Return user document by Name
    schema.statics.byName = async function(name){

        const userID = await this.exists({username: name});
        return this.find({_id: userID});
        
    }

    // Return user document by ID
    schema.statics.byID = async function(id){
        return this.find({_id: id})
    }

    // Remove Category Reference
    schema.statics.removeCategory = async function(userID, categoryID){
        try{
            return await this.findOneAndUpdate({_id: userID}, {$pull: {tasks: categoryID}}, {new: true}).exec();
        }
        catch(e){
            return false
        }
    }

    // Add Category Reference
    schema.statics.addCategory = async function(userID, categoryID){
        try{
            return await this.findOneAndUpdate({_id: userID}, {$push: {tasks: categoryID}}, {new: true}).exec();
        }
        catch(e){
            return false
        }
    }

}
