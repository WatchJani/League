// const nodemailer = require("nodemailer");
// const hbs = require('nodemailer-express-handlebars')
// const path = require('path')
// const { google } = require("googleapis")
// const OAuth2 = google.auth.OAuth2


// const OAuth2_client = new OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET)
// OAuth2_client.setCredentials({ refresh_token: process.env.REFRESH_TOCKEN })

// const accessToken = OAuth2_client.getAccessToken()

// const transport = nodemailer.createTransport({
//     service: "Gmail",
//     auth: {
//         type: "OAuth2",
//         user: process.env.MAIL_USER,
//         clientId: process.env.CLIENT_ID,
//         clientSecret: process.env.CLIENT_SECRET,
//         refreshToken: process.env.REFRESH_TOCKEN,
//         accessToken: accessToken
//     },
// });

// // point to the template folder
// const handlebarOptions = {
//     viewEngine: {
//         partialsDir: path.resolve('./mail'),
//         defaultLayout: false,
//     },
//     viewPath: path.resolve('./mail'),
// };

// // use a template file with nodemailer
// transport.use('compile', hbs(handlebarOptions))


// module.exports.sendConfirmationEmail = (email, confirmationCode) => {



//     //https://betterprogramming.pub/how-to-create-a-signup-confirmation-email-with-node-js-c2fea602872a
//     //trebaju jos neke izmjene u modelu kako bi ovo sve lijepo radilo

//     let name = email.substring(0, email.lastIndexOf("@"));

//     transport.sendMail({
//         from: process.env.MAIL_USER,
//         to: email,
//         subject: "Please confirm your account",
//         template: 'email',
//         context: {
//             //definisati promjenjive koje ce se koristiti u HTML tamlatu
//             name: name,
//             confirmationCode: confirmationCode
//         }
//     }).catch(err => console.log(err));
// };