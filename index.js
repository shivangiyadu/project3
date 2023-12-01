const foodData=require("./food.json");

//Task:1 Listing all the food items

const fooditems=foodData.map(item=>item.foodname);
console.log("All Food Items:",fooditems);

//Task:2 Listing all the food items with category vegetabels

const veg_food_items=foodData.filter(item=>item.category=="Vegetable").map(item=>item.foodname);
console.log("Vegetables food items: " ,veg_food_items);

//Task:3 Listing all the food items with category fruits

const fruit_food_items=foodData.filter(item=>item.category=="Fruit").map(item=>item.foodname);
console.log("fruit food items:", fruit_food_items);

//Task: 4 Listing all the food items with category proteins

const Protein_food_items=foodData.filter(item=>item.category=="Protein").map(item=>item.foodname);
console.log("Protein food items:", Protein_food_items);

//Task: 5 Listing all the food items with category nuts

const Nuts_food_items=foodData.filter(item=>item.category=="Nuts").map(item=>item.foodname);
console.log("Nuts food items:", Nuts_food_items);

//Task:6 Listing all the food items with category Dairy

const Dairy_food_items=foodData.filter(item=>item.category=="Dairy").map(item=>item.foodname)
console.log("Dairy Food items:", Dairy_food_items);

//Task:7 Listing all the food items with category Grains

const Grain_food_items=foodData.filter(item=>item.category=="Grain").map(item=>item.foodname)
console.log("Grains Food items:" , Grain_food_items);

//Task: 8 Listing all teh food items with calorie above 100

const caloriecount_above100 = foodData.filter(item => item.calorie > 100).map(item => item.foodname);
console.log("Food Items with Calories above 100:", caloriecount_above100);

//Task: 9 Listing all the food items with calorie below 100

const caloriecount_below100 = foodData.filter(item => item.calorie < 100).map(item => item.foodname);
console.log("Food Items with Calories above 100:", caloriecount_below100);


//Task:10 Listing all the food items with highest to lowest protein
const sortedByProtein = foodData.slice().sort((a, b) => b.protiens - a.protiens).map(item => item.foodname);
console.log("Food Items Sorted by Protein Content (Descending):", sortedByProtein);


//Task:10 Listing all the food items with highest to lowest protein
const sortedByProteinAscending = foodData.slice().sort((a, b) => a.protiens - b.protiens) 
console.log("Food Items Sorted by Protein Content (Ascending):", sortedByProteinAscending);


//Task:11 Listing all the food items with lowest cab content to highest
const sortedByCarbohydrateAscending = foodData.slice().sort((a, b) => a.cab - b.cab).map(item => item.foodname);
console.log("Food Items Sorted by Carbohydrate Content (Ascending):", sortedByCarbohydrateAscending);