function besar (angka){
var temp=0
    for(var i=0;i<angka.length;i++){
        if(angka[i] > temp){
            temp= angka[i]
        }
    }
return temp
}


console.log(besar([4,59,7,11]))