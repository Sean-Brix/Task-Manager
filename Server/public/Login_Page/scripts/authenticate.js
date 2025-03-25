document.getElementById('login_button').addEventListener('click', authenticate)

async function authenticate(){
    const user_input = document.getElementById('username_entry').value;
    const pass_input = document.getElementById('password_entry').value;

    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: user_input,
            password: pass_input
        })
    })

    const data = await response.json();

    if(data.authenticate){
        window.location.href = '/main';
    }
}