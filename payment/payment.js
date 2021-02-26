lowercase = {
    a: "a", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g", h: "h", i: "i", j: "j", k: "k", l: "l", m: "m", n: "n", o: "o", p: "p", q: "q", r: "r", s: "s", t: "t", u: "u", v: "v", w: "w", x: "x", y: "y", z: "z", 
};
uppercase = {
    A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H", I: "I", J: "J", K: "K", L: "L", M: "M", N: "N", O: "O", P: "P", Q: "Q", R: "R", S: "S", T: "T", U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Z",
};
letters = {
    ...lowercase, ...uppercase,
};
numbers = {
    0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9",
};

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
            if (!(character === " " || letters[character] !== undefined)) {
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
            if (uppercase[character] !== undefined) {
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
            if (numbers[character] !== undefined) {
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
            if (numbers[character] === undefined) {
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
            alert("Exp must match with mm/yy format. fd");
            return false;
        } else {
            let c1 = numbers[this.exp[0]] !== undefined;
            let c2 = numbers[this.exp[1]] !== undefined;
            let c3 = this.exp[2] === "/";
            let c4 = numbers[this.exp[3]] !== undefined;
            let c5 = numbers[this.exp[4]] !== undefined;

            if (!(c1 && c2 && c3 && c4 && c5)) {
                alert("Exp must match with mm/yy format. as");
                return false;
            }
        }

        return true;
    }
}
function submits(event) {
    event.preventDefault();
    let form = new Form();
    if (form.validate()) {
        alert("Success");
    }
}