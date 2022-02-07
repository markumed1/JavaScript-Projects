function showDetails(animal) {
    var animalType = animal.getAttribute("data-animal-type");
    alert("The " + animal.innerHTML + " is a " + animalType + ".");
}