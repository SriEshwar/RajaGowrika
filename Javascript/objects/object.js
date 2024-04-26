let item = {
    iname: 'phone',
    price: 25000,
    quantity: 1,
    categories: ['electronic', 'phone'],
    dimensions: {
        length: 7,
        breadth: 3.5,
        height: 5
    }
}
console.log(item);

// to access the array of element and particular elements
console.log(item.categories);
console.log(item.categories[1]);


// another way of creating object 

let item1 = new Object();
item1.name = 'charger'
item1.pirce = 4000
console.log(item1);

// accessing the object using dot operator 
console.log(item.price);
item.price = 23000;
console.log(item.price);


//adding new property
item.returnavle = true;
console.log(item);


//square bracket notation
console.log(item['price'])



let items = {
    name: 'phone',
    price: 25000,
    quantity: 1,
    addTolist() {
        console.log("Add list to the cart");
    }
}
items.addTolist();
