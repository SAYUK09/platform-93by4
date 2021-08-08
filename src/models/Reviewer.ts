import { Schema, model, Model, ObjectId } from 'mongoose'
import bcrypt from 'bcrypt'
import { IPortfolioUrl } from './Portfolio'

export interface IReviewer {
  email: string
  isVerified: boolean
  isAllowedToReview: boolean
  firstName: string
  lastName: string
  password: string
  passwordResetToken: string | undefined
  passwordResetTokenExpire: Date | undefined
  getPasswordResetToken: () => Promise<string>
  matchPasswords: (password: string) => Promise<boolean>
  portfolioReviewed?: number
  portfolioAssigned: IPortfolioUrl
  /** This is array of userID */
  reviewHistory: Array<{
    portfolioUrl: string
    date: Date
  }>
}

const reviewerSchema = new Schema<IReviewer, Model<IReviewer>, IReviewer>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    isAllowedToReview: {
      type: Boolean,
      default: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 50,
      select: false,
    },

    passwordResetToken: {
      type: String,
    },
    passwordResetTokenExpire: {
      type: Date,
    },
    portfolioReviewed: {
      type: Number,
      default: 0,
    },
    portfolioAssigned: {
      type: Schema.Types.ObjectId,
      ref: 'PortfolioUrl',
    },
    reviewHistory: [
      {
        portfolioUrl: String,
        date: Date,
      },
    ],
  },
  {
    timestamps: true,
  }
)

reviewerSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

reviewerSchema.methods.matchPasswords = async function (password) {
  return await bcrypt.compare(password, this.password)
}

export const Reviewer = model<IReviewer>('Reviewer', reviewerSchema)
