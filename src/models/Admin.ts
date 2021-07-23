import { IUser } from './User'
import { IReviewHistory } from './ReviewHistory'
import { Schema, model, Model, ObjectId, PopulatedDoc } from 'mongoose'
import bcrypt from 'bcrypt'
import crypto from 'crypto'

export interface IAdmin {
  email: string
  isVerified: boolean
  firstName: string
  lastName: string
  password: string
  passwordResetToken: string | undefined
  passwordResetTokenExpire: Date | undefined
  getPasswordResetToken: () => Promise<string>
  matchPasswords: (password: string) => Promise<boolean>
  portfolioReviewed: number | undefined
  reviewHistory: Array<IReviewHistory>
}

const adminSchema = new Schema<IAdmin, Model<IAdmin>, IAdmin>(
  {
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
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 50,
      select: false,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    passwordResetToken: {
      type: String,
    },
    passwordResetTokenExpire: {
      type: Date,
    },
    portfolioReviewed: {
      type: Number,
    },
    reviewHistory: [
      {
        submissionNo: Number,
        portfolioUrl: String,
        status: String,
        reviewComment: String,
      },
    ],
  },
  {
    timestamps: true,
  }
)

adminSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

adminSchema.methods.matchPasswords = async function (password) {
  return await bcrypt.compare(password, this.password)
}
