function totalDigitRekursif(angka) {
    // var str= angka.toString()
    // if(str.length==1){
    //     return Number(str)
    // } else {
    //     var index= str[0]
    //     return Number(index)+ totalDigitRekursif(Number((angka.toString()).slice(1)))
    // }
    if(angka < 10){
        return angka
    } else{ 
        
        var mod = angka % 10
        
        return mod + totalDigitRekursif(Math.floor(angka/10))
    }

  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5