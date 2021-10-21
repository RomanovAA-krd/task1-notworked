const { readFile, writeFile, stat, unlink } = require("fs").promises;


readFile(`${__dirname}/test.json`, { encoding: "utf8" })
    .then(text => {
        /* вернется текст из файла, а не объект джаваскрипта */
    })
    .catch(err => {
        /* случается когда нет файла */
    })

writeFile(`${__dirname}/test.json`, text, { encoding: "utf8" });

stat(`${__dirname}/test.json`)
    .then(data => {/* случается когда есть файл test.json */ })
    .catch(err => {/* случается когда нет файла test.json */ })

unlink(`${__dirname}/test.json`)

module.exports = { readFile, writeFile, stat, unlink }