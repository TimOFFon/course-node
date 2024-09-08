import { dirname, extname } from "node:path";
import { readdir } from "node:fs/promises";

const filePath = process.argv[1];
const myDir = dirname(filePath);
const stdout = process.stdout;

let ends = 'txt';

async function listingExtension(nameDir, ext) {
    try {
        const files = await readdir(nameDir);
        let i = 0;
        for (const file of files) {
            if (extname(file) === ('.' + ext)) {
                ++i;
                stdout.write(file);
                if (i < files.length - 1) {
                    stdout.write('\n');
                }
            }
        }
    } catch (err) {
        console.error(err);
    }

    process.exit();
}

listingExtension(myDir, ends);

//node C:\Users\sukon\Desktop\CodeDojo\course-node\course-node\exercises\04_ls\solution\main.js