//二分查找
function binarySearch(arr, target) {
  if (arr.lengtn <= 1) return arr
  let L = 0
  let R = arr.length - 1
  let has = false
  while (L <= R) {
    let mid = parseInt((L + R) / 2)
    if (arr[mid] === target) {
      has = true
      break;
    }
    if (arr[mid] > target) {
      R = mid - 1
    }
    if (arr[mid] < target) {
      L = mid + 1
    }
  }
  return has
}
let mock = [1, 2, 4, 5, 7, 7, 8, 8, 10, 20, 30]
console.log(binarySearch(mock, 8))


//二分查找变种问题: 在一个有序数组中，找>=某个数最左侧的位置
//exp: [1,2,2,3,3,3,4] target=3,最左侧位置为3
function binarySearchLeftFirst(arr, target) {
  if (arr.lengtn <= 1) return arr
  let L = 0
  let R = arr.length - 1
  let index = arr.length - 1
  while (L <= R) {
    let mid = parseInt((L + R) / 2)
    if (arr[mid] >= target) {
      index = index < mid ? index : mid
      R = mid - 1
    }
    else {
      L = mid + 1
    }
  }
  return index
}
let mock2 = [1, 2, 4, 5, 7, 7, 8, 8, 10, 20, 30]
console.log(binarySearchLeftFirst(mock, 8))