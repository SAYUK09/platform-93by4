import { PortfolioUrl } from './../models/Portfolio'
import { User } from './../models/User'
import { AuthRequest } from './../types/RequestWithUser.d'
import { RequestHandler } from 'express'

export const submitHandler: RequestHandler = async (req: AuthRequest, res) => {
  const user = req.user
  const { portfolioUrl, status } = req.body

  const count = await PortfolioUrl.estimatedDocumentCount()
  console.log('count', count)

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const foundUser = (await User.findOne({ email: user?.email }).populate(
      'portfolioUrl'
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    )) as any
    if (foundUser && foundUser.portfolioUrl) {
      return res.json({
        submissionNo: foundUser.portfolioUrl.submissionNo,
        currentStatus: foundUser.portfolioUrl.status,
        message: 'your portfolio is already submitted',
      })
    }
    const newPortfolio = new PortfolioUrl({
      portfolioUrl,
      submissionNo: count + 1,
      status,
      user: foundUser?._id,
    })

    if (foundUser) {
      foundUser.portfolioUrl = newPortfolio._id
      await newPortfolio.save()
      await foundUser.save()
      return res.status(200).json({
        submissionNo: newPortfolio.submissionNo,
        currentStatus: newPortfolio.status,
        message: 'Your submission is successful',
      })
    }
  } catch (error) {
    if (error.code === '11000') {
      return res.json({ message: 'This portfolio Url aready exists' })
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
  const { portfolioUrl, status } = req.body
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const foundUser = (await User.findOne({ email: user?.email }).populate(
    'portfolioUrl'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  )) as any

  const count = await PortfolioUrl.estimatedDocumentCount()

  try {
    if (foundUser && foundUser?.portfolioUrl.portfolioUrl === portfolioUrl) {
      console.log('count', count)
      const newPortfolio = new PortfolioUrl({
        portfolioUrl,
        submissionNo: count + 1,
        status,
        user: foundUser?._id,
      })
      
      return res.status(200).json({
        submissionNo: count + 1,
        currentStatus: 'under review',
        message: 'resubmission successfull',
      })
    }
    console.log('I am here', 71)
    const newPortfolio = new PortfolioUrl({
      portfolioUrl:portfolioUrl,
      submissionNo: count + 1,
      status,
      user: foundUser?._id,
    })

    if (foundUser) {
      foundUser.portfolioUrl = newPortfolio._id
      await newPortfolio.save()
      await foundUser.save()
      return res.status(200).json({
        submissionNo: newPortfolio.submissionNo,
        currentStatus: newPortfolio.status,
        message: 'Your submission is successful',
      })
    }
  } catch (error) {
    if (error.code === '11000') {
      return res.json({ message: 'This portfolio Url aready exists' })
    }
    console.error(error)
    return res.status(500).json({ message: 'Fail to submit portfolio Url' })
  }
}

