const fs = require("fs");
const chalk = require("chalk");

const loadNotes = () => {
    try {
        const buffer = fs.readFileSync("notes.json").toString();
        return JSON.parse(buffer);
    } catch (e) {
        return [];
    }
};

const saveNotes = notes => {
    const json = JSON.stringify(notes);
    fs.writeFileSync("notes.json", json);
};

const addNote = (title, body) => {
    const notes = loadNotes();

    if (notes.filter(x => x.title === title).length > 0) {
        console.log(
            chalk.red.inverse(
                `There is already a note with the title '${title}'.`
            )
        );
        return;
    }

    notes.push({
        title: title,
        body: body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse(`Added your note '${title}'.`));
};

const removeNote = title => {
    const notes = loadNotes();

    const index = notes.map(x => x.title).indexOf(title);
    if (index < 0) {
        console.log(
            chalk.red.inverse(`There is no note with the title '${title}'.`)
        );
        return;
    }

    notes.splice(index, 1);
    saveNotes(notes);
    console.log(chalk.green.inverse(`Removed the note titled '${title}'.`));
};

const listNotes = () => {
    const notes = loadNotes();
    if (notes.length <= 0) {
        console.log(chalk.red.inverse(`There are no notes.`));
        return;
    }
    console.log(chalk.white.inverse("Your notes:"));
    console.log(notes.map(x => x.title).toString());
};

const readNote = title => {
    const notes = loadNotes();
    const n = notes.find(x => x.title === title);

    if (!n) {
        console.log(
            chalk.red.inverse(`There is no note with the title '${title}'.`)
        );
        return;
    }

    console.log(chalk.white.inverse(`${title}`));
    console.log(n.body);
};

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};
