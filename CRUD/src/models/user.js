const mongoose = require('mongoose')
const { UserSchema } = require('../schemas/user-schema')

const User = mongoose.model('user', UserSchema)

User.insertUser = async user => {
    const newUser = new User({
        id: user.id,
        name: user.name,
        birthday: user.birthday,
        student: user.student
    })

    return newUser.save().then(() => {
        return { statusCode: 201, message: 'User created!', data: {} }
    }).catch(e => {
        return { statusCode: 406, message: 'something wrong!', data: { error: e } }
    })
}

User.findOneUser = async id => {
    const foundUser = await User.findOne({ id: +id }).select('-_id -__v').exec()
    if (foundUser) {
        return { statuscode: 200, message: 'User found!', data: foundUser }
    }
    return { statuscode: 404, message: 'User not found!', data: {} }
}

User.updateUser = async (id, user) => {
    const { modifiedCount } = await User.updateOne({ id: +id }, { $set: user }).exec()
    if (modifiedCount) {
        const updatedUser = User.findOne({ id: +id }).select('-_id -createdAt -__v').exec()
        return { statuscode: 200, message: 'Ok!', data: updatedUser }
    }
    return { statuscode: 404, message: 'User not found!', data: {} }
}

User.deleteUser = async id => {
    const { deletedCount } = await User.deleteOne({ id: +id })
    if (deletedCount) {
        return { statusCode: 200, message: 'User deleted!', data: {} }
    }
    return { statuscode: 404, message: 'User not found!', data: {} }
}

module.exports = User