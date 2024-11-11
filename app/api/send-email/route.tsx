import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    await resend.emails.send({
        from: "Next.js <Hs6H4@example.com>",
        to: "shervinkayvon@gmail.com",
        subject: "Hello from Next.js",
        react: <WelcomeTemplate name="Shervin" />
    });

    return NextResponse.json({ message: "Email sent successfully" });
}