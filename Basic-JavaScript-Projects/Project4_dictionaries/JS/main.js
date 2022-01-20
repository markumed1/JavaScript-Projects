function my_Dictionary() {
    var Car = {
        Make: "Audi",
        Model: "RS Q8",
        Year: 2022,
        Color: "Black",
    };
    delete Car.Model; //delete object properties with 'delete keyword. 
    document.getElementById("Dictionary").innerHTML = Car.Model; //output: undefined
}