require('../../base/base')
var utility= require('../../utility/utility')

module.exports = exports = function soal2 (req, res, next){
    n = parseInt(req.params.n)
    n1 = parseInt(req.params.n1)
    NilaiTinggi=n;
    NilaiLebar=parseInt((2*n)-1);

    Array2D= utility.setArray(NilaiTinggi,NilaiLebar*n1);
    let warna = utility.setArray(NilaiTinggi,NilaiLebar);
    isiArray()
    utility.GeneratetabelResult(Array2D,warna,res)

    function isiArray(){
        for( let bangun = 0; bangun<n1; bangun++){
            let NilaiTengah =(NilaiLebar*bangun)+ Math.floor(NilaiLebar/2)

            for(let baris=0; baris<NilaiTinggi; baris++){
                for(let kolom = (NilaiTengah-baris); kolom<=(NilaiTengah+baris); kolom++){
                        Array2D[baris][kolom]= '*';
                        warna[baris][kolom] = 'lightblue'
                }
            }
        }
    }
    // console.log(Array2D)
}