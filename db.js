const sqlite3 = require('sqlite3').verbose()

let db = new sqlite3.Database('database.db',(err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the database.db');

});

db.run(`CREATE TABLE IF NOT EXISTS clients (
    id INTEGER PRIMARY KEY AUTOINCREMENT);`, function(err){
        if(err){
            return console.log(err.message)
        }

        console.log('table created')
    })


db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Close the database connection.');
});
/*
let db = new sqlite3.Database('database.db', sqlite3.OPEN_READWRITE , (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the database.db');

});



db.serialize(() => {
    db.all(`SELECT PlaylistId as id,
                    Name as name
             FROM playlists`, (err, row) => {
        if (err) {
            console.error(err.message);
        }
        console.log(row.id + "\t" + row.name);
    });
});

db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Close the database connection.');
});
*/

