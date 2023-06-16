const fs = require("fs");
const path = require("path");

fs.readdirSync(path.join(__dirname, "./node_modules/cardano-token-registry/mappings")).forEach((fileName, index) => {
    const file = fs.readFileSync(path.join(__dirname, `./node_modules/cardano-token-registry/mappings/${fileName}`));
    const json = JSON.parse(file.toString())

    if (json.logo && json.logo.value && json.subject) {
        const byteString = json.logo.value

        const buffer = Buffer.from(byteString,'base64');

        const filePath = `./logos/cardano/${json.subject}.png`;

        fs.writeFileSync(filePath, buffer);
    }
});