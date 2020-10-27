const User = require('../models/user');

exports.getlanding = (req, res, next) => {
    res.render('login');
};

exports.postlogin = (req, res) => {
    console.log(req.body.username);
    console.log(req.body.password);
    const email = req.body.username;
    const password = req.body.password;
    const user = User.findOne({
        where: {
            email: email,
            password: password
        }
    }).then(result => {
        console.log("the result is: " + result);
        if (result == null) {
            console.log("wrong id password")
            res.redirect('/');
        }
        else {
            console.log(result.role);
            role = result.role;
            //req.session.id = result.id
            console.log(req.session.user = result.id);
            if (role) {
                res.redirect('/admin/products');
            } else {
                res.redirect('/user/products');
            }
        }
    }).catch(error => {
        console.log(error)
    })

}

exports.getRegister = (req, res, next) => {
    res.render('register');
};

exports.postRegister = (req, res, next) => {
    console.log(req.body.firstname);
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    //const role= 0;
    User.create({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        role: false
    })
        .then(result => {
            res.redirect('/');
        })
        .catch(error => {
            console.log(error);
        });
};