import { TextPrompt, isCancel } from '@clack/core';

const run = async() => {
    const p = new TextPrompt({
        render() {
            return `What's your name?\n${this.valueWithCursor}`;
        },
    });

    const name = await p.prompt();
    if (isCancel(name)) {
        process.exit(0);
    }

    console.log(`Hello ${name}`)
}
console.log("Hello from index.ts");
run()
