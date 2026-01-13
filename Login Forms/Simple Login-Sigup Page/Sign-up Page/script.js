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

function confirmPassword(element) {
    const CpasswordInput = document.getElementById("Confirm-password");
    
    if (CpasswordInput.type === "password") {
        CpasswordInput.type = "text";
        element.innerText = "Hide";
    } else {
        CpasswordInput.type = "password";
        element.innerText = "Show";
    }
}


