/* 
| Nama Layanan | harga        |
| ------------ | ------------ |
| Ganti Oli    | Rp   120,000 |
| Isi Angin    | Rp     5,000 |
| Tune Up      | Rp 1,500,000 |
| Balancing    | Rp   330,000 |

 | Layanan Full Service (KM) | Harga        |
 | ------------------------- | ------------ |
 | 0 - 10.000 KM             | Rp   600,000 |
 | 10.001 - 35.000 KM        | Rp   800,000 |
 | 35.001 - 50.000 KM        | Rp 1,300,000 |
 | > 50.000 KM               | Rp 2,500,000 |
 */
function servisMobil(customer) {
  var profile = {
    Nama: "Bengkel Sinar Jaya",
    Alamat: "Jl Mampang prapatan no 15",
    layanan: [
      { nama: "Ganti Oli", harga: 120000 },
      { nama: "Isi Angin", harga: 5000 },
      { nama: "Tune Up", harga: 1500000 },
      { nama: "Balancing", harga: 330000 },
      {
        nama: "Full Service",
        layanan: [
          { kilometer: "0-10000", harga: 600000 },
          { kilometer: "10001-35000", harga: 800000 },
          { kilometer: "35001-50000", harga: 1300000 },
          { kilometer: ">50000", harga: 2500000 }
        ]
      }
    ]
  }

var bengkel={}
var fservis={}
var layanan=profile["layanan"]

  for(var p=0;p<layanan.length;p++){
      if(layanan[p]["nama"] !== 'Full Service'){

      bengkel[layanan[p]["nama"]]=layanan[p]["harga"]
      } else {
          var fs= layanan[p]["layanan"]
         for(var q=0;q<fs.length;q++){
             fservis[fs[q]["kilometer"]]=fs[q]["harga"]
        }
    }
}
servis={}
var permintaancust=customer["permintaan"].split(",")
var total=0
    if(customer["pemintaan"] !== "Full Service"){
        for(var i=0;i<permintaancust.length;i++){
            for(var keys in bengkel){
                if(permintaancust[i] == keys){
                    servis[keys]=bengkel[keys]
                    total+=bengkel[keys]
                }
            }
        }
    } 
    console.log(customer["kilometer"])
     if( customer["permintaan"] == "Full Service"){
        var km=customer["kilometer"]
        if(km <= 10000 && km>0 ){
            servis["servis"]= customer["permintaan"]
            total += 600000
        } else if( km >10000 && km<=35000){
            servis["servis"]= customer["permintaan"]
            total += 800000
        } else if(km > 35000 && km <=50000){
            servis["servis"]= customer["permintaan"]
            total += 1300000
        } else if(km > 50000){
            servis["servis"]= customer["permintaan"]
            total += 250000
        }

    }

     var output={
        'nama bengkel': profile["Nama"],
        Alamat: profile["Alamat"],
        servis: servis,
        total: total
    }   
return output
}

const bon = servisMobil({
  pemilik: "Agus",
  permintaan: "Ganti ban,Ganti Oli,Balancing",
})
console.log(bon)

const bon1 = servisMobil({
  pemilik: "Yusuf",
  permintaan: "Full Service",
  kilometer: 23000
})
console.log(bon1)

// const bon2 = servisMobil({
//   pemilik: "Mahdi",
//   permintaan: "Full Service",
//   kilometer: 75000
// })
// console.log(bon2)

/* 
nama bengkel
alamat

servis
1.. Rp
2.. Rp
3.. Rp
Total
 */