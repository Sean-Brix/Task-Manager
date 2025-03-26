export function addMethods(schema){

    schema.methods.userType = function(){
        return this.user_type
    }

}