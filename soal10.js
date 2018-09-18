require('../../base/base')
var utility= require('../../utility/utility')

module.exports = exports = function soal2 (req, res, next){
    n=Math.abs(req.params.n)
    n1 = parseInt(req.params.n1)
    n2 = parseInt(req.params.n2)
    n3 = parseInt(req.params.n3)
    NilaiTinggi=n;
    NilaiLebar=(n1*n)+(n1-1);
    
    Array2D= utility.setArray(NilaiTinggi,NilaiLebar);
    let warna = utility.setArray(NilaiTinggi,NilaiLebar);
    isiArray()
    utility.GeneratetabelResult(Array2D,warna,res)
    function isiArray(){
        let start
        let stop 
        let baris 
        let kolom 
        let num 
        
        for (let bangun = 0; bangun < n1; bangun++) {
            start = (NilaiLebar +1) * bangun
            stop = start + NilaiLebar -1
            baris = 0
            kolom = start
            num = n2
            let nilaiMax = Math.pow(n,2)- Math.pow((n-2),2)
            
            for(let i=0; i<nilaiMax; i++){
                Array2D[baris][kolom] = num
                warna[baris][kolom] = 'lightblue'
                num += n3
                if(baris == 0 && kolom <stop){
                    kolom++
                } else if(kolom == stop && baris < NilaiTinggi-1){
                    baris++
                } else if(baris == NilaiTinggi-1 && kolom > start){
                    kolom--
                } else if(kolom == start && baris > 0){
                    baris--
                }
            }
            
        }
        
    }
}