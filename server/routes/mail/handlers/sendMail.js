const nodemailer = require('nodemailer')

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

let mailOptions = {
  to: process.env.EMAIL_TO,
  subject: 'Message from the Blog ✔'
}

function sendMail (req, res) {
  let { name, phone, email, message } = req.body

  Object.assign(mailOptions, {
    from: `"${name}" <${email}>`,
    text: `
You have received a message from the web:
  FROM: "${name}" <${email}>,
  MESSAGE: ${message}
  PHONE: ${phone}
`
  })

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    }
    res.json({
      status: 'OK',
      message: 'Message sent',
      id_message: info.messageId,
      preview_url: nodemailer.getTestMessageUrl(info)
    })
  })
}

module.exports = sendMail
