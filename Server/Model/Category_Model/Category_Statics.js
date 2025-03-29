
export async function addStatics(schema){

    schema.statics.count = async function(){
        return await this.countDocuments()
    }

    // Create a default category (Returns ID)
    schema.statics.newCategory = async function(category = {}){
        const newDocument = await new this(category);
        const data = await newDocument.save();
        return data._id;
    }

    // Update Existing Category
    schema.statics.updateCategory = async function(id, data){
        try{
            return await this.findOneAndUpdate({_id: id}, data, {new: true});
        }
        catch(e){
            console.log('ERROR: updateCategory function in Category_Statics module \n\n' + e );
            return false;
        }
    }
}