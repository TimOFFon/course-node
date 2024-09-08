function sumUpNum(arr) {
    let sum = 0;
    for (let el of arr) {
        sum += +el;
    }
    return sum;
}

/**
C:\Users\sukon\Desktop\CodeDojo\course-node\course-node\exercises\01_sum\solution\main.js 1 1 1 1
 */
// Input
const arr = process.argv.slice(2, process.argv.length);

// Calculations
const sum = sumUpNum(arr); // 4

// Output
console.log(sum);