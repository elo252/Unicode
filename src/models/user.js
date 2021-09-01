// const mongoose = require('mongoose')
// const validator = require('validator')




// const studentSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         unique: true,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error('Email is invalid')
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         minlength: 7,
//         trim: true,
//         validate(value) {
//             if (value.toLowerCase().includes('password')) {
//                 throw new Error('Password cannot contain "password"')
//             }
//         }
//     },
//     Enrolled: {
//         type: mongoose.Schema.Types.ObjectId,
//         //required: true,
//         ref: 'Course'
//     }

// })

// const Student = mongoose.model('Student', studentSchema)

// module.exports = Student

const mongoose = require('mongoose');
const validator = require('validator')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name']
  },


  mobile: {
    type:Number,
    unique: [true, 'Sorry, enter another mobile number, as already taken'],
    required: [true, 'Mobile Number'],
    minlength:10,
    maxlength:10

  },

  email: {
    type: String,
    unique: [true, 'Sorry, enter another Email, as already taken'],
    required: [true, 'Email id'],
    trim: true,
    lowercase: true,
    validate(value) {
        if (!validator.isEmail(value)) {
            throw new Error('Email is invalid')
        }
    }
    },role: {
    type: String,
    enum: ['Student', 'Teacher' ],
    
    required:[true,'Role must be defined']
  },  Enrolled: {
    type: mongoose.Schema.Types.ObjectId,
    //required: true,
    ref: 'Course'
 },    course: {
  type: String,
 },
  password: {
    type: String,
    required: [true, 'Password'],
    minLength: 8
  }

  
});

const User = mongoose.model('User', userSchema)

module.exports = User