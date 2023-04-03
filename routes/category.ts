
import { Request, Response } from "express"

const router = require('express').Router()
const passport = require('passport')
const User = require('../controllers/user')
const passportSetup = require('../auth/passport')




export default router