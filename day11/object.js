const person = {
    name: {
        firstName: "Gildong",
        lastName: "Hong",
    },
    like: ["apple", "samsung"],
    printHello: function () {
        return "Hello"
    }
}
console.log(person["name"]["firstName"])
console.log(person["like"][1])
console.log(person.like[1])
console.log(person.printHello())



