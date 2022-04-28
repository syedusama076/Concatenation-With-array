//1st Solution
function consoleItemsWithAdditionalString(additionalString, arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i] + additionalString)
    }
}
consoleItemsWithAdditionalString(' Developer', ['Usama', 'Faizan', 'Anas']);


//2nd Solution
const str = ['Usama', 'Faizan', 'Anas'];
const newArr = str.map(myFunction);
function myFunction(str) {
    return str + ' Developer';
}
console.log(newArr)