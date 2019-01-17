// Each property is assigned a value from 1 to 3,
// which correspond to the array

// Check that I divided the colors correctly (testing)
// array.filter(x => x.color === "red").length
// array.filter(x => x.color === "purple").length
// array.filter(x => x.color === "green").length

// currently .forEach() not chainable

// You know what - it probablly has something to do with the .fill() property - the array assumes each element must be identical

// color = [red, purple, green]
// shape = [oval, diamond, squiggle]
// shade = [empty, dashed, solid]
// number = [1, 2, 3]

let array = []
for (let i = 0; i < 81; i ++) {
  array.push({
    index: null,
    color: null,
    shape: null,
    shade: null,
    number: null
  })
}

// Helper function


const colorsArray = ["red", "purple", "green"]
const shapesArray = ["oval", "diamond", "squiggle"]
const shadesArray = ["empty", "dashed", "solid"]
const numbersArray = [1,2,3]
// Populating color
for (let i = 0; i < 81; i ++) {
  if (i >= 0 & i < 27) {
    array[i].color = "red"
  } else if (i >= 27 & i < 54) {
    array[i].color = "purple"
  } else {
    array[i].color = "green"
  }
}

// Populating shapes
for (let i = 0; i < colorsArray.length; i++) {
  array.filter(x => x.color === colorsArray[i]).forEach((x, idx) => {
    if (idx >= 0 && idx < 9) {
      x.shape = "oval"
    } else if (idx >= 9 && idx < 18) {
      x.shape = "diamond"
    } else {
      x.shape = "squiggle"
    }
  })
}

// Populating shades
for (let i = 0; i < colorsArray.length; i++) {
  for (let j = 0; j < shapesArray.length; j++) {
    array.filter(x => x.color === colorsArray[i] && x.shape === shapesArray[j]).forEach((x, idx) => {
      if (idx >= 0 && idx < 3) {
        x.shade = "empty"
      } else if (idx >= 3 && idx < 6) {
        x.shade = "dashed"
      } else {
        x.shade = "solid"
      }
    })
  }
}

// Populating numbers
for (let i = 0; i < colorsArray.length; i++) {
  for (let j = 0; j < shapesArray.length; j++) {
    for (let k = 0; k < shadesArray.length; k++) {
      array.filter(x => x.color === colorsArray[i] && x.shape === shapesArray[j] && x.shade === shadesArray[k]).forEach((x, idx) => {
        if (idx === 0) {
          x.number = 1
        } else if (idx === 1) {
          x.number = 2
        } else {
          x.number = 3
        }
      })
    }
  }
}

// Finally...populating indexes
for (let i = 0; i < 81; i++) {
  array[i].index = Math.random()
}

// We do some manual tests to check if we actually correctly generated

// Let's pick 5 possible card combinations to test
// We can actually choose an arbitrary number

let checkSet = (numberToTest) => {
  let testCombo = []
  let results = []
  let chooseRandomNumber = () => {
    return Math.floor(Math.random()*3)
  }

  for (let i = 0; i < numberToTest; i++) {
    testCombo.push({
      color: colorsArray[chooseRandomNumber()],
      shape: shapesArray[chooseRandomNumber()],
      shade: shadesArray[chooseRandomNumber()],
      number: numbersArray[chooseRandomNumber()]
    })
  }

  for (let i = 0; i < numberToTest; i++) {
    results.push(array.filter(x => x.color === testCombo[i].color && x.shape === testCombo[i].shape && x.shade === testCombo[i].shade && x.number === testCombo[i].number).length)
  }

  if (results.reduce((prev, curr) => prev + curr) === numberToTest) {
    console.log('Success! :)')
  } else {
    console.log('Oh no! :(')
  }
}

// Sort the array but index
let sortSet = (a,b) => {
  if (a.index < b.index) return -1
  if (a.index > b.index) return 1
  return 0
}
array = array.sort(sortSet)

// Done in creating the array! Phew!!!!

export default array
