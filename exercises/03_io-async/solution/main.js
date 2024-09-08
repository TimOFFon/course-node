import fs from "node:fs/promises";

const filePath = process.argv[1];

try {
    const contents = await fs.readFile(filePath, 'utf-8');
    const arrayStr = contents.split(`\n`);
    const countStr = arrayStr.length + 1;
    console.log(countStr); // 10
} catch (error) {
    console.error('Error', error);
}

//node C:\Users\sukon\Desktop\CodeDojo\course-node\course-node\exercises\03_io-async\solution\main.js