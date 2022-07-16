const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/company', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('connected');
});

const employeeSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    age: Number,
    dept: String
})

employeeSchema.methods.speak = function () {
    console.log(`Hello ${this._id} ${this.name}`);
}

const emps = mongoose.model('emps', employeeSchema)

function empCreate(_id, name, age, dept) {
    const emp = new emps({
        _id: _id,
        name: name,
        age: age,
        dept: dept
    })

    emp.save(function (err, emp) {
        // if (err) { console.log(err.message); }
        // else { emp.speak()}
    })
}

empCreate(1, 'Arijit', 22, 'frontend');
empCreate(2, 'Ankit', 22, 'fullstack');
empCreate(3, 'Bobby', 22, 'backend');

emps.find(function (err, emps) {
    if(err) {console.log(err.message);}
    else {console.log(emps);
    }
})



