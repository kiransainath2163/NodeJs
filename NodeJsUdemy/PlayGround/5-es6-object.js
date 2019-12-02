const name = 'Kiran'
const userAge = 27

const user = {
    name: name,
    age: userAge,
    location: 'Philadelphia'
}

console.log(user)

//Destructuring an object

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating:undefined
}

let { label, stock, salePrice, rating} = product

console.log(label, stock, salePrice, rating)