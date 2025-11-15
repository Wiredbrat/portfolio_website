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

let username :string;
let userEmail :string;
let userMessage :string;

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

    username = name;
    userEmail = email;
    userMessage = message;

    console.log(username, userEmail, userMessage )
    sendMail();
    
  } catch (error) {
    console.error("Error in /api/contact:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}


function sendMail() {
  const transporter = nodemailer.createTransport({
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

  transporter.sendMail(mailOptions, (err, info) => {
    if(err) {
      throw new Error('error while sending message'+ err)
    }

    return NextResponse.json(
      {success: true, message: info},
      {status: 200}
    )
  })


}