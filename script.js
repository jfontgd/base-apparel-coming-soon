const form = document.querySelector(".form1");
const feedback = document.querySelector(".feedback");
const errorMEssage = document.querySelector(".error");
const input = document.querySelector(".form1 input")

form.addEventListener("submit",e =>{
    e.preventDefault();
    const userEmail = form.email.value;
    const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!pattern.test(userEmail)){
        feedback.textContent= "Please provide a valid email";
        errorMEssage.style.visibility = "visible";
        form.classList.add("red-border");
    } else {
        feedback.textContent= "";
        errorMEssage.style.visibility = "hidden";
        form.classList.remove("red-border");
        form.reset();
    }
});
