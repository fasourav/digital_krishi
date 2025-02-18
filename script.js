function validatePhoneNumber() {
    let phoneInput = document.getElementById("phone");
    let phoneNumber = phoneInput.value;
    
    if (phoneNumber.length !== 10) {
        alert("Phone number must be exactly 10 digits.");
        return false;
    }
    return true;
}
function validateForm() {
    let phoneInput = document.getElementById("phone").value;
    let postCode = document.getElementById("post-code").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let termsCheckbox = document.getElementById("terms");

    if (phoneInput.length !== 10) {
        alert("Invalid Phone Number.");
        return false;
    }

    if (postCode.length !== 4) {
        alert("Invalid Post Code.");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    if (!termsCheckbox.checked) {
        alert("You must agree to the Terms & Conditions.");
        return false;
    }
    return true;
}
