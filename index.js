// Code your solution here
// Code your solution here
const users = ["Bobby", "salim", "Mikey", "Peter", "bobby", "Salim"];

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}



console.log(findMatching(users, "bobby"));

function fuzzyMatch(array, string) {
  let newArray = array.filter((input) => input.startsWith(string[0]));
  return newArray;
}

function matchName(array, string) {
  let newArray = array.filter((input) => input.name === string);
  return newArray;
}