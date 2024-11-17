function asalMi (...sayilar){
    for (let i=0; i<sayilar.length; i++){
        for (let j=2; j<=sayilar[i]; j++){
            let sayi= sayilar[i]
            if (j == sayi){
                console.log(sayi)
            }
            if (sayi % j == 0){
                break
            }
        }
    }
}
//asalMi(58,34,26,54,13,16,77,11,49,2,3,-5,-6)


let arkadas = (sayi1, sayi2) => {
    let bolenler1= carpanlar(sayi1)
    let bolenler2= carpanlar(sayi2)
    let toplam1=0
    let toplam2=0
    for (let i=0; i<bolenler1.length; i++){
        toplam1= toplam1 + bolenler1[i]
    }
    for (let i=0; i<bolenler2.length; i++){
        toplam2= toplam2 + bolenler2[i]
    }
    if (toplam1 == sayi2 && toplam2 == sayi1){
        console.log("kamiller")
    }else{
        console.log("arkadaş değiller")
    }
}
function carpanlar(sayi){
    let bolenler = [] 
    let j=0
    for (let i=1; i<sayi; i++){   
        if (sayi % i == 0){
            bolenler[j]= i
            j++
        }
    }
    return bolenler
}
//arkadas(17296,18416)


let bne = () => {
    console.log("mükemmel sayılar:")
    for (let i=1; i<1000; i++){
        let toplam= 0
        for (let j=1; j<i; j++){
            if (i % j == 0){
                toplam= toplam + j
            }
        }
        if (i == toplam){
            console.log(toplam)
        }
    }
}
//bne()


let asalBin= () => {
    for (let i=2; i<100; i++){
        carpanlar(i)
    }
}
function carpanlar(sayi){
    let j=2 // 1 ve sayının kendisi kafadan var
    for (let i=1; i<sayi; i++){
        if (sayi % i != 0){
            j++
        }
        if (j == sayi){
            console.log(sayi)
        }
    }
}
//asalBin()

