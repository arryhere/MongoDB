const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/arry', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("We are connected !");
});

const employeeSchema = new mongoose.Schema({
    _id: Number,
    name: String
})

employeeSchema.methods.speak = function () {
    let greeting = this.name 
        ? "Hello employee - " + this.name
        : "Sorry no name for you :("
    console.log(greeting);
}

const emp = mongoose.model('emp', employeeSchema)

let emp_1 = new emp({_id:1 ,name: 'Arijit Das'})
let emp_2 = new emp({_id:2 ,name: 'Divya Jain'})
let emp_3 = new emp({_id:3 ,name: 'Haris Ali'})
let emp_4 = new emp({_id:4 ,name: 'Vivek Balaswami'})

// emp_1.speak()

emp_1.save(function (err, emp_1) {
    if(err) {
        // return console.error(error.message);
    }
    // emp_1.speak()
})
emp_2.save(function (err, emp_2) {
    if(err) {
        // return console.error(error.message);
    }
    // emp_2.speak()
})
emp_3.save(function (err, emp_3) {
    if(err) {
        // return console.error(error.message);
    }
    // emp_3.speak()
})
emp_4.save(function (err, emp_4) {
    if(err) {
        // return console.error(error.message);
    }
    // emp_4.speak()
})

emp.find({_id: 3},function (err, emp) {
    if(err){
        return console.error(err.message);
    }
    console.log(emp);
})