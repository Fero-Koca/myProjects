const firstname = /^[a-z]{3,16}$/i;
const lastname = /^[a-z]{3,16}$/i;
const email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i;
const password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@_$%^&*-]).{6,20}$/i;
const tel = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i;
const bio = /^[a-z\.\-_]{8,50}$/i






const inputs = document.querySelectorAll('input');
inputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
        if (e.target.name == "firstname") {
            validate(e.target, firstname)
        }

        if (e.target.name == "lastname") {
            validate(e.target, lastname)
        }

        if (e.target.name == "email") {
            validate(e.target, email)
        }

        if (e.target.name == "password") {
            validate(e.target, password)
        }

        if (e.target.name == "tel") {
            validate(e.target, tel)
        }

        if (e.target.name == "bio") {
            validate(e.target, bio)
        }

    });
});

function validate(field, regex) {
    let btn = document.querySelector("button")

    if (regex.test(field.value)) {
        field.className = "valid";
        if  (field.className == "valid") {
            btn.className = "ok"
        }
    } 
    else {
        field.className = "invalid";
        if  (field.className == "invalid") {
            btn.className = "btn"
        }    }
}

