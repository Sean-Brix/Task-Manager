
export async function addMethods(schema){

    schema.methods.getTasks = function(){
        return this.tasks
    }

    schema.methods.addTask = async function(new_tasks){
        try{
            await this.tasks.push(new_tasks);
            await this.save();
            return true;
        }
        catch(e){
            console.log('ERROR: addTask method of Category_Schema Module, \n\n' + e);
            return false;
        }
    }

}