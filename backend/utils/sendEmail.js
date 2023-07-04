const nodemailer = require("nodemailer");

const sendEmail = async (email, subject, text) => {
  console.log(process.env.HOST);
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      port: 587,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });
    await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject: subject,
      text: text,
    });
    console.log("Email sent Successfully");
  } catch (error) {
    console.log("Email not sent");
    console.log(error);
  }
};

module.exports = { sendEmail };
