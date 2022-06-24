const User = require('../models/userMdl')
const bcrypt = require('bcryptjs')

const regCtrl = {
    verifyUser: async (req, res) => {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        bcrypt.compare(password, user.password, function (err, val) {
            if (val) {
                console.log('Password match')
                res.json({user})
            }

            if (!val) {
                console.log('Password Mismatch')
                res.json({ msg: 'Password Mismatch' })
            }


            if (err) {
                console.log(err)
            }
        })
    },

    getAll: async (req, res) => {
        const Users = await User.find();
        res.json(Users);
    }
}

module.exports = regCtrl;