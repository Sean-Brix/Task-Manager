
export async function addStatics(schema){

    schema.statics.count = async function(){
        return await this.countDocuments()
    }

    schema.statics.newCategory = async function(category = {}){
        const newDocument = await new this(category);
        const data = await newDocument.save();
        return data._id;
    }
}