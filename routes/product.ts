
import { Request, Response } from "express"

import express from 'express'
import passport from 'passport'
import * as Product from '../controllers/product'
// import passportSetup from '../auth/passport'

const router = express.Router()

router.get('/category/:categoryId', Product.getAllProducts )

router.post('/category/:categoryId', Product.createProduct )

router.put('/category/:categoryId', Product.updateProduct )

router.delete('/category/:categoryId', Product.deleteProduct )

export default router
