const { createTransport } = require('nodemailer')
const nodemailer= require("nodemailer")

const createPasswordResetUrl = (id, token) =>
	`${process.env.CLIENT_URL}/auth/reset-password/${id}/${token}`

// const transporter = createTransport({
// 	host: 'smtp.ethereal.email',
// 	port: 587,
// 	secure: false, // true for 465, false for other ports
// 	auth: {
// 		user: 'anya.rogahn@ethereal.email',
//         pass: 'hmtrytMQfJ1JYku4xW'
// 	},
// })
const transporter = nodemailer.createTransport({
	service:"gmail",
	secure:true,
	auth: {
		user: 'itsanonymous1999@gmail.com',
        pass: 'wrvdpfmxjjrjgmuy'
	},
})


// let transporter = nodemailer.createTransport({
// 	host: 'smtp.ethereal.email',
// 	port: 587,
// 	secure: false, // true for 465, false for other ports
// 	auth: {
// 		user: 'anya.rogahn@ethereal.email',
//         pass: 'hmtrytMQfJ1JYku4xW'
// 	}
// });




const passwordResetTemplate = (user, url) => {
	const { username, email } = user

	return {
		from: `Mail - <${process.env.EMAIL_USER}>`,
		to: email,
		subject: `Reset Password`,
		html: `
    <h2>Password Reset Link</h2>
    <p>Reset your password by clicking on the link below:</p>
    <a href=${url}><button>Reset Password</button></a>
    <br />
    <br />
		<small><a style="color: #38A169" href=${url}>${url}</a></small>
    <br />
		<small>The link will expire in 15 mins!</small>
		<small>If you haven't requested password reset, please ignore!</small>
    <br /><br />
    <p>Thanks,</p>
    <p>Authentication API</p>`,
	}
}

const passwordResetConfirmationTemplate = (user) => {
	const { email } = user

	return {
		from: `Mail - <${process.env.EMAIL_USER}>`,
		to: email,
		subject: `Password Reset Successful`,
		html: `
    <h2>Password Reset Successful</h2>
    <p>You've successfully updated your password for your account <${email}>. </p>
		<small>If you did not change your password, reset it from your account.</small>
    <br /><br />
    <p>Thanks,</p>
    <p>Authentication API</p>`,
	}
}

module.exports = {
	transporter,
	createPasswordResetUrl,
	passwordResetTemplate,
	passwordResetConfirmationTemplate,
}
