const contentName = "EvenMiraclesTakeALittleTime";
let sortedName = "";
console.log("----inputName----", contentName);
for (let i = 0; i < contentName.length; i++) {
  const charValue = contentName.charCodeAt(i);
  if (charValue >= 65 && charValue <= 90) {
    if (i > 0) {
      sortedName += " ";
    }
  }
  sortedName += contentName.charAt(i);
}
console.log("----sortedName----", sortedName);
