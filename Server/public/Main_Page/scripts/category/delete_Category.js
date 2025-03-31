
async function deleteCategory(event, id){
    try{
        event.stopPropagation();
        const response = await fetch(`/main/category/delete/${id}`, {method: 'DELETE'});
        
        if(!response.ok){
            throw new Error('Something went wrong')
        }
    
        document.getElementById(id).remove();

        console.log('Successfully deleted a Category.');
    }
    catch(e){console.log(e);}

}