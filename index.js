/// heroku deployment
require('dotenv').config();
// code away!
const server = require('./server.js');
/// heroku deployment
const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`Server running at http://localhost:${port}`));