import nodemailer from 'nodemailer'
import sendgrid from '@sendgrid/mail'
import handlebars from 'handlebars'
import SMTPTransport from 'nodemailer/lib/smtp-transport'
import fs from 'fs'
import path from 'path'
import log from './logger'

/* Sets the SG API Key */
if (process.env.SG_MAIL_API_KEY) {
  sendgrid.setApiKey(process.env.SG_MAIL_API_KEY)
} else {
  log.warn(`No sendGrid API key was found. You likely forgot to set Env key`)
}

interface User {
  /** Email of the use to send email to */
  readonly email: string
  /** First name of the user to send email to */
  readonly firstName: string
}

export class Email {
  private to = ''
  private firstName = ''

  constructor(user: User) {
    this.to = user.email
    this.firstName = user.firstName
  }

  private newTransport() {
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
    /** File name of the email template */
    template: string
    /** Subject of the email */
    subject: string
    /** Any dynamic values to send in email. Make sure to correctly include them in template as well */
    variables: Record<string, unknown>
  }) {
    try {
      const emailTemplate = fs.readFileSync(
        path.join(__dirname, '..', 'templates', `${template}.hbs`),
        'utf8'
      )

      const html = handlebars.compile(emailTemplate)

      const htmlToSend = html({
        ...variables,
      })

      const sgMailOptions = {
        to: this.to,
        from: {
          name: 'neoG Camp',
          email: 'no-reply@neog.camp',
        },
        subject,
        html: htmlToSend,
      }
      const nodemailerOptions = {
        to: this.to,
        from: {
          name: 'neoG Camp',
          address: 'no-reply@neog.camp',
        },
        subject,
        html: htmlToSend,
      }
      /* Use sendGrid in only production mode */
      if (process.env.NODE_ENV === 'production') {
        await sendgrid.send(sgMailOptions).then(
          //eslint-disable-next-line
          () => {},
          (error: any) => {
            console.error(error)

            if (error.response) {
              console.error(error.response.body)
            }
          }
        )
        return
      } else {
        await this.newTransport().sendMail(
          nodemailerOptions,
          (error,response) => {
            if (error) {
              console.log('Error occured while sending email', error)
              } else {
              console.log(process.env.NODE_ENV)
              console.log('Response after sending email', response)
            }
          }
        )
      }
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
