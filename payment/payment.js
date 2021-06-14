function submits(event) {
    event.preventDefault();
    let form = new Form();
    console.log(form);
    if (form.validate()) {
        alert("Success");
    }
}