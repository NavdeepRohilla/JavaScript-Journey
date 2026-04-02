const myNums = [1 , 2 , 3]

const myTotal = myNums.reduce(function (acc , currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
} , 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "Js- Course",
        price: 459
    },
    {
        itemName: "Py-course",
        price: 859
    },
    {
        itemName: "Mobile Dev course",
        price: 4999
    },
    {
        itemName: "Data Science Course",
        price: 12999
    },
    
]

const priceToPay = shoppingCart.reduce((acc , item) =>acc + item.price , 0 )
console.log(priceToPay);
