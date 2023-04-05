import { RequestHandler } from "express"

import Category from '../models/category'

type CategoryBody = {
    _id: number,
    name: string,
    description: string,
}


export const getAllCategories: RequestHandler<unknown, unknown, CategoryBody, unknown> = async (req, res, next) => {

  try {

    const categories = await Category.find()

    res.status(200).json(categories)

  } catch (error) {

    res.status(500).json(error)

  }

}

export const createCategory: RequestHandler<unknown, unknown, CategoryBody, unknown> = async (req, res, next) => {

  try {

    const { name, description } : CategoryBody = req.body

    const category = await Category.create({
      name, description
    })
console.log(category)
    res.status(200).json(category)

  } catch (error) {

    res.status(500).json(error)

  }

}



