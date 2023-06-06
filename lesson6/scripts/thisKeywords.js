function personDetails() {
    let person = {
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        birthYear: document.getElementById("year").value,
        age: function () {
            return 2023 - parseInt(this.birthYear);
        }
    }
    let result = document.getElementById("result");
    result.innerHTML = `Mr/Ms ${person.name} ${person.surname} thank you for your application. Your age is ${person.age()}`
    result.style.color = "red";

}