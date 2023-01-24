// Write the following code A huge phone book containing pairs of the form {phone number, person's name} was stored as a vector sorted by name in alphabetical order. Write a program that finds the phone number of a given person in this list, bearing in mind that the list is very large and that users need the search results to be as fast as possible

var phoneBook = [
    {name: "Ryan Martens", number: 123123123},
    {name: "Lena Fournier", number: 456456456},
    {name: "Sebastian Rams", number: 789789789},
    {name: "Crystal Black", number: 101101101},
    {name: "Elodie Janssens", number: 112112112},
    {name: "Diane Parker", number: 131131131},
];

function findNumber(name) {
  console.log(phoneBook.length)
    for (var i = 0; i < phoneBook.length; i++) {
        console.log(phoneBook[i])
        if (phoneBook[i].name === name) {
            return phoneBook[i].number;
        }else if(i === phoneBook.length - 1){
          return "Not found";
        }
    }
}

console.log(findNumber("Sebastian Rams"));

