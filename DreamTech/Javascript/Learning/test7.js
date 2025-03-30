const sampleString =
  "Lo@rem sri@yopmail.com ipsum www.google.com dolor sit amet, Venky@yopmail.com consectetur 9034567644 adipisicing https://youtube.com elit. Tempore 8876543211 HTTP://BRAMMATECH.com soluta SRI@yopmail.com recusandae similique, jaya@yopmail.com esse 9656533655 illo adipisci.";
let emailList = [];
let phoneList = [];
let websiteList = [];
const stringData = sampleString.split(" ");
const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phonePattern = /^\d{10}$/;
const webPattern =
  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

for (let word of stringData) {
  if (emailPattern.test(word)) {
    const email = word.toLowerCase();
    if (!emailList.includes(email)) {
      emailList.push(email);
    }
  } else if (phonePattern.test(word)) {
    if (!phoneList.includes(word)) {
      phoneList.push(word);
    }
  } else if (webPattern.test(word)) {
    const website = word.toLowerCase();
    if (!websiteList.includes(website)) {
      websiteList.push(website);
    }
  }
}

console.log("---emailList---", emailList);
console.log("---phoneList---", phoneList);
console.log("---websiteList---", websiteList);
