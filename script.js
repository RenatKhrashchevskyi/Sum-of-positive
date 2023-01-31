function positiveSum(arr) {
  if (!arr.length) return 0 
  let positive = arr.filter(el => el > 0)
  let sum = positive.reduce((num, acc) => acc + num, 0)
  return sum
}


//or

function positiveSum(arr) {
  if (!arr.length) return 0 
    let positive = arr.filter(el => el > 0)
    if (!positive.length) return 0
    let sum = positive.reduce((num, acc) => acc + num)
    return sum
  }