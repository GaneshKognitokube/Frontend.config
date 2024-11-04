import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


 const transport = nodemailer.createTransport({
            host: "email-smtp.ap-south-1.amazonaws.com",
            port: 587,
            auth: {
                user: "AKIA5WLTTL6HAPYVGSXM",
                pass: "BHcpgrNqyk5MivcdQqKT/W4PGJc9hSOU1ZMB+SQ7EODM"
            }
        })

async function contactForm(name: string, subject: string, mail: string, question: string, subject1: string)
{
    try
    {

        const mailOptions = {
            from: "bhavyashree.kullolli@aspiretech.ltd",
            to: "bhavyashree.kullolli@aspiretech.ltd",
            subject: subject1,
            html: `
              <html>
                <body>
                  <h1>Email Notification</h1>
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <th style="border: 1px solid #ddd; padding: 8px;">Name</th>
                      <th style="border: 1px solid #ddd; padding: 8px;">Subject</th>
                      <th style="border: 1px solid #ddd; padding: 8px;">Email</th>
                      <th style="border: 1px solid #ddd; padding: 8px;">Question</th>
                    </tr>
                    <tr>
                      <td style="border: 1px solid #ddd; padding: 8px;">${name}</td>
                      <td style="border: 1px solid #ddd; padding: 8px;">${subject}</td>
                      <td style="border: 1px solid #ddd; padding: 8px;">${mail}</td>
                      <td style="border: 1px solid #ddd; padding: 8px;">${question}</td>
                    </tr>
                  </table>
                </body>
              </html>
              `
        }
        await transport.sendMail(mailOptions)
        return NextResponse.json({ message: "Success" }, { status: 200 });
    }
    catch (e)
    {
        return NextResponse.json({ message: "Fail", error: e }, { status: 500 });
    }
    
}

async function consultation(name: string, phone: string, companyemail: string, cfor: string, message: string, company: string, subject1: string)
{
    try {
        
        const mailOptions = {
            from: "bhavyashree.kullolli@aspiretech.ltd",
            to: "bhavyashree.kullolli@aspiretech.ltd",
            subject: subject1,
            html: `
        <html>
          <body>
            <h1>Email Notification</h1>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <th style="border: 1px solid #ddd; padding: 8px;">Name</th>
                <th style="border: 1px solid #ddd; padding: 8px;">Phone</th>
                <th style="border: 1px solid #ddd; padding: 8px;">Company</th>
                <th style="border: 1px solid #ddd; padding: 8px;">Company Email</th>
                <th style="border: 1px solid #ddd; padding: 8px;">Consultating For</th>
                <th style="border: 1px solid #ddd; padding: 8px;">Message</th>
              </tr>
              <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">${name}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${phone}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${company}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${companyemail}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${cfor}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${message}</td>
              </tr>
            </table>
          </body>
        </html>
      `
        }
        await transport.sendMail(mailOptions)
        return NextResponse.json({ message: "Success" }, { status: 200 });
    }

    catch (e)
    {
        return NextResponse.json({ message: "Fail", error: e }, { status: 500 });
    }
    
}

async function singleMail( email: string, subject1: string )
{
    try {
        const mailOptions = {
            from: "bhavyashree.kullolli@aspiretech.ltd",
            to: "bhavyashree.kullolli@aspiretech.ltd",
            subject: subject1,
            html: `
        <html>
          <body>
            <h1>Email Notification</h1>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <th style="border: 1px solid #ddd; padding: 8px;">Email</th>
              </tr>
              <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">${email}</td>
              </tr>
            </table>
          </body>
        </html>
      `
        }
      await transport.sendMail(mailOptions)
      return NextResponse.json({message: "Success"}, {status: 200})
    }
    catch (e) {
        return NextResponse.json({ message: "Fail", error: e }, { status: 500 });
    }
}

export async function POST(request: Request) {
    const data = await request.json();
    const { action } = data;
    if (action == "contact")
    {
        try
        {
            const { name, subject, mail, question, subject1 } = data;
            contactForm(name, subject, mail, question, subject1)
            return NextResponse.json({message: "Success"}, {status: 200})
        }
        catch (e)
        {
            return NextResponse.json({message: "Fail", error: e}, {status: 500})
        }
    }

    else if (action == "consultation")
    {
        try
        {
            const { name, phone, cmail, cfro, msg, cname, subject1 } = data;
            consultation(name, phone, cmail, cfro, msg, cname, subject1);
            return NextResponse.json({ message: "Success" }, { status: 200 });
        }
        catch (e)
        {
            return NextResponse.json({ message: "Fail", error: e }, { status: 500 });
        }
    }

    else if (action == "emailcontact")
    {
        try
        {
            const { email, subject1 } = data;
            singleMail(email, subject1);
            return NextResponse.json({ message: "Success" }, { status: 200 });
        }
        catch (e)
        {
            return NextResponse.json({ message: "Fail", error: e }, { status: 500 });
        }
    }


}