console.log(process.argv);
const arr = process.argv.slice(2, process.argv.length);

function sumUpNum(arr) {
    let sum = null;
    for (let el of arr) {
        sum += +el;
    }
    return console.log(sum);
}

/**
C:\Users\sukon\Desktop\CodeDojo\course-node\course-node\exercises\01_sum\solution\main.js 1 1 1 1
 */
sumUpNum(arr); // 4