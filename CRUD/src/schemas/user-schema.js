const { Schema } = require('mongoose')

const user = {
    id: {
        type: Number,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    },
    profession: {
        type: String
    },
    student: {
        type: Boolean,
        required: true
    }
}

module.exports.UserSchema = new Schema(user, { timestamps: true })