export function addStatics(schema){

    // Returns True or False
    schema.statics.userExist = async function(username_inp){
        return !!(await this.exists({username: username_inp}));
    }

    schema.statics.byName = async function(name){

        const userID = await this.exists({username: name});
        return this.find({_id: userID});
        
    }

    schema.statics.byID = async function(id){
        return this.find({_id: id})
    }

}
