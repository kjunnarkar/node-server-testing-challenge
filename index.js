require('dotenv').config();

const server = require('./api/server');

const port = process.env.PORT || 5000;
const db_env = process.env.DB_ENV || development;

server.listen(port, () => {
    console.log(`********** Server is running on localhost: ${port} **********`);
    console.log(`The DB environment is: ${db_env}...`);
});
