const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
    },
});

module.exports.sendConfirmationEmail = (email, confirmationCode) => {
    //https://betterprogramming.pub/how-to-create-a-signup-confirmation-email-with-node-js-c2fea602872a
    //trebaju jos neke izmjene u modelu kako bi ovo sve lijepo radilo
    transport.sendMail({
        from: process.env.MAIL_USER,
        to: email,
        subject: "Please confirm your account",
        html: `<h1>Email Confirmation</h1>
          <h2>Hello new User</h2>
          <p>Please confirm your email by clicking on the following link</p>
          <a href=http://localhost:5000/register/${confirmationCode}> http://localhost:5000/register/${confirmationCode}</a>
          </div>`,
    }).catch(err => console.log(err));
};