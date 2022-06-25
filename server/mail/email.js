const nodemailer = require("nodemailer");
const hbs = require('nodemailer-express-handlebars')
const path = require('path')


const transport = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    auth: {
        user: 'leagueleague49@gmail.com',
        pass: 'ctmiajgsplgtchrk' //Goals1999@ gfbgekmjsbjcxfau
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    },
});

// point to the template folder
const handlebarOptions = {
    viewEngine: {
        partialsDir: path.resolve('./mail'),
        defaultLayout: false,
    },
    viewPath: path.resolve('./mail'),
};

// use a template file with nodemailer
transport.use('compile', hbs(handlebarOptions))


module.exports.sendConfirmationEmail = (email, confirmationCode) => {
    //https://betterprogramming.pub/how-to-create-a-signup-confirmation-email-with-node-js-c2fea602872a
    //trebaju jos neke izmjene u modelu kako bi ovo sve lijepo radilo

    let name = email.substring(0, email.lastIndexOf("@"));

    transport.sendMail({
        from: "leagueleague49@gmail.com",
        to: email,
        subject: "Please confirm your account",
        template: 'email',
        context: {
            //definisati promjenjive koje ce se koristiti u HTML tamlatu
            name: name,
            confirmationCode: confirmationCode
        }
    }).catch(err => console.log(err));
};