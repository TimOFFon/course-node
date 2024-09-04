import fs from "node:fs/promises";
const filePath = process.argv[1];
const contents = await fs.readFile(filePath,  'utf-8', (error, data) => {
    if (error) throw error;
    return data;
});
const arrayStr = contents.split(`\n`);
const countStr = arrayStr.length + 1;
//node C:\Users\sukon\Desktop\CodeDojo\course-node\course-node\exercises\03_io-async\solution\main.js
console.log(contents); // 10