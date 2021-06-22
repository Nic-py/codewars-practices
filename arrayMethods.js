const items = [
    { name: 'Bike',     price: 100  },
    { name: 'TV',       price: 200  },
    { name: 'Album',    price: 10   },
    { name: 'Book',     price: 5    },
    { name: 'Phone',    price: 500  },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25   },
]

//filter
const filteredItems = items.filter((item) => {
    return item.price <= 100
})

//map
const itemNames = items.map((item) => {
    return item.name
})

const itemPrices = items.map((item) => {
    return item.price
})

//find --> find a single item in an array
const foundItem = items.find((item) => {
    return item.name === "Book"
})

//forEach
items.forEach((item) => {
    console.log(item.name) //or item.price,, prints prices from the array
})

//some
const hasInexpensiveItems = items.some((item) => {
    return item.price <= 20; //if anything in the array satisfies the condition__. returns everything true
})
//console.log(hasInexpensiveItems)

const allPrices = items.every((item) => {
    return item.price <= 100; //if all members in the array satisfies the condition__. returns everything true
})
//console.log(allPrices) //FALSE

//REDUCE
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal;
}, 0) //0 -> starting
//console.log(total)





