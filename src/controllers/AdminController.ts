import { RequestHandler } from 'express'
import { AuthRequest } from './../types/RequestWithUser.d'

export const reviewHandler: RequestHandler = async (
  req: AuthRequest,
  res: any
) => {}

export const adminInfoHandler: RequestHandler = async (
  req: AuthRequest,
  res: any
) => {}
