const mongoose = require('mongoose')
const { UserSchema } = require('../schemas/user-schema')

const User = mongoose.model('user', UserSchema)

User.insert = user => {
    const newUser = new User({
        id: user.id,
        name: user.name,
        birthday: user.birthday,
        student: user.student
    })
    newUser.save()
    return { statusCode: 201, message: 'User created!' }
}

User.update = async (id, user) => {
    await User.updateOne({ id: +id }, { $set: user }).exec()
    return User.findOne({ id: +id }).select('-_id -createdAt').exec()
}

User.delete = (id) => {
    return User.deleteOne({ id: id })
}

module.exports = User