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
        var ganjil = 0;
        var genap = 0;
        var fibo = 0;
        var fibo3 = 0;
        let angka = 1
        for (let baris = 0; baris < NilaiTinggi; baris++) {
            for (let kolom = 0; kolom < NilaiLebar; kolom++) {
                if (kolom + baris < NilaiTengah) {
                    Array2D[baris][kolom] = ++ganjil;
                    warna[baris][kolom] = "blue";
                } else if (baris < kolom-NilaiTengah && kolom + baris > NilaiTengah) {
                    Array2D[baris][kolom] = genap;
                    genap += 2;
                    warna[baris][kolom] = "green";
                } else if (baris > kolom+NilaiTengah && kolom + baris > NilaiTengah) {
                    Array2D[baris][kolom] = utility.fibonaci(fibo);
                    fibo++;
                    warna[baris][kolom] = "yellow";
                } else if (kolom + baris > NilaiTengah*3) {
                    Array2D[baris][kolom] = utility.fibonaci1(fibo3);
                    fibo3++;
                    warna[baris][kolom] = "orange";
                } else if(kolom + baris == NilaiTengah || kolom + baris == NilaiTengah*3 || baris == kolom-NilaiTengah || baris == kolom+NilaiTengah) {
                    Array2D[baris][kolom] = "*";
                    warna[baris][kolom] = "red";
                } else {
                    Array2D[NilaiTinggi-kolom-1][baris] = angka;
                    warna[baris][kolom] = "white";
                    angka++
                }
            }
        }
    }
}