// Standard Input
process.stdin.on('readable', () => {
    const buffer = process.stdin.read();
    const string = buffer.toString().toUpperCase();

    if (buffer !== null) {
        process.stdout.write(string);
    }
});