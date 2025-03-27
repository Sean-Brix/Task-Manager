
export async function addStatics(schema){

    schema.statics.count = async function(){
        return await this.countDocuments()
    }

}