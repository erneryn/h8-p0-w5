 function makanTerusRekursif(waktu) {

  if(waktu <= 0){
    return 0
  } else {
    return 1 + makanTerusRekursif(waktu - 15)
  }
  
  }
  /*
  function(66)
  1 + function (66-15)
  1 + 1 + function (51 - 15)
  1 + 1 +  1 + fuction (36-15)
  1 + 1 +  1 + 1 + fuction (16 -15)
  1 + 1 + 1 + 1 + 1 + function (1-15) = (-14) stop when number <= 0 return 0
  1 + 1 + 1 + 1 + 1 + 0
  */
  
  // TEST CASES
  console.log(makanTerusRekursif(66)); // 5
  console.log(makanTerusRekursif(100)); // 7
  console.log(makanTerusRekursif(90)); // 6
  console.log(makanTerusRekursif(10)); // 1
  console.log(makanTerusRekursif(0)); // 0