function changeVocals (str) {
    var abj= 'abefijopuv' // Aergei Dragunov
    var result=''
    for(var i=0;i<str.length;i++){
        cek =false
        for(var j=0;j<abj.length;j+=2){
           if(str[i] == abj[j]){
               result+=abj[j+1]
               cek=true
           } else if(str[i].toUpperCase() == str[i] && str[i].toLowerCase() == abj[j]){
              result+=abj[j+1].toUpperCase()
              cek=true
           }
    }
    if(cek == false){
        result+=str[i]
    }
}
return result
}
  
  function reverseWord (str) {
    var reverse=""
    for(var j=0;j<str.length;j++){
      reverse= str[j] + reverse
    }
    return reverse
  }
  
  function setLowerUpperCase (str) {
    var setuplow=""
    for(var k=0;k<str.length;k++){
      if(str[k] ==  str[k].toLowerCase()){
        setuplow += str[k].toUpperCase()
      } else if( str[k] == str[k].toUpperCase()){
        setuplow += str[k].toLowerCase()
      }
    }
    return setuplow
  }
  
  function removeSpaces (str) {
    var nospace=""
    for(var l=0;l<str.length;l++){
      if(str[l] !== " "){
        nospace+= str[l]
      }
    }
    return nospace
  }
  
  function passwordGenerator (name) {
    if(name.length<5){
      return "Minimal karakter yang diinputkan adalah 5 karakter"
    }
    var ubah=changeVocals(name)
    var reverse = reverseWord(ubah)
    var setlo= setLowerUpperCase(reverse)
    var nospace= removeSpaces(setlo)
    return nospace
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'