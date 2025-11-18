import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Please enter a valid email address"),
  message: z.string().min(5, "Message must be at least 5 characters long"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, message } = parsed.data;

    const mailInfo = sendMail({
      username: name,
      userEmail: email,
      userMessage: message
    });
    return NextResponse.json({ success: true, message: 'message sent successfully:'+ mailInfo }, { status: 200 });
    
  } catch (error) {
    console.error("Error in /api/contact:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}

type mailDetails = {
  username: string,
  userEmail: string,
  userMessage: string,
}
async function sendMail({username, userEmail, userMessage}:mailDetails) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_ID,
      pass: process.env.APP_PASSWORD,
    }
  })

  transporter.verify((err, success) => {
    if(err) {
      throw new Error(`SMTP Config Error: , ${err}`)
    }
    else{
      return NextResponse.json(
      {success: true, message: success},
      {status: 200}
    )
    }
  })

  const mailOptions = {
    from: process.env.EMAIL_ID,
    to: process.env.RECIPIENT,
    subject: `Message from ${username} : via your website`,
    html: `
      <h3>${username} wants to contact you<h3>
      <p>name: ${username}</p>
      <p>name: ${userEmail}</p>
      <p>name: ${userMessage}</p>
    `
  }

  const info = await transporter.sendMail(mailOptions)

  return info;
}