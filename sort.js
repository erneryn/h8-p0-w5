function bubbleSort(inputArr){
  for(var i=0 ; i<inputArr.length;i++){
      for(var j=0; j<inputArr.length;j++){
          if(inputArr[j]<inputArr[j+1]){
              var temp=inputArr[j]
              inputArr[j]=inputArr[j+1]
              inputArr[j+1]=temp
          }
      }
  }
  return inputArr
}

console.log(bubbleSort([2,1,3,5,8,7,9]))