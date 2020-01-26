const validator = require("validator");
const yargs = require("yargs");
const chalk = require("chalk");
const add = require("./utils.js");
const notes = require("./notes.js");

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
        notes.addNote(argv.title, argv.body);
        // console.log("Title: " + argv.title);
        // console.log("Body:" + argv.body);
    }
});

yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: "string"
        }
    },
    handler: argv => {
        notes.removeNote(argv.title);
    }
});

yargs.command({
    command: "list",
    describe: "List all note titles",
    handler: () => {
        notes.listNotes();
    }
});

yargs.command({
    command: "read",
    describe: "Read a note",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: "string"
        }
    },
    handler: argv => {
        notes.readNote(argv.title);
    }
});

// We need to access yargs for it to work correctly
yargs.parse();
