var str="abcdefg"
var result=""

for(var i=0;i<str.length;i++){
    result = str[i] + result
}

console.log(result)