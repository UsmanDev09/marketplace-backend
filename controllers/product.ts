import { RequestHandler } from "express"
import mongoose from 'mongoose'
import createHttpError from 'http-errors'

import Product from '../models/product'
import Category from '../models/category'

type ProductInfoBody = {
  size: string,
  quantity: number,
}

type ProductBody = {
    _id: number,
    name: string,
    price: string,
    description: string,
    size: string,
    quantity: number,
    categoryId: number

}


export const getAllProducts: RequestHandler<unknown, unknown, ProductBody, unknown> = async (req, res, next) => {

  try {
    const { categoryId } : ProductBody = req.body

    const products = await Product.find({category: categoryId})

    res.status(200).json(products)

  } catch (error) {

    res.status(500).json(error)

  }

}

export const createProduct: RequestHandler<ProductBody, unknown, ProductBody, unknown> = async (req, res, next) => {

  try {

    const { name, price, size, quantity, description } : ProductBody = req.body
    const {categoryId} : ProductBody = req.params
    if (!mongoose.Types.ObjectId.isValid(categoryId)) {
       throw createHttpError(400, 'Invalid ObjectId')
    }
    const productInfo: ProductInfoBody = {
      size,
      quantity
    }

    const product = await Product.create({
      name, price, productInfo, description,
    })

    await Product.findByIdAndUpdate(product._id, {
      $push: { category: [categoryId] },
    })

    res.status(200).json(product)

  } catch (error) {

    res.status(500).json(error)

  }

}


export const updateProduct: RequestHandler<unknown, unknown, ProductBody, unknown> = async (req, res, next) => {

  try {

    const { name, price, size, quantity, description, categoryId } : ProductBody = req.body

    const product = await Product.findOneAndUpdate({name, categoryId}, {
      name, price, size, quantity, description, categoryId
    })

    res.status(200).json(product)

  } catch (error) {

    res.status(500).json(error)

  }

}


export const deleteProduct: RequestHandler<unknown, unknown, ProductBody, unknown> = async (req, res, next) => {

  try {

    const { name, categoryId } : ProductBody = req.body

    const product = await Product.findOneAndDelete({ name, categoryId })

    res.status(204)

  } catch (error) {

    res.status(500).json(error)

  }

}
