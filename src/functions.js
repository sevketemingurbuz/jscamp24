function addToCart(quantity, productName="Elma") {
    console.log("Sepete eklendi: " + productName + " adet: " + quantity)
}

//addToCart()
addToCart(10)
//addToCart("Karpuz")

let sayHello= () => {
    console.log("Merhabalar")
}
sayHello()

let sayHello2 = function () {
    console.log("Merhabalar 2")
} 
sayHello2()

function addToCart2(productName, quantity, unitPrice) {
    
}

addToCart2("Elma", 5, 10)
addToCart2("Armut", 2, 20)
addToCart2("Limon", 3, 15)

let product1 = {productName: "Lale", quantity: 5, unitPrice:10}

function addToCart3(product) {
    console.log("Sepete eklendi: " + product.productName)
    console.log("Fiyat: " + product.unitPrice)
    console.log("Adet: " + product.quantity)
}

let product2 = {productName: "Lale", quantity: 5, unitPrice:10}
let product3 = {productName: "Lale", quantity: 5, unitPrice:10}
addToCart3(product1)

product2 = product3
product2.productName= "Papatya"
console.log(product3.productName)

function addToCart4(products) {
    console.log(products)
}

let products= [
    {productName: "Gül", quantity:1, unitPrice:0},
    {productName: "Gonca", quantity: 100, unitPrice:1},
    {productName: "Sarı Lale", quantity: 3, unitPrice:5}
]
addToCart4(products)

function add(bisey, ...numbers) { //rest
    let total= 0
    for (let i = 0; i < numbers.length; i++) {
        total = numbers[i] + total;
    }
    console.log(total)
    console.log(bisey)
}
add(10,50,100,1)

let numbers= [10,1,3,1,88,1]
console.log(Math.max(...numbers))

let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri]]= [
    {name: "İç Anadolu", population: "10M"}, 
    {name: "Marmara", population: "50M"},
    {name: "Karadeniz", population: "20M"},
    [
        ["Sivas", "Konya"],
        ["İstanbul", "Sakarya"],
        ["Sinop", "Trabzon" ]
    ]
]
console.log(icAnadolu.name)
console.log(marmara.population)
console.log(icAnadoluSehirleri)
//console.log(marmaraSehirleri)


let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} 
    = {productName: "Lale", unitPrice: 5, quantity:10})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)
