const User = require('../models/userMdl')
const bcrypt = require('bcryptjs')

const regAuthCtrl = {
    regUsr: async (req, res) => {
        const { name, email, phone } = req.body;
        console.log('Test')
        const exits = await User.exists({email: email })

        if (exits !== null) {
            console.log('User with mail exists')
            res.json('User with mail exists')
        }

        if (exits === null) {

            bcrypt.hash(req.body.password, 10, function (err, hash) {
                if (err) {
                    console.log('Cannot encrypt', err)
                }

                password = hash;
                console.log(hash)
                const user = new User({
                    name,
                    email,
                    phone,
                    password
                })

                try {
                    user.save()
                        .then((user) => { res.json({ msg: 'User aded Success' }) })
                } catch (err) {
                    res.json('An error occured')
                    console.log(err)
                }
            })
        }

    }

}



module.exports = regAuthCtrl