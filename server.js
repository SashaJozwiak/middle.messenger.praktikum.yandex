const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('./dist/'));


app.listen(PORT, function () {
    console.log(`The pages are available: http://localhost:3000/ (ctrl+click to open)`);
});
