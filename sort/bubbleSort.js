//冒泡排序 时间复杂度O(N^2) 额外空间复杂度O(1)
function bubbleSort(arr){
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-i-1;j++){
      if(arr[j]>arr[j+1]){
        swap(arr,j,j+1)
      }
    }
  }
  return arr
}
function swap(arr,i,j){
  let temp
  temp = arr[i]
  arr[i]=arr[j]
  arr[j]=temp
}