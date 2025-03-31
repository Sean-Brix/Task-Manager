
let selected;

async function selectCategory(id){
    const prev = document.getElementById(selected) || document.getElementById(id);
    prev.className = 'cat_list';
    prev.removeAttribute('style');


    selected = id;

    const response = await fetch(`/main/category/color?id=${id}&query=color`);
    const data = await response.json();

    const current = document.getElementById(id);
    current.className = 'selected_category';
    current.style.border = `2px solid ${data.color}`;
}