/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let categoryMap = {};

  for (const transaction of transactions) {
    const { category, price } = transaction;

    if (!categoryMap[category]) {
      categoryMap[category] = 0;
    }

    categoryMap[category] += price;
  }

  let result = [];

  for (const key in categoryMap) {
    result.push({ category: key, totalSpent: categoryMap[key] });
  }

  return result;
}

let transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 1,
    timestamp: 1656076800000,
    price: 12,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 1,
    timestamp: 1656076800000,
    price: 13.5,
    category: "Shopping",
    itemName: "Shirt",
  },
  {
    id: 1,
    timestamp: 1656076800000,
    price: 16.75,
    category: "Shopping",
    itemName: "Hoodie",
  },
  {
    id: 1,
    timestamp: 1656076800000,
    price: 18,
    category: "Furniture",
    itemName: "Table",
  },
];

console.log(calculateTotalSpentByCategory(transactions));

module.exports = calculateTotalSpentByCategory;
