require('dotenv').config();
const app = require('./src/app');
const connectToDB = require('./src/config/database.js');


// connected to database
connectToDB();




// listen on port
app.listen(3000, () => {
    console.log('Server is running on port 3000');
})