
let selected;

async function selectCategory(id, color){
    const prev = document.getElementById(selected) || document.getElementById(id);
    prev.className = 'cat_list';
    prev.removeAttribute('style');


    selected = id;

    const current = document.getElementById(id);
    current.className = 'selected_category';
    current.setAttribute('style', `-webkit-text-stroke: 0.5px black;`);
    current.style.border = `2px solid ${color}`;
    
}