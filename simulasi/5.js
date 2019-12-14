/*
=================================
Object group class and sort score
=================================

[INSTRUCTION]
Diberikan arr object nilai-nilai murid dengan struktur object nama, score dan class,
tugas anda adalah memanipulasi data tersebut dengan meng-group berdasarkan
kelas dan sort ascending untuk score-nya!

[EXAMPLE]
- Bila arr of ojects adalah :obj[kelas]=[]
console.log(
 [
    {
      name: 'debby',
      score: 100,
      class: 'A'
    },
    {
      name: 'amy',
      score: 80,
      class: 'A'
    },
    {
      name: 'david',
      score: 32,
      class: 'A'
    },
    {
      name: 'heraldo',
      score: 90,
      class: 'B'
    },
    {
      name: 'arnold',
      score: 100,
      class: 'B'
    },
    {
      name: 'aakansha',
      score: 75,
      class: 'B'
    },
    {
      name: 'aleksa',
      score: 90,
      class: 'C'
    }
  ]
maka hasilnya adalah:
{ A:
   [ { name: 'david', score: 32 },
     { name: 'amy', score: 80 },
     { name: 'debby', score: 100 } ],
  B:
   [ { name: 'aakansha', score: 75 },
     { name: 'heraldo', score: 90 },
     { name: 'arnold', score: 100 } ],
  C: [ { name: 'aleksa', score: 90 } ] }

[RULE]
1. dilarang menggunakan indexOf(), find(), filter(), shift(), unshift(), sort()
2. dilarang menggunakan regex
*/

function groupSort(arr) {
    var obj={
          /*
  //  { A:
  //     [ { name: 'david', score: 32 },
  //       { name: 'amy', score: 80 },
  //       { name: 'debby', score: 100 } ],
  //    B:
  //     [ { name: 'aakansha', score: 75 },
  //       { name: 'heraldo', score: 90 },
  //       { name: 'arnold', score: 100 } ],
  //    C: [ { name: 'aleksa', score: 90 } ] }
  //    */
    }
for(var i=0;i<arr.length;i++){
    if(obj[arr[i]["class"]]== undefined){
        var kelas=arr[i]["class"]
        obj[kelas]=[
            {name: arr[i]['name'], score: arr[i]['score']}
        ]
    } else {
        
        obj[arr[i]['class']].push({name: arr[i]['name'], score: arr[i]['score']})
    }
}
  
for(var keys in obj){
    for(var i=0 ;i<obj[keys].length-1;i++){

        for(var j=0;j<obj[keys].length-1;j++){
            if(obj[keys][j]['score']>obj[keys][j+1]['score']){
                var temp=obj[keys][j]
                obj[keys][j]=obj[keys][j+1]
                obj[keys][j+1]=temp
            }
            console.log(obj[keys][j+1]['score'], "<<")
        }
    }
}

return obj
  }
  console.log(
    groupSort([
      {
        name: "debby",
        score: 100,
        class: "A"
      },
      {
        name: "amy",
        score: 80,
        class: "A"
      },
      {
        name: "david",
        score: 32,
        class: "A"
      },
      {
        name: "heraldo",
        score: 90,
        class: "B"
      },
      {
        name: "arnold",
        score: 100,
        class: "B"
      },
      {
        name: "aakansha",
        score: 75,
        class: "B"
      },
      {
        name: "aleksa",
        score: 90,
        class: "C"
      }
    ])
  );
  /*
  //  { A:
  //     [ { name: 'david', score: 32 },
  //       { name: 'amy', score: 80 },
  //       { name: 'debby', score: 100 } ],
  //    B:
  //     [ { name: 'aakansha', score: 75 },
  //       { name: 'heraldo', score: 90 },
  //       { name: 'arnold', score: 100 } ],
  //    C: [ { name: 'aleksa', score: 90 } ] }
  //    */