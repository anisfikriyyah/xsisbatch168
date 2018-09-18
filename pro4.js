require('../../base/base')
var utility= require('../../utility/utility')

module.exports = exports = function soal2 (req, res, next){
    n = parseInt(req.params.n)
    NilaiTinggi=(n/2)*(n+1);
    NilaiLebar=parseInt((2*n)-1);
    NilaiTengah = Math.floor(NilaiLebar/2)
    
    Array2D= utility.setArray(NilaiTinggi,NilaiLebar);
    let warna = utility.setArray(NilaiTinggi,NilaiLebar);
    isiArray()
    utility.GeneratetabelResult(Array2D,warna,res)
    function isiArray(){
        let gan = 1, fibo = 0, id, start= 0; 

        for(let bangun = 0; bangun<n; bangun++){
            let stop = start + n - bangun-1;
            id = bangun;
            
            for(let baris=start; baris<=stop; baris++){
                let startkol = id;
                let stopkol = NilaiLebar-id-1;
                id++;

                for(let kolom = startkol; kolom <= stopkol; kolom++){
                    if(bangun % 2 == 0){
                        Array2D[baris][kolom]= gan;
                        warna[baris][kolom] = 'lightblue'
                        gan+=2
                    } else {
                        Array2D[baris][kolom] = utility.fibonaci(fibo)
                        warna[baris][kolom] = 'lightblue'
                        fibo++
                    }
                }
            }
            start += n-bangun
        }
    }
}