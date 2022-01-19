function my_Dictionary() {
    var Car = {
        Make: "Audi",
        Model: "RS Q8",
        Year: 2022,
        Color: "Black",
    };
    delete Car.Model;
    document.getElementById("Dictionary").innerHTML = Car.Model;
}