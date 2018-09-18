require('../../base/base');
const utility = require('../../utility/utility');

module.exports = exports = function Soal03 (req, res, next) {
    n = parseInt(req.params.n);
    NilaiTinggi = n;
    NilaiLebar = (n*(n+1))/ 2;

    Array2D= utility.setArray(NilaiTinggi,NilaiLebar);
    let warna = utility.setArray(NilaiTinggi,NilaiLebar);
    isiArray()
    utility.GeneratetabelResult(Array2D,warna,res)

    function isiArray () {
        let stBaris, endBaris, stKol, endKol, num;

        for (let bangun = 0; bangun < n; bangun++) {
            num = 1;
            stBaris = n-bangun-1;
            endBaris = n-1;

            for (let baris = stBaris; baris <= endBaris; baris++) {
                stKol = (bangun*(bangun+1))/2;
                endKol = stKol + bangun;
                for (let kolom = stKol; kolom <= endKol; kolom++) {
                    Array2D[baris][kolom] = num++;
                    warna[baris][kolom]= 'lightblue';
                }
            }
        }
    }
}