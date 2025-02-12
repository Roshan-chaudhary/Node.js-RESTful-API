const nodemailer = require("nodemailer");
require("dotenv").config();


module.exports = async (email, subject, text) => {
	try {
		const transporter = nodemailer.createTransport({
			host:'smtp.gmail.com',
			port: 587,
			secure: false,
			requireTLS:true,
			auth: {
				user:'roshan.chaudhary9997@gmail.com',
				pass:'abmpwugownqrniwz',
			},
		});

		await transporter.sendMail({
			from:'roshan.chaudhary9997@gmail.com',
			to: email,
			subject:subject,
			text:text,
		});
		console.log("email sent successfully");
	} catch (error) {
		console.log("email not sent!");
		console.log(error);
		return error;
	}
};
