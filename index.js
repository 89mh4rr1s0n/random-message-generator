const { astrologicalSigns, adviceArrays } = require('./messages.js')

// console.log(astrologicalSigns.length)

function randIndex(arr) {
  return Math.floor(Math.random() * arr.length)
}

function addProperty(obj) {
  let rIndexes = []
  while (rIndexes.length <= 3) {
    let i = randIndex(obj.traits)
    !rIndexes.includes(i) && rIndexes.push(i)
  }
  obj.message = `As an ${obj.traits[rIndexes[0]]}, ${obj.traits[rIndexes[1]]} and ${obj.traits[rIndexes[2]]} ${obj.name} here is your advice:`;
  return obj;
}

function genarateRandomMessage() {
  let advice = []
  for (let i = 0; i < adviceArrays.length; i++){
    let r = randIndex(adviceArrays[i])
    advice.push(adviceArrays[i][r])
  }
  let m = randIndex(newSigns)
  let message = `${newSigns[m].message}
  ${advice[0]}
  ${advice[1]}
  ${advice[2]}
  `
  return message
}

let newSigns = astrologicalSigns.map(addProperty);

// console.log(newSigns)
console.log(genarateRandomMessage())

// console.log(randIndex([35,64]))