require('../../base/base')
var utility= require('../../utility/utility')

module.exports = exports = function Soal01 (req, res, next) {
    n = parseInt(req.params.n);
    NilaiTinggi = (n*2) + 1;
    NilaiLebar = NilaiTinggi;
    NilaiTengah = Math.floor(NilaiLebar/2)

    Array2D= utility.setArray(NilaiTinggi,NilaiLebar);
    let warna = utility.setArray(NilaiTinggi,NilaiLebar);
    isiArray()
    utility.GeneratetabelResult(Array2D,warna,res)

    function isiArray () {
       
        for (let baris = 0; baris < NilaiTinggi; baris++) {
            for (let kolom = 0; kolom < NilaiLebar; kolom++) {
                if(kolom + baris == NilaiTengah || kolom + baris == NilaiTengah*3 || baris == kolom-NilaiTengah || baris == kolom+NilaiTengah) {
                    Array2D[baris][kolom] = "*";
                    warna[baris][kolom] = "red";
                }
            }
        }
    }
}