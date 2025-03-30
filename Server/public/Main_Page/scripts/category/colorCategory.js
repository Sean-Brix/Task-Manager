
async function chooseColor(id){
    const div = document.getElementById(id);

    const color_picker = div.querySelector('input[type="color"]');
    const span = div.querySelector('span');

    color_picker.addEventListener('input', ()=>{
        span.style.backgroundColor = color_picker.value;

        //! FIX: When changing the color, the category cant be click again
        div.removeAttribute('onclick');
        div.addEventListener('click', selectCategory(id, color_picker.value))
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

            // TODO: Handle the response
        })
    }
}