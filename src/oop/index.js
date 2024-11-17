class Customer{
    constructor(id, customerNumber){
        this.id= id
        this.customerNumber= customerNumber
    }
}

let customer = new Customer(1, "123456000")

//prototyping
console.log(customer.id)
console.log(customer.customerNumber)

customer.name= "Şevket Emin Gürbüz"
console.log(customer.name)

Customer.age= "25"
console.log(Customer.age)


class IndividualCustomer extends Customer{
    constructor(firstName, id, customerNumber){
        super(id, customerNumber)
        this.firstName= firstName
    }
}

class CorporateCustomer extends Customer{
    constructor(companyName, id, customerNumber){
        super(id, customerNumber)
        this.companyName= companyName
    }
}