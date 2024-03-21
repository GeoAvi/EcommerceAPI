const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

// connecting mongoose to its default server and ecommerceDB
mongoose
  .connect(
    'mongodb+srv://todoapp:todo-app@cluster0.hqe00m8.mongodb.net/EcommerceAPI?retryWrites=true&w=majority'
  )
  .then(() => console.log('MongoDB Atlas connected'))
  .catch((err) => console.error('MongoDB Atlas connection error:', err));

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));

db.once('open', function () {
  console.log('Connected to Database :: MongoDB');
});

module.exports = db;
