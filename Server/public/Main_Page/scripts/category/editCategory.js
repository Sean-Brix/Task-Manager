
async function editCategory(id){
    
    const component = document.getElementById(id);
    const title = component.querySelector('h1');

    title.setAttribute('contenteditable', 'true');
    title.focus();

    // Select all text inside the element
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(title);
    selection.removeAllRanges();
    selection.addRange(range);

    // Enter Key
    title.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            title.blur();
            selection.removeAllRanges();
        }
    });

    // Saving
    title.onblur = async function(){
        title.setAttribute('contenteditable', 'false');

        // Put Request for update
        const response = await fetch(`/main/category/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                title: title.innerText
            })
        })

        const data = await response.json();
        console.log(data.message);
    }

} 