const usrinput = document.getElementById("pwinput");
const submitButton = document.getElementById("submit");

const password = "Password";
const pw = "WM2019wedding";

submitButton.addEventListener("click", () => {
    let pwattempt = usrinput.value;

    if (pwattempt != pw) {
        alert("Incorrect Password")
    } else {
        sessionStorage.setItem(password, pwattempt);
        window.location.replace("home.html");
    }
})

