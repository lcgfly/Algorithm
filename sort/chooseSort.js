//选择排序 时间复杂度O(N^2) 额外空间复杂度O(1)
function chooseSort(arr){
  for(let i=0;i<arr.length-1;i++){
    let min = i
    for(let j = i+1;j<arr.length;j++){
      if(arr[j]<arr[min]){
        min = j
      }
    }
    swap(arr,i,min)
  }
  return arr
}
function swap(arr,i,j){
  let temp
  temp = arr[i]
  arr[i]=arr[j]
  arr[j]=temp
}
let list = [99,4,1,4,5,676,7,100,35,14]
console.log(chooseSort(list))