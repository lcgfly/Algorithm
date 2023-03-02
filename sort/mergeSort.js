// T(N) = 2 * T(N / 2) + O(N)
// O(N * logN)
function mergeSort(arr) {
  if (arr.length < 2) return arr
  let L = 0;
  let R = arr.length - 1
  process(arr, L, R)
  function process(arr, L, R) {
    if (L === R) return
    let mid = Math.floor(L + ((R - L) >> 1))
    process(arr, L, mid)
    process(arr, mid + 1, R)
    merge(arr, L, mid, R)
  }
  function merge(arr, L, mid, R) {
    let p1 = L
    let p2 = mid + 1
    let helper = []
    let index = 0
    while (p1 <= mid && p2 <= R) {
      helper[index++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++]
    }
    while (p1 <= mid) {
      helper[index++] = arr[p1++]
    }
    while (p2 <= R) {
      helper[index++] = arr[p2++]
    }
    for (let i = 0; i < helper.length; i++) {
      arr[L + i] = helper[i]
    }
  }
}
// let arr = [99, 4, 1,1320,321, 4, 5, 676, 7, 100, 35, 14]
// mergeSort(arr)
// console.log(arr)
comparison()
//对数器？
function comparison() {
  let AC = true
  for (let i = 0; i < 50000; i++) {
    let arr = randomGenerator(100)
    let arr1 = JSON.parse(JSON.stringify(arr))
    let arr2 = JSON.parse(JSON.stringify(arr)).sort((a, b) => a - b)
    mergeSort(arr1)
    if (!isEqual(arr1, arr2)) {
      AC = false
      break
    }
  }
  console.log(AC ? 'AC!!!' : 'Fuck some terrible')
}
function randomGenerator(maxLength) {
  let arr = []
  let x = [10, 100, 1000]
  let len = Math.ceil(Math.random() * maxLength)
  for (let i = 0; i < len; i++) {
    let random = Math.floor(Math.random() * x[Math.floor(Math.random() * x.length)])
    arr.push(random)
  }
  return arr
}
function isEqual(arr1, arr2) {
  let pass = true
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      pass = false
      break;
    }
  }
  return pass
}