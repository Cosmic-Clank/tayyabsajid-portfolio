import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const transporter = nodemailer.createTransport({
	host: process.env.MAIL_HOST,
	port: process.env.MAIL_PORT,
	secure: false,
	auth: {
		user: process.env.MAIL_USER,
		pass: process.env.MAIL_PASS,
	},
} as SMTPTransport.Options);

export const sendMail = async ({ from, subject, body }: { from: string; subject: string; body: string }) => {
	const sendResult = transporter.sendMail({
		from,
		to: [process.env.MAIL_USER || ""],
		subject,
		html: body,
	});
	return sendResult;
};
