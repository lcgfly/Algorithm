//插入排序可以想象成斗地主在发牌时，你整理扑克牌的过程
function insertSort(arr){
  if(!arr||arr.length<2) return
  for(let i=1;i<arr.length;i++){
    for(let j = i-1;j>=0&&arr[j]>arr[j+1];j--){
      swap(arr,i,j)
    }
  }
  return arr
}
function swap(arr,a,b){
  arr[a] = arr[a]^arr[b]
  arr[b] = arr[a]^arr[b]
  arr[a] = arr[a]^arr[b]
}
console.log(insertSort([4,3,3,7,5,8,9]));