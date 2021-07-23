import { Schema, Model } from 'mongoose'

export interface IReviewHistory {
  submissionNo: number
  portfolioUrl: string
  status: string
  reviewComment: string | undefined
}

const ReviewHistory = new Schema<
  IReviewHistory,
  Model<IReviewHistory>,
  IReviewHistory
>({
  submissionNo: String,
  portfolioUrl: {
    type: String,
    unique: true,
  },
  status: String,
  reviewComment: String,
})
