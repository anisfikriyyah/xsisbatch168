require('../../base/base')
var utility= require('../../utility/utility')

module.exports = exports = function soal2 (req, res, next){
    n = parseInt(req.params.n)
    n1 = parseInt(req.params.n1)
    NilaiTinggi=n;
    NilaiLebar=parseInt(n);
    // console.log(n)
    Array2D= utility.setArray(NilaiTinggi,NilaiLebar*n1);
    let warna = utility.setArray(NilaiTinggi,NilaiLebar);
    isiArray()
    utility.GeneratetabelResult(Array2D,warna,res)
    function isiArray(){
        for(let bangun = 0; bangun<n1; bangun++){

            for(let baris=0; baris<NilaiTinggi; baris++){
                
                for(let kolom=(NilaiLebar*bangun); kolom<=(NilaiLebar*bangun)+baris; kolom++){ 
                    if(baris == NilaiTinggi-1){
                        Array2D[baris][kolom]= '*';
                        warna[baris][kolom] = 'lightgreen'
                    } else if(kolom == NilaiLebar*bangun){
                        Array2D[baris][kolom]= '*';
                        warna[baris][kolom] = 'lightgreen'
                    } else if(kolom == (NilaiLebar*bangun)+baris){
                        Array2D[baris][kolom]= '*';    
                        warna[baris][kolom] = 'lightgreen'
                    } 
                }
            }
        }
    }
    // console.log(Array2D)
}