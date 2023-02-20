//数组中只有一个数出现了奇数次，找出这个数
function findOddTimesNumber(arr) {
  let eor = 0
  for (let i = 0; i < arr.length; i++) {
    eor ^= arr[i]
  }
  return eor
}
let test = [3, 3, 1, 6, 2, 6, 1, 2, 6]
console.log(findOddTimesNumber(test));


//数组中有两个数出现了奇数次，找出这个两数
function findOddTimesNumberTwo(arr) {
  let eor = 0
  for (let i = 0; i < arr.length; i++) {
    eor ^= arr[i]
  }
  //此时 eor = 奇数a ^ 奇数b

  let rightOne = eor & (~eor + 1);//a和b肯定在某一位上不相等，这一步取出最右位置上的1
  let onlyOne = 0;
  for (let j = 0; j < arr.length; j++) {
    if ((rightOne & arr[j]) === 0) {
      onlyOne ^= arr[j]
    }
  }
  //onlyOne 要么等于a，要么等于b
  //另外一个数等于 eor^onlyOne
  console.log(`第一个数：${onlyOne} 第二个数：${eor ^ onlyOne}`)
}
let test2 = [3, 3, 1, 6, 2, 6, 9, 1, 2, 6]
findOddTimesNumberTwo(test2)