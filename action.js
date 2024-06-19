/////////////////////// Q1 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let transactions = [
    { type: "deposit", amount: 100 },
    { type: "withdrawal", amount: 50 },
    { type: "deposit", amount: 200 },
    { type: "withdrawal", amount: 30 }
];


function groupByType(transactions) {
    let grouped = {};
    for (let transaction of transactions) {
        if (!grouped[transaction.type]) {
            grouped[transaction.type] = [];
        }
        grouped[transaction.type].push(transaction);
    }
    return grouped;
}

//console.log(groupByType(transactions));



/////////////////////// Q2 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let employees = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 },
    { name: "Charlie", age: 30 }
];
let ageLimit = 30;

function filterEmployees(employees, ageLimit) {
    return employees.filter(employee => employee.age <= ageLimit);
}

//console.log(filterEmployees(employees, ageLimit));



/////////////////////// Q3 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let classes = [
    ["Alice", "Bob", "Charlie"],
    ["David", "Alice", "Eve"],
    ["Frank", "George", "Bob"]
];

function checkDuplicates(classes) {
    let nameSet = new Set();
    for (let classList of classes) {
        for (let name of classList) {
            if (nameSet.has(name)) {
                return true;
            }
            nameSet.add(name);
        }
    }
    return false;
}

//console.log(checkDuplicates(classes));


/////////////////////// Q4 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function getCurrentDateTime() {
    const now = new Date();

    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

//console.log(getCurrentDateTime());


/////////////////////// Q5 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function calculateAge(birthdate) {
    const birthDate = new Date(birthdate);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    // Adjust age if the current date is before the birthdate in the current year
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    return age;
}

//console.log(calculateAge("1990-06-15")); 



/////////////////////// Q6 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result.toISOString().split('T')[0]; // Returns the date in YYYY-MM-DD format
}

//console.log(addDays("2022-06-15", 10)); 



/////////////////////// Q7 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function dateDifference(date1, date2) {
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);
    
    const timeDifference = secondDate - firstDate; // Difference in milliseconds
    const dayDifference = timeDifference / (1000 * 60 * 60 * 24); // Convert milliseconds to days

    return Math.abs(dayDifference); // Return the absolute value to avoid negative results
}

//console.log(dateDifference("2022-06-15", "2023-06-15")); 



/////////////////////// Q8 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let userPreferences = new Map();

function setPreference(key, value) {
    userPreferences.set(key, value);
}

function getPreference(key) {
    return userPreferences.get(key);
}

// Setting preferences
setPreference("theme", "dark");
setPreference("fontSize", "16px");

// Getting preferences
//console.log(getPreference("theme")); 
//console.log(getPreference("fontSize")); 


/////////////////////// Q9 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function countOccurrences(arr) {
    let occurrenceMap = new Map();

    for (let str of arr) {
        if (occurrenceMap.has(str)) {
            occurrenceMap.set(str, occurrenceMap.get(str) + 1);
        } else {
            occurrenceMap.set(str, 1);
        }
    }

    return occurrenceMap;
}

// Example usage:
let strings = ["apple", "banana", "apple", "orange", "banana", "apple"];
//console.log(countOccurrences(strings));



/////////////////////// Q10 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let employees1 = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

function mapEmployeeIdsToNames(employees) {
    let employeeMap = new Map();

    for (let employee of employees) {
        employeeMap.set(employee.id, employee.name);
    }

    return employeeMap;
}

let employeeMap = mapEmployeeIdsToNames(employees1);
//console.log(employeeMap);



/////////////////////// Q11 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let inventory = new Map();

function addItem(itemName, quantity) {
    inventory.set(itemName, quantity);
}

function updateItemQuantity(itemName, quantity) {
    if (inventory.has(itemName)) {
        inventory.set(itemName, inventory.get(itemName) + quantity);
    } else {
        console.log("Item not found");
    }
}

function checkItemQuantity(itemName) {
    if (inventory.has(itemName)) {
        return inventory.get(itemName);
    } else {
        return "Item not found";
    }
}

// Example usage:
addItem("apple", 100);
addItem("banana", 150);
updateItemQuantity("apple", 50);
//console.log(checkItemQuantity("apple")); // Output: 150
//console.log(checkItemQuantity("banana")); // Output: 150
//console.log(checkItemQuantity("orange")); // Output: Item not found



/////////////////////// Q12 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

let numbers = [1, 2, 2, 3, 4, 4, 5];
//console.log(removeDuplicates(numbers));  // Output: [1, 2, 3, 4, 5]


/////////////////////// Q13 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function intersection(arr1, arr2) {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    let result = [];

    for (let item of set1) {
        if (set2.has(item)) {
            result.push(item);
        }
    }

    return result;
}

let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];
//console.log(intersection(array1, array2)); // Output: [3, 4]



/////////////////////// Q14 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function union(...arrays) {
    let resultSet = new Set();

    for (let array of arrays) {
        for (let item of array) {
            resultSet.add(item);
        }
    }

    return [...resultSet];
}

let array11 = [1, 2, 3];
let array12 = [3, 4, 5];
let array13 = [5, 6, 7];
//console.log(union(array11, array12, array13));  // Output: [1, 2, 3, 4, 5, 6, 7]




/////////////////////// Q15 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function removeItemsFromSet(items, set) {
    for (let item of items) {
        set.delete(item);
    }
}

let mySet = new Set([1, 2, 3, 4, 5]);
let itemsToRemove = [2, 3];
removeItemsFromSet(itemsToRemove, mySet);

//console.log([...mySet]);  // Output: [1, 4, 5]




/////////////////////// Q16 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function updateAttendance(newAttendance, overallAttendance) {
    for (let student of newAttendance) {
        overallAttendance.add(student);
    }
    return overallAttendance;
}

let overallAttendance = new Set(["Alice", "Bob"]);
let todayAttendance = ["Charlie", "Alice"];
overallAttendance = updateAttendance(todayAttendance, overallAttendance);
//console.log([...overallAttendance]); // Output: ["Alice", "Bob", "Charlie"]
