require('../../base/base')
var utility= require('../../utility/utility')

module.exports = exports = function Soal01 (req, res, next) {
    n = parseInt(req.params.n);
    NilaiTinggi = 4;
    NilaiLebar = n;

    Array2D= utility.setArray(NilaiTinggi,NilaiLebar);
    let warna = utility.setArray(NilaiTinggi,NilaiLebar);
    isiArray()
    utility.GeneratetabelResult(Array2D,warna,res)

    function isiArray () {
       let coun = 0
        for (let baris = 0; baris < NilaiTinggi; baris++) {
            for (let kolom = 0; kolom < NilaiLebar; kolom++) {
                if(baris == 0){
                    Array2D[baris][kolom] = coun;
                    warna[baris][kolom] = "red";
                    coun+=2
                } else if(baris % 4 == 1){
                    if (kolom % 3 == 0){
                        Array2D[baris][kolom] = Math.pow(kolom,3);
                        warna[baris][kolom] = 'red'
                    } else {
                        Array2D[baris][kolom] = 999
                        warna[baris][kolom] = "red";
                    }
                } else if(baris % 4 == 2){
                    Array2D[baris][kolom] = Array2D[baris-1][kolom] + Array2D[baris-2][kolom]
                    warna[baris][kolom] = 'red'
                }  else if(baris % 4 == 3){
                    if(/[3]/g.test(Array2D[baris-1][kolom])){
                        Array2D[baris][kolom] = 999
                        warna[baris][kolom] = 'red'                        
                    } else {
                        Array2D[baris][kolom] = 4
                        warna[baris][kolom] = 'red'
                    }
                }
            }
        }
    }
}