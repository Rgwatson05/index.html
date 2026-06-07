// Coding Challenge 04
// Retail Discount Engine

// Step 2: Create an array of 5 product objects
let products = [
    {
        name: "Laptop",
        category: "electronics",
        price: 1000,
        inventory: 10
    },
    {
        name: "T-Shirt",
        category: "apparel",
        price: 25,
        inventory: 20
    },
    {
        name: "Milk",
        category: "groceries",
        price: 5,
        inventory: 30
    },
    {
        name: "Detergent",
        category: "household",
        price: 12,
        inventory: 15
    },
    {
        name: "Book",
        category: "other",
        price: 15,
        inventory: 25
    }
];

// Step 3: Apply category discounts using for...of and switch
for (const product of products) {

    let discount = 0;

    switch (product.category) {
        case "electronics":
            discount = 0.20;
            break;

        case "apparel":
            discount = 0.15;
            break;

        case "groceries":
        case "household":
            discount = 0.10;
            break;

        default:
            discount = 0;
    }

    product.price = product.price * (1 - discount);

    console.log(
        `${product.name} discounted price: $${product.price.toFixed(2)}`
    );
}

// Step 4: Customer type discount
let customerType = "student";
let extraDiscount = 0;

if (customerType === "student") {
    extraDiscount = 0.05;
} else if (customerType === "senior") {
    extraDiscount = 0.07;
} else {
    extraDiscount = 0;
}

// Step 5: Simulate checkout for 3 customers
for (let customer = 1; customer <= 3; customer++) {

    let totalCost = 0;

    // Customer buys one of each product
    for (const product of products) {

        totalCost += product.price;

        if (product.inventory > 0) {
            product.inventory--;
        }
    }

    totalCost = totalCost * (1 - extraDiscount);

    console.log(
        `Customer ${customer} Total: $${totalCost.toFixed(2)}`
    );
}

// Step 6: Use for...in on a single product
console.log("Single Product Information:");

for (let key in products[0]) {
    console.log(`${key}: ${products[0][key]}`);
}

// Step 7: Use Object.entries() and destructuring
console.log("Updated Product Information:");

for (const product of products) {

    console.log("---------------");

    for (const [key, value] of Object.entries(product)) {
        console.log(`${key}: ${value}`);
    }
}
