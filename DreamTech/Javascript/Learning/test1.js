const sampleArray = [0, 1, 2, 0, 3, 4, 0, 5, 6, 0];
const outputArray = [];
const zeros = [];

for (let index = 0; index < sampleArray.length; index++) {
  if (sampleArray[index] === 0) {
    zeros.push(sampleArray[index]);
  } else {
    outputArray.push(sampleArray[index]);
  }
}

const finalArray = outputArray.concat(zeros);
console.log(finalArray);
