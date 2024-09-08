import { extname } from "node:path";
import { readdir } from 'node:fs/promises';

export async function listingExtension(nameDir, ext) {
    const stdout = process.stdout;

    try {
        const files = await readdir(nameDir);
        let i = 0;
        for (const file of files) {
            if (extname(file) === ('.' + ext)) {
                ++i;
                stdout.write(file);
                if (i < files.length - 1) stdout.write('\n');
            }
        }
    } catch (err) {
        console.error(err);
    }
}