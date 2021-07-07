import { PortfolioUrl } from './../models/Portfolio'
import { User } from './../models/User'
import { AuthRequest } from './../types/RequestWithUser.d'
import { RequestHandler } from 'express'
import { extend } from 'lodash'

export const submitHandler: RequestHandler = async (req: AuthRequest, res) => {
  const user = req.user
  const { portfolioUrl, status } = req.body

  const count = await PortfolioUrl.estimatedDocumentCount()
  console.log('count', count)
  const foundUser = (await User.findOne({ email: user?.email }).populate(
    'portfolioUrl'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  )) as any
  const currentSubmission = await PortfolioUrl.find()
    .sort({ submissionNo: -1 })
    .limit(1)
  let currentSubmissionCount
  try {
    if (currentSubmission.length < 1) {
      currentSubmissionCount = 0
    } else {
      currentSubmissionCount = currentSubmission[0].submissionNo
    }
    if (foundUser && foundUser.portfolioUrl) {
      return res.status(302).json({
        submissionNo: currentSubmissionCount + 1,
        currentStatus: foundUser.portfolioUrl.status,
        message: 'your portfolio is already submitted',
      })
    }
    const newPortfolio = new PortfolioUrl({
      portfolioUrl,
      submissionNo: currentSubmissionCount + 1,
      status,
      user: foundUser?._id,
    })

    if (foundUser) {
      foundUser.portfolioUrl = newPortfolio._id
      await newPortfolio.save()
      await foundUser.save()
      return res.status(200).json({
        submissionNo: currentSubmissionCount + 1,
        currentStatus: newPortfolio.status,
        message: 'Your submission is successful',
      })
    }
  } catch (error) {
    console.log(error)
    if (error.code === 11000) {
      return res
        .status(409)
        .json({ message: 'This portfolio Url aready exists' })
    }
    console.error(error)
    return res.status(500).json({ message: 'Fail to submit portfolio Url' })
  }
}

export const reSubmitHandler: RequestHandler = async (
  req: AuthRequest,
  res
) => {
  const user = req.user
  const { portfolioUrl } = req.body
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const foundUser = (await User.findOne({ email: user?.email }).populate(
    'portfolioUrl'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  )) as any

  const currentSubmission = await PortfolioUrl.find()
    .sort({ submissionNo: -1 })
    .limit(1)
  const currentSubmissionCount = currentSubmission[0].submissionNo

  try {
    const oldValues = foundUser.portfolioUrl
    const newValues = {
      portfolioUrl: portfolioUrl,
      submissionNo: currentSubmissionCount + 1,
    }
    if (foundUser && foundUser?.portfolioUrl.portfolioUrl === portfolioUrl) {
      console.log('count', currentSubmissionCount)

      const updatedData = new PortfolioUrl(extend(oldValues, newValues))
      await updatedData.save()

      return res.status(200).json({
        submissionNo: currentSubmissionCount + 1,
        currentStatus: 'under review',
        message: 'resubmission successfull',
      })
    }

    if (foundUser) {
      const updatedData = new PortfolioUrl(extend(oldValues, newValues))
      await updatedData.save()
      return res.status(200).json({
        submissionNo: currentSubmissionCount + 1,
        currentStatus: 'under review',
        message: 'resubmission successfull',
      })
    }
  } catch (error) {
    if (error.code === 11000) {
      return res
        .status(409)
        .json({ message: 'This portfolio Url aready exists' })
    }
    console.error(error)
    return res.status(500).json({ message: 'Fail to submit portfolio Url' })
  }
}

