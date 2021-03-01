function submits(event) {
    event.preventDefault();
    let form = new Form();
    if (form.validate()) {
        alert("Success");
    }
}