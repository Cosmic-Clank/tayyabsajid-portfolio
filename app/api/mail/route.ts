import { sendMail } from "@/lib/mail";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const name = searchParams.get("name");
	const email = searchParams.get("email");
	const message = searchParams.get("message");
	console.log(request.url);
	try {
		const result = await sendMail({
			from: email || "",
			subject: "EMAIL INQUIRY FROM WEBSITE",
			body: `
            <html>
                <head>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            line-height: 1.6;
                            color: #333;
                        }
                        .container {
                            width: 100%;
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                            border: 1px solid #ddd;
                            border-radius: 10px;
                        }
                        .header {
                            text-align: center;
                            border-bottom: 1px solid #ddd;
                            padding-bottom: 10px;
                            margin-bottom: 20px;
                        }
                        .content {
                            padding: 10px;
                        }
                        .content h2 {
                            color: #555;
                        }
                        .footer {
                            text-align: center;
                            border-top: 1px solid #ddd;
                            padding-top: 10px;
                            margin-top: 20px;
                            font-size: 0.9em;
                            color: #888;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>Email Inquiry from Website</h1>
                        </div>
                        <div class="content">
                            <h2>Contact Details</h2>
                            <p><strong>Name:</strong> ${name}</p>
                            <p><strong>Email:</strong> ${email}</p>
                            <h2>Message</h2>
                            <p>${message}</p>
                        </div>
                        <div class="footer">
                            <p>This email was sent from your website's contact form.</p>
                        </div>
                    </div>
                </body>
            </html>
        `,
		});
		return Response.redirect("/mail/success");
	} catch (error) {
		return Response.redirect("/mail/fail");
	}
}
