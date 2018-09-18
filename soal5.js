require('../../base/base')
var utility= require('../../utility/utility')

module.exports = exports = function soal2 (req, res, next){
    n=Math.abs(req.params.n)
    n1 = parseInt(req.params.n1)
    NilaiTinggi=n;
    NilaiLebar=(n1*n)+(n1-1);
    
    Array2D= utility.setArray(NilaiTinggi,NilaiLebar);
    let warna = utility.setArray(NilaiTinggi,NilaiLebar);
    isiArray()
    utility.GeneratetabelResult(Array2D,warna,res)
    function isiArray(){
        let nilaiMax = Math.pow(n,2)- Math.pow((n-2),2)

        for(let i=0; i<n1; i++){
            let kolom = i*(n+1)
            let baris = n-1

            for(let j=1; j<= nilaiMax; j++){
                if(j<n){
                    Array2D[baris][kolom] = '*'
                    warna[baris][kolom] = 'lightblue'
                    kolom++
                } else if(j<2*n-1){
                    Array2D[baris][kolom] = '*'
                    warna[baris][kolom] = 'lightblue'
                    baris--
                } else if(j<3*n-2){
                    Array2D[baris][kolom] = '*'
                    warna[baris][kolom] = 'lightblue'
                    kolom--
                } else {
                    Array2D[baris][kolom] = '*'
                    warna[baris][kolom] = 'lightblue'
                    baris++
                }
            }
        }
    }
}