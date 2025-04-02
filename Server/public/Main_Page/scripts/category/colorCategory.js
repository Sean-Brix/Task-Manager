
//! FIX: RIGHT CLICK DOESN'T UPDATE THE DATABASE
async function chooseColor(id){
    const div = document.getElementById(id);

    const color_picker = div.querySelector('input[type="color"]');

    const span = div.querySelector('span');

    color_picker.addEventListener('input', ()=>{
        span.style.backgroundColor = color_picker.value;
        div.style.border = `2px solid ${color_picker.value}`;
    });

    color_picker.onblur = async function (){

        // Put request to edit the category color
        const response = await fetch(`/main/category/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                color: color_picker.value
            })
        })

        const data = await response.json();
        console.log(data.message);
    }
}
