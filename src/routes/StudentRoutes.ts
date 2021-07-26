import {
  submitHandler,
  reSubmitHandler,
  dashboardInfoHandler,
} from '../controllers/StudentController'
import { Router } from 'express'
import { requiresAuth } from '../middleware/AuthMiddleware'

const router = Router()

router.route('/submit').post(requiresAuth, submitHandler)
router.route('/resubmit').post(requiresAuth, reSubmitHandler)

router.route('/dashboard-info').get(requiresAuth, dashboardInfoHandler)

export = router
