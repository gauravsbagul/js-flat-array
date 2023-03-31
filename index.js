const array = [5, 3, [6, 3, [5, 7]]]
const flatArray = []
const myFlat = (arr) => {
  if (Array.isArray(arr) && !arr.length) {
    return
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length && Array.isArray(arr[i])) {
      myFlat(arr[i])
    } else {
      flatArray.push(arr[i])
    }
  }
}
myFlat(array)
console.log('flatArray: ', flatArray)
