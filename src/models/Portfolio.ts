import { IUser } from './User'
import { Schema, model, Model, ObjectId } from 'mongoose'

export interface IPortfolioUrl {
  portfolioUrl: string
  submissionNo: number
  status: string
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
