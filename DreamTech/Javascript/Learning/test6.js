const sampleData =
  "Lorem sri@yopmail.com ipsum dolor sit amet, Venky@yopmail.com consectetur adipisicing elit. Tempore soluta SRI@yopmail.com recusandae similique, jaya@yopmail.com esse illo adipisci.";
let sortedList = "";
const sampleArray = [
  ...new Set(
    sampleData
      .split(" ")
      .filter((email) => email.includes("@"))
      .map((email) => email.toLowerCase())
  ),
];
sortedList = sampleArray.join(", ");
console.log("--sortedList-- : ", sortedList);
