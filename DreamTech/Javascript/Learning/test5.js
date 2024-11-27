const userName = "cristiano ronaldo";
console.log("----userName----", userName);
const splittedName = userName.split(" ");
let sortName = "";
console.log("----split----", splittedName);
for (let i = 0; i < splittedName.length; i++) {
  sortName +=
    splittedName[i].charAt(0).toUpperCase() +
    splittedName[i].slice(1) +
    (i < splittedName.length - 1 ? " " : "");
}
console.log("----sortName----", sortName);
