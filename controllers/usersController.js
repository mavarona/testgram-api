const User = require('../models/User')

exports.login = (req, res) => {
    res.send('login works!')
}

exports.register = (req, res) => {
    const {
        name,
        email,
        username,
        password
    } = req.body

    const user = new User();

    user.name = name;
    user.email = email
    user.username = username

    user.genPasswordHash(password);

    user.save().then(data => {
        res.json(data.genUserObj())
    })
}