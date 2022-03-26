const path = require('path');
const { readdir, writeFile } = require('fs/promises');

const toBaseName = f => path.basename(f, '.svg');

const toBaseNames = files => files.map(toBaseName);

const toJSONArray = fileNames => JSON.stringify(fileNames, null, 2);

const writeJSON = content => writeFile('./verifiedAssets.json', content);

readdir(path.resolve('./light'))
    .then(toBaseNames)
    .then(toJSONArray)
    .then(writeJSON);
