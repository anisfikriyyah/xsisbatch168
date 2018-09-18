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
        var start = 0
        var stop = 0
        for(let bangun = 0; bangun<n1; bangun++){

            for(let baris=0; baris<NilaiTinggi; baris++){
                if(bangun % 4 == 0){
                    start = NilaiLebar*bangun
                    stop = (NilaiLebar*bangun)+baris
                } else if(bangun % 4 == 1){
                    start = NilaiLebar*bangun
                    stop = (NilaiLebar*bangun)+(NilaiLebar-baris-1)
                } else if(bangun % 4 == 2){
                    start = (NilaiLebar*bangun)+baris
                    stop = (NilaiLebar*bangun)+NilaiLebar-1
                } else {
                    start = (NilaiLebar*bangun)+(NilaiLebar-baris-1)
                    stop = (NilaiLebar*bangun)+NilaiLebar-1
                }

                for(let kolom=start; kolom<=stop; kolom++){ 
                    if(kolom == start || kolom == stop || baris == 0 || baris == NilaiTinggi-1){
                        Array2D[baris][kolom]= '*';
                        warna[baris][kolom] = 'lightgreen'
                    } 
                }
            }
        }
    }
    // console.log(Array2D)
}