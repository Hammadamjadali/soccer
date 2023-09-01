function validateForm() {
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (firstname === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return false;
    }

    if (lastname === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    document.getElementById("successMessage").classList.remove("hidden");
    return false;
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}
