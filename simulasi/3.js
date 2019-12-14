/*

[INSTRUCTION]
Diberikan sebuah function yang menerima parameter array bilangan bulat. Dimana
function ini berfungsi untuk mengembalikan jumlah maksimum dari dua buah nilai
yang dijumlahkan didalam array tersebut

[EXAMPLE]
- Bila array adalah [-2, 1, 3, -4, 5], maka nilai maksimum adalah 8 karena dua nilai yang
dapat menghasilkan nilai maksimum adalah 3 + 5

[RULE]
1. dilarang menggunakan indexOf(), find(), filter(), shift(), unshift(), sort()
2. dilarang menggunakan regex
3. dilarang menggunakan map, filter, reduce, apply
*/

function maxSubsetSum(arr) {
var max=0
  for(var i=0;i<arr.length;i++){
    if(max < arr[i]){
        max=arr[i]
    }
  }
var besar=0
  for(var j=0;j<arr.length;j++){
      if(arr[j]!== max){
          if(besar < (max+arr[j])){
              besar = max + arr[j]
          }
      }
  }
  return besar
}

console.log(maxSubsetSum([-2, 1, 3, -4, 5])); // 8
console.log(maxSubsetSum([-1, 2, 5, 7])); // 12
console.log(
  maxSubsetSum([
    943,
    3893,
    43,
    33,
    394,
    384843,
    3849464,
    5725474,
    27,
    485947,
    474262
  ])
);
// 9574938