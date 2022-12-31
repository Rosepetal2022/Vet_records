const mongoose = require('mongoose');

//connects to the local host if not deployed on heroku
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/vet-records',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

module.exports = mongoose.connection;