const mongoose = require('mongoose');

// Define schema (rules to follow to create collections aka tables in the DB)
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, unique: true, required: true },
}, { timestamps: true });

// Create the model (represents collections aka tables)
const Student = mongoose.model("Student", studentSchema)

module.exports = Student;