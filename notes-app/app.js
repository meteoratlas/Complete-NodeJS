const validator = require("validator");
const yargs = require("yargs");
const chalk = require("chalk");
const add = require("./utils.js");

// const command = process.argv;
// console.log(yargs.argv);

yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note Body",
            demandOption: true,
            type: "string"
        }
    },
    handler: argv => {
        console.log("Title: " + argv.title);
        console.log("Body:" + argv.body);
    }
});

yargs.command({
    command: "remove",
    describe: "Remove a note",
    handler: () => {
        console.log("Called remove");
    }
});

yargs.command({
    command: "list",
    describe: "List all notes",
    handler: () => {
        console.log("Called list");
    }
});

yargs.command({
    command: "read",
    describe: "Read a note",
    handler: () => {
        console.log("Called read");
    }
});

// We need to access yargs for it to work correctly
yargs.parse();
