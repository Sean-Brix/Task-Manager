document.getElementById('add_button').addEventListener('click', addCategory);

async function addCategory(){
    const response = await fetch('/main/category', { method: 'POST' });

    const data = await response.json();
    if(response.ok){
        if(response.status == 500){
            console.log('ERROR: ' + data.message + '\n\n' + data.error);
            alert('Something went wrong, restart?');
            return;
        }
    }
    console.log(data.message);
    const property = data.category;

    // Parent
    const container = document.getElementById('cat_content');

    // New Div
    const newCategory = document.createElement('div');
    newCategory.className = 'cat_list';
    newCategory.setAttribute('data-category-id', property.id);
    
    // New Status Color
    const newStatus = document.createElement('span');
    newStatus.className = 'cat_status';
    newStatus.setAttribute('id', property.id);
    newStatus.style.backgroundColor = property.color;
    
    // New Title
    const newTitle = document.createElement('h1');
    newTitle.className = 'cat_title';
    newTitle.textContent = property.title;
    
    newCategory.appendChild(newStatus);
    newCategory.appendChild(newTitle);
    container.appendChild(newCategory);


}