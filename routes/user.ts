import { Request, Response } from "express"

import express from 'express'
import passport from 'passport'
import * as UserController from '../controllers/user'

const router = express.Router()

router.get('/login', UserController.login)

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}))

router.get('google/redirect', passport.authenticate('google'), (req: Request, res: Response) => {
    // google redirect callback
})

export default router