const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service : 'gmail',
  auth: {

  }
})
