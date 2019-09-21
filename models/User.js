const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        require: true,
        unique: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})

UserSchema.methods.genPasswordHash = function(password) {
    const salt = bcrypt.genSaltSync(10);
    this.passwordHash = bcrypt.hashSync(password, salt);
}

UserSchema.methods.genUserObj = function() {
    return {
        name: this.name,
        email: this.email
    }
}

module.exports = mongoose.model('User', UserSchema);