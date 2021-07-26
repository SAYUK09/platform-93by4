import { IUser } from './User'
import { Schema, model, Model, ObjectId } from 'mongoose'

export interface IPortfolioUrl {
  submissionNo: number
  resubmissionNo?: number
  portfolioUrl: string
  status: string
  reviewComment?: string | undefined
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any
}

const PortfolioSchema = new Schema<
  IPortfolioUrl,
  Model<IPortfolioUrl>,
  IPortfolioUrl
>({
  status: String,
  submissionNo: Number,
  portfolioUrl: {
    type: String,
    unique: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
})

export const PortfolioUrl = model<IPortfolioUrl>(
  'PortfolioUrl',
  PortfolioSchema
)

const ReviewHistory = new Schema<
  IPortfolioUrl,
  Model<IPortfolioUrl>,
  IPortfolioUrl
>({
  submissionNo: String,
  portfolioUrl: {
    type: String,
    unique: true,
  },
  status: String,
  reviewComment: String,
})
