import fs from "node:fs";

const filePath = process.argv[1];

const contents = fs.readFileSync(filePath);
const arrayStr = contents.toString().split(`\n`);
const countStr = arrayStr.length + 1;

//node C:\Users\sukon\Desktop\CodeDojo\course-node\course-node\exercises\02_io-sync\solution\main.js
console.log(countStr); // 8