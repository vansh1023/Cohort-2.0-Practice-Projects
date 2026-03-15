const mongoose = require('mongoose');



// database connection
const connectToDB = async () => {
    await mongoose.connect(`${process.env.MONGODB_URI}/notes-manager-task-app`)
    console.log('connected to db');
}


module.exports = connectToDB;