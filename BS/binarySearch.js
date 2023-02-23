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
//console.log(binarySearch(mock, 8))


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
//console.log(binarySearchLeftFirst(mock, 8))


//局部最小值问题（要求时间复杂度至少为O(n)）
//题目描述：在一组无序且相邻数字不等的数组 arr 中，如果存在一个数比它前面、后面的数都小，返回这个数的索引
//Tips:arr[0]如果比arr[1]小或者arr[arr.length-1]比arr[arr.length-2]小,这两种情况都算是最小值
function BSAwesome(arr) {
  //二分法 O(logN)
  if (!arr || arr.length <= 0) return -1
  if (arr.length === 1 || arr[0] < arr[1]) return 0
  if (arr[arr.length - 2] > arr[arr.length - 1]) return arr.length - 1
  let L = 0
  let R = arr.length - 1
  while (L < R) {
    let mid = Math.floor(L + R / 2)
    if (arr[mid] > arr[mid - 1]) {
      R = mid - 1
    }
    else if (arr[mid] > arr[mid + 1]) {
      L = mid + 1
    }
    else {
      L = mid 
      break;
    }
  }
  return L
  //遍历法 O(n)
  // let index = -1
  // for(let i=1;i<arr.length-1;i++){
  //   if(arr[i-1]>arr[i]&&arr[i]<arr[i+1]){
  //     index = i
  //     break;
  //   }
  // }
  // return index
}
let test = [5, 4, 3, 1, 6, 7, 3, 8]
console.log(BSAwesome(test))