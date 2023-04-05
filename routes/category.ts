
import { Request, Response } from "express"

const router = require('express').Router()
const passport = require('passport')
import * as Category from '../controllers/category'
const passportSetup = require('../auth/passport')

router.get('/', Category.getAllCategories)

router.post('/', Category.createCategory)



export default router
