function kaliTerusRekursif(angka) {
  if( angka< 10){
      return angka
  } else{
      var digit = angka  % 10
    //   var angka =Math.floor(angka/10) * digit // 6
      return kaliTerusRekursif(kaliTerusRekursif(Math.floor(angka/10)*digit)) 
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6