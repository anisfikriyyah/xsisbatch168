require('../../base/base');
const utility = require('../../utility/utility');

module.exports = exports = function Soal01 (req, res, next) {
    n = parseInt(req.params.n);
    NilaiTinggi = (n*(n+1))/ 2;
    NilaiLebar = (n*(n+1))/ 2;

    Array2D= utility.setArray(NilaiTinggi,NilaiLebar);
    let warna = utility.setArray(NilaiTinggi,NilaiLebar);
    isiArray()
    utility.GeneratetabelResult(Array2D,warna,res)

    function isiArray () {
        let stBaris, endBaris, stKol, endKol, it, ganjil = 1, genap = 0;

        for (let bangun = 0; bangun < n; bangun++) {
            it = 0;
            stBaris = (bangun*(bangun+1))/2;
            endBaris = stBaris + bangun;

            for (let baris = stBaris; baris <= endBaris; baris++) {
                stKol = (bangun*(bangun+1))/2;
                endKol = stKol + bangun;

                if (it % 2 == 0) {
                    for (let kolom = stKol; kolom <= endKol; kolom++) {
                        if (bangun % 2 == 0) {
                            Array2D[baris][kolom] = ganjil;
                            warna[baris][kolom]= 'red';
                            ganjil += 2;
                        } else {
                            genap += 2;
                            Array2D[baris][kolom] = genap;
                            warna[baris][kolom]= 'lightblue';
                        }
                    }
                } else {
                    for (let kolom = stKol; kolom <= endKol; kolom++) {
                        if (bangun % 2 == 0) {
                            Array2D[baris][kolom] = ganjil;
                            warna[baris][kolom]= 'yellow';
                            ganjil += 2;
                        } else {
                            genap += 2;
                            Array2D[baris][kolom] = genap;
                            warna[baris][kolom]= 'green';
                        }
                    }
                }
                it++;
            }
        }
    }
}