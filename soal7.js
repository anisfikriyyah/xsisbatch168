require('../../base/base')
var utility= require('../../utility/utility')

module.exports = exports = function soal2 (req, res, next){
    n = parseInt(req.params.n)
    n1 = parseInt(req.params.n1)
    n2 = parseInt(req.params.n2)
    n3 = parseInt(req.params.n3)
    NilaiTinggi=n;
    NilaiLebar=parseInt((2*n)-1);
    // console.log(n)
    Array2D= utility.setArray(NilaiTinggi,NilaiLebar*n1);
    let warna = utility.setArray(NilaiTinggi,NilaiLebar);
    isiArray()
    utility.GeneratetabelResult(Array2D,warna,res)
    function isiArray(){
        for( let bangun = 0; bangun<n1; bangun++){
            let start = 0
            let stop = 0
            let NilaiTengah =(NilaiLebar*bangun)+ Math.floor(NilaiLebar/2)
            let awal = n2

            if(bangun % 2 === 0){
                for(let baris=0; baris<NilaiTinggi; baris++){
                    start = NilaiTengah-baris
                    stop = NilaiTengah+baris
                    for(let kolom = start; kolom <= stop; kolom++){
                        Array2D[baris][kolom]= awal;
                        warna[baris][kolom] = 'lightblue'
                        awal += n3
                    }
                } 
            } else {
                for(let baris=NilaiTinggi-1; baris>=0; baris--){
                    start = NilaiTengah-(NilaiTinggi-baris-1)
                    stop = NilaiTengah+(NilaiTinggi-baris-1)
                    for(let kolom = start; kolom <= stop; kolom++){
                        Array2D[baris][kolom]= awal;
                        warna[baris][kolom] = 'lightblue'
                        awal += n3
                    }
                }
            }
        }
    }
    // console.log(Array2D)
}