import { InferSchemaType, model, Schema } from 'mongoose'

const categorySchema = new Schema({
    name: { type: String, required: [true, 'Category Name is required'], unique: [true, 'Category Name is taken'] },
    description: { type: String },
}, { timestamps: true })

type Category = InferSchemaType<typeof categorySchema>

export default model<Category>('Category', categorySchema)
