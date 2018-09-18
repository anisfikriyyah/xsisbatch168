require('../../base/base');
const utility = require('../../utility/utility');

module.exports = exports = function Soal04 (req, res, next) {
    n = parseInt(req.params.n);
    NilaiTinggi = n;
    NilaiLebar = n*(n+1);

    Array2D= utility.setArray(NilaiTinggi,NilaiLebar);
    let warna = utility.setArray(NilaiTinggi,NilaiLebar);
    isiArray()
    utility.GeneratetabelResult(Array2D,warna,res)

    function isiArray () {
        let baris, kolom, panjangDeret;

        for (let bangun = 0; bangun < n; bangun++) {
            baris = n-bangun-1;
            kolom = ((bangun+1)*(bangun))/2 + bangun;
            panjangDeret = bangun*3;
            
            if (!panjangDeret) {
                panjangDeret = 1;
            }

            for (let num = 1; num <= panjangDeret; num++) {
                Array2D[baris][kolom] = num;
                warna[baris][kolom]= 'lightblue';
                Array2D[baris][NilaiLebar-kolom-1] = num;
                warna[baris][kolom]= 'lightblue';
                if (num < bangun+1) {
                    baris++; kolom--;
                } else if (num < bangun*2+1) {
                    kolom++;
                } else {
                    baris--;
                }
            }
        }
    }
}