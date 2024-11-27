const sampleData =
  "Lorem sri@yopmail.com ipsum dolor sit amet, Venky@yopmail.com consectetur adipisicing elit. Tempore soluta SRI@yopmail.com recusandae similique, jaya@yopmail.com esse illo adipisci.";
let sortedList = [];
const sampleArray = sampleData.split(" ");
const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
for (let word of sampleArray) {
  if (emailPattern.test(word)) {
    const email = word.toLowerCase();
    if (!sortedList.includes(email)) {
      sortedList.push(email);
    }
  }
}
console.log("--sortedList-- : ", sortedList);
