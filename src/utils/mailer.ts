import nodemailer, { Transport, Transporter } from 'nodemailer'
import handlebars from 'handlebars'
import SMTPTransport from 'nodemailer/lib/smtp-transport'
import fs from 'fs'
import path from 'path'
import log from './logger'

interface User {
  readonly email: string
  readonly firstName: string
}

interface IEmail {
  readonly from: string
  readonly to: string
  readonly firstName: string
}

export class Email implements IEmail {
  // @future _> this will change
  from = '<neoG Camp> no-reply@neog.camp'
  to = ''
  firstName = ''

  constructor(user: User) {
    this.to = user.email
    this.firstName = user.firstName
  }

  newTransport() {
    console.log(process.env.EMAIL_PORT)
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    } as SMTPTransport.Options)
  }

  async send({
    template,
    subject,
    variables,
  }: {
    //   template is templateID so its probably gonna be a file name
    template: string
    subject: string
    //send any variables like links and tokens etc
    variables: Record<string, unknown>
  }) {
    //html
    try {
      const emailTemplate = fs.readFileSync(
        path.join(__dirname, '..', 'templates', `${template}.hbs`),
        'utf8'
      )

      const html = handlebars.compile(emailTemplate)

      const htmlToSend = html({
        ...variables,
      })
      // mailOPtions
      const mailOptions = {
        to: this.to,
        from: this.from,
        subject,
        html: htmlToSend,
      }

      await this.newTransport().sendMail(mailOptions, (error, response) => {
        if (error) {
          console.log('Error occured while sending email', error)
        } else {
          console.log('Response after sending email', response)
        }
      })
    } catch (error) {
      if (error.code === 'ENOENT') {
        log.error(
          `The template with the name ${template} does not exitst in templtes directory. Please double check the file name or create the file`
        )
      }
      log.error(`This error occured during sending emails`, error)
    }
  }
}
//testing purpose --delete me ---
export async function sendEmail() {
  await new Email({
    email: 'omkarak@gmail.com',
    firstName: 'Omkar',
  }).send({
    subject: 'Password Reset Link',
    template: 'hello',
    variables: {
      resetURL: 'http://resetPassword.com',
    },
  })
}
