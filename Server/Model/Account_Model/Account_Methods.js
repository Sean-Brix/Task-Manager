export function addMethods(schema){

    schema.methods.userType = function(){
        return this.user_type
    }

    schema.methods.addCategory = async function(category){
        return await this.tasks.push(category);
    }

}