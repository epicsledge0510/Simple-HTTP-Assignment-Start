const fs = require('fs');

const fileImage = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getImage = (request, response) => {
    response.writeHead(200, { 'Content-Type': 'image/png' });
    response.write(fileImage);
    response.end();
};

module.exports={
    getImage,
    fileImage
}
