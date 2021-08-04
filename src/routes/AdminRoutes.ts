import { Router } from 'express'
import { requiresAuth } from '../middleware/AuthMiddleware'
import { reviewHandler, adminInfoHandler } from '../controllers/AdminController'

const router = Router()

router.route('/review').post(requiresAuth, reviewHandler)

router.route('/admin-dashboard').get(requiresAuth, adminInfoHandler)

export = router
