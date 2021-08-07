import { Router } from 'express'
import { requiresAuth } from '../middleware/AuthMiddleware'
import { reviewHandler, adminInfoHandler } from '../controllers/AdminController'

const router = Router()
// TODO: Add requiresAuth to teh routes after testing
router.route('/review').post(reviewHandler)

router.route('/admin-dashboard').get(adminInfoHandler)

export = router
