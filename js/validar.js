document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form.needs-validation");

    form.addEventListener("submit", function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            if (!validateRut() || !validateEmail() || !validatePassword()) {
                event.preventDefault();
                event.stopPropagation();
            }
        }

        form.classList.add("was-validated");
    });

    function validateRut() {
        const rut = document.getElementById("rut").value;
        const rutRegex = /^[0-9]+-[0-9Kk]$/;
        const isValidFormat = rutRegex.test(rut);
        const [number, verifier] = rut.split('-');

        if (!isValidFormat) {
            document.getElementById("rut").classList.remove("is-valid");
            document.getElementById("rut").classList.add("is-invalid");
            return false;
        }

        const isValidRut = verifyRut(number, verifier);

        if (!isValidRut) {
            document.getElementById("rut").classList.remove("is-valid");
            document.getElementById("rut").classList.add("is-invalid");
            return false;
        } else {
            document.getElementById("rut").classList.remove("is-invalid");
            document.getElementById("rut").classList.add("is-valid");
            return true;
        }
    }

    function verifyRut(number, verifier) {
        let sum = 0;
        let mul = 2;

        for (let i = number.length - 1; i >= 0; i--) {
            sum += number[i] * mul;
            mul = mul === 7 ? 2 : mul + 1;
        }

        const mod = sum % 11;
        const computedVerifier = mod === 0 ? '0' : mod === 1 ? 'K' : (11 - mod).toString();

        return verifier.toUpperCase() === computedVerifier;
    }

    function validateEmail() {
        const email = document.getElementById("correo").value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(email);

        if (!isValid) {
            document.getElementById("correo").classList.remove("is-valid");
            document.getElementById("correo").classList.add("is-invalid");
            return false;
        } else {
            document.getElementById("correo").classList.remove("is-invalid");
            document.getElementById("correo").classList.add("is-valid");
            return true;
        }
    }

    function validatePassword() {
        const password = document.getElementById("password").value;
        const password2 = document.getElementById("password2").value;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
        const isValidPassword = passwordRegex.test(password);
        const passwordsMatch = password === password2;

        if (!isValidPassword) {
            document.getElementById("password").classList.remove("is-valid");
            document.getElementById("password").classList.add("is-invalid");
            return false;
        } else {
            document.getElementById("password").classList.remove("is-invalid");
            document.getElementById("password").classList.add("is-valid");
        }

        if (!passwordsMatch) {
            document.getElementById("password2").classList.remove("is-valid");
            document.getElementById("password2").classList.add("is-invalid");
            return false;
        } else {
            document.getElementById("password2").classList.remove("is-invalid");
            document.getElementById("password2").classList.add("is-valid");
        }

        return true;
    }

    document.getElementById("rut").addEventListener("input", function() {
        if (this.value.includes("-")) validateRut();
    });

    document.getElementById("correo").addEventListener("input", function() {
        if (this.value.includes("@") && this.value.includes(".")) validateEmail();
    });

    document.getElementById("password").addEventListener("input", function() {
        if (this.value.length >= 8) validatePassword();
    });

    document.getElementById("password2").addEventListener("input", function() {
        if (this.value.length >= 8) validatePassword();
    });
});
