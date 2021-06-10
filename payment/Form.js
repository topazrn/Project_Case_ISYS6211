class Form {

    constructor() {
        this.getFields();
    }

    getFields() {
        let inputs = [
            ...document.querySelectorAll("form [name]:not([type=radio])"),
            document.querySelector("form [type=radio]:checked"),
        ];

        inputs.forEach(input => {
            this[input.getAttribute("name")] = input.value.trim();
        });
    }

    validate() {
        // Country
        if (this.country === "") {
            alert("Country must be chosen.");
            return false;
        }

        // Full Name
        if (this.fullname === "") {
            alert("Full Name must be filled.");
            return false;
        }
        for (let index = 0; index < this.fullname.length; index++) {
            const character = this.fullname[index];
            if (!isLetter(character)) {
                alert("Full Name must be letter only.");
                return false;
            }
        }

        // Username
        if (this.username === "") {
            alert("Username must be filled.");
            return false;
        }
        if (this.username.length > 10) {
            alert("Username must be less or equals to 10 characters.");
            return false;
        }

        // Email
        if (this.email === "") {
            alert("Email must be filled.");
            return false;
        }
        if (this.email.indexOf("@") == -1) {
            alert(`Email must contain "@".`);
            return false;
        }
        if (!this.email.endsWith(".com")) {
            alert(`Email must ends with ".com".`);
            return false;
        }

        // Password
        if (this.password === "") {
            alert("Password must be filled.");
            return false;
        }
        let hasUppercase = false;
        for (let index = 0; index < this.password.length; index++) {
            const character = this.password[index];
            if (isUpperCase(character)) {
                hasUppercase = true;
                break;
            }
        }
        if (!hasUppercase) {
            alert("Password must contain uppercase letter.");
            return false;
        }
        let hasNumber = false;
        for (let index = 0; index < this.password.length; index++) {
            const character = this.password[index];
            if (isNumber(character)) {
                hasNumber = true;
                break;
            }
        }
        if (!hasNumber) {
            alert("Password must contain a number");
            return false;
        }

        // Debit/Credit Number
        if (this.card_number === "") {
            alert("Debit/Credit Number must be filled.");
            return false;
        }
        for (let index = 0; index < this.card_number.length; index++) {
            const character = this.card_number[index];
            if (!isNumber(character)) {
                alert("Debit/Credit Number must be number only.");
                return false;
            }
        }
        if (this.card_number.length !== 16) {
            alert("Debit/Credit Number's length must be 16.");
            return false;
        }

        // Exp
        if (this.exp === "") {
            alert("Exp must be filled.");
            return false;
        }
        if (this.exp.length !== 5) {
            console.log(this.exp.length);
            alert("Exp must match with mm/yy format.");
            return false;
        } else {
            let c1 = isNumber(this.exp[0]);
            let c2 = isNumber(this.exp[1]);
            let c3 = this.exp[2] === "/";
            let c4 = isNumber(this.exp[3]);
            let c5 = isNumber(this.exp[4]);

            if (!(c1 && c2 && c3 && c4 && c5)) {
                alert("Exp must match with mm/yy format.");
                return false;
            }
        }

        return true;
    }
}