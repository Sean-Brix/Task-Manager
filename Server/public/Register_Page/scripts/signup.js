
document.getElementById('register_button').addEventListener('click', ()=>{
    setTimeout(register_user, 0);
})

async function register_user(){
    try{
        const username_input = document.getElementById('username_input').value.trim();
        const password_input = document.getElementById('password_input').value.trim();
        const confirm = document.getElementById('confirm_input').value.trim();

        // FILTER
        const filter = client_filter(username_input, password_input, confirm)

        if(!filter.valid){
            return alert(filter.message);
        }

        // SIGN UP
        console.log('Registering Account');
        const response = await fetch('/login/register', {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                username: username_input,
                password: password_input
            })
        });

        const data = await response.json();
        if(!data.valid){
            alert(data.message);
            console.log(data.error);
            return;
        }
        alert(data.message);
        window.location.href = '/login'
    }
    catch(e){
        alert('Something went wrong, restart?');
        console.log('ERROR: register_user function under signup.js module, \n\n' + e);
    }

}

function client_filter(username, password, confirm) {

    // Check if fields are empty
    if (!username || !password || !confirm) {
        return { valid: false, message: "All fields are required" };
    }

    // Check username length (3-20 characters)
    if (username.length < 6 || username.length > 20) {
        return { valid: false, message: "Username must be between 3 and 20 characters" };
    }

    // Check username for spaces and special characters
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
        return { valid: false, message: "Username can only contain letters, numbers and underscore" };
    }

    // Check password length (minimum 8 characters)
    if (password.length < 8) {
        return { valid: false, message: "Password must be at least 8 characters long" };
    }

    // Check password strength
    if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/.test(password)) {
        return { valid: false, message: "Password must contain at least one uppercase letter, one lowercase letter, and one number" };
    }

    // Check if passwords match
    if (password !== confirm) {
        return { valid: false, message: "Passwords do not match" };
    }

    return { valid: true, message: "Valid input" };
}