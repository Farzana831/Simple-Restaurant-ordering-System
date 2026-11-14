
const customerName = "Rabia"; 
let customerAge = 31;
let availableBalance =1000; 

console.log ("1.Burger - $10");
console.log ("2. Pizza - $15");
console.log (" 3. Sandwich -$8");
console.log ("4.Pasta -$12");
console.log ("5. Exit - $0");

let choice = 1;
switch (choice) { 
    case 1 : 
     console.log ("YouselectedBurger, price$10");
     break; 

     case 2: 
     console.log ("YouselectedPizza, price$15");
     break;

     case 3: 
     console.log ("YouselectedSandwitch,price$8");
     break;

     case 4: 
     console.log ("YouselectedPasta, price$12");
     break;

     default: 
     console.log ("Youdidnotselectanything");
     break;

}
