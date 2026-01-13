function togglePassword(element) {
    const passwordInput = document.getElementById("password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        element.innerText = "Hide";
    } else {
        passwordInput.type = "password";
        element.innerText = "Show";
    }
}
