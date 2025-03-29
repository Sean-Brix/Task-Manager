document.getElementById('add_button').addEventListener('click', addCategory);

async function addCategory(){
    const response = await fetch('/main/category', { method: 'POST' });

    if(response.ok){
        console.log('eme');
    }
    const data = await response.json();

    console.log(data.message);
    
}