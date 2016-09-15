var person = {
    age: 18,
    name: 'John',
    city: 'San Francisco'
};
(function(aPerson) {
    console.log("name: " + aPerson.name + "; age: " + aPerson.age + "; age: " + aPerson.age);
})(person);
