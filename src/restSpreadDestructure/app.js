console.log("Merhaba Kodlama.io")

//JS type safe değildir
let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun = "9.20"
{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11

console.log(euroDun)

//array
//camelCasing
//PascalCasing
let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

{/* <ul>
    <li>Konut kredisi</li>
    <li>Emlak Konut Kredisi</li>
    <li>Kamu Konut Kredisi</li>
</ul> */}

console.log(konutKredileri)

let sayi1= 10
sayi1= "Şevkoo"
//console.log(sayi1)

let student= {id:1, name:"Şevket"}
//console.log(student)

function save(puan=33, ogrenci) {
    console.log(ogrenci.name + ": " + puan)
}
save(undefined,student) 

let students= ["Shevchenko","Engin Demiroğ"]
//console.log(students)

let students2= [student, {id:2, name:"Emin"}, "Gürbüz", {city:"İstanbul"}]
//console.log(students2)



//rest
//varArgs
let showProducts= function (id, ...products) {
    console.log(id)
    console.log(products)
}

//showProducts(10, "pc","tel","tv")


//spread
let points= [1,2,3,50,4,90,14]
console.log(Math.max(...points))
console.log(..."ABC","DE",..."FGH")


//Destructuring
let populations= [10000,20000,30000,[50000,100000]]
console.log(populations)
let [low, medium, high, [mega, ultraMega]]= populations
console.log(low)
console.log(medium)
console.log(high)
console.log(mega)
console.log(ultraMega)

function someFunction([keslow]) {
    console.log(keslow)
}

someFunction(populations)

let category= {id:1, name:"bisküvi"}
console.log(category.id)
console.log(category["name"])

let {id, name}= category
console.log(id)
console.log(name)