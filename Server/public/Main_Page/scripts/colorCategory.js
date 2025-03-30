
async function chooseColor(id){
    const div = document.getElementById(id);

    const color_picker = div.querySelector('input[type="color"]');
    const span = div.querySelector('span');

    console.log('running');
    color_picker.click();

    color_picker.addEventListener('input', ()=>{
        span.style.backgroundColor = color_picker.value;
    });

    color_picker.onblur = async function (){

        const response = await fetch(`/main/category/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                color: color_picker.value
            })

        })
    }
}