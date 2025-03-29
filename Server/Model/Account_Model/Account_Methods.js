export function addMethods(schema){

    schema.methods.userType = function(){
        return this.user_type
    }

    schema.methods.addCategory = async function(category){
        try{

            await this.tasks.push(category);
            return this.save();

        }
        catch(e){
            console.log('ERROR: addCategory method from Account_method module - \n\n'+e);
            return false
        }
    }

}