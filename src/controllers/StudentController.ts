import { IPortfolioUrl, PortfolioUrl } from './../models/Portfolio'
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
  const currentSubmission = await PortfolioUrl.findOne(
    {}
  ).sort({ submissionNo: -1 }) as IPortfolioUrl
  let currentSubmissionCount
  try {
    if (!currentSubmission?.submissionNo) {
      currentSubmissionCount = 0
    } else {
      currentSubmissionCount = currentSubmission.submissionNo
    }
    if (foundUser && foundUser.portfolioUrl) {
      return res.status(302).json({
        submissionNo: currentSubmissionCount + 1,
        status: foundUser.portfolioUrl.status,
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
        status: newPortfolio.status,
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

  const currentSubmission = (await PortfolioUrl.findOne({}).sort(
    { submissionNo: -1 }
  )) as IPortfolioUrl
  // if(!currentSubmission){
  //   currentSubmission={}
  // }
  const currentSubmissionCount = currentSubmission.submissionNo

  try {
    const oldValues = foundUser.portfolioUrl
    const newValues = {
      portfolioUrl: portfolioUrl,
      submissionNo: currentSubmissionCount + 1,
      status: 'portfolio_under_review',
    }
    if (foundUser && foundUser?.portfolioUrl.portfolioUrl === portfolioUrl) {
      console.log('count', currentSubmissionCount)

      const updatedData = new PortfolioUrl(extend(oldValues, newValues))
      await updatedData.save()

      return res.status(200).json({
        submissionNo: currentSubmissionCount + 1,
        status: 'portfolio_under_review',
        message: 'resubmission successfull',
      })
    }

    if (foundUser) {
      const updatedData = new PortfolioUrl(extend(oldValues, newValues))
      await updatedData.save()
      return res.status(200).json({
        submissionNo: currentSubmissionCount + 1,
        status: 'portfolio_under_review',
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const dashboardInfoHandler = async (req: AuthRequest, res: any) => {
  const user = req.user

  if (!user) {
    return res.status(404).json({
      msg: 'Data for the user was not found on the server.',
    })
  }

  try {
    const foundPortfolio = (await User.findOne({
      email: user?.email,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }).populate('portfolioUrl')) as any

    res.status(200).json({
      foundPortfolio: foundPortfolio,
    })
  } catch (error) {
    res.status(500).json({
      msg: 'There was some error while fetching user information.',
      code: 'INTERNAL_ERROR',
    })
  }
}
