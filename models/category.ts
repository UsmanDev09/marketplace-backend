import { InferSchemaType, model, Schema } from 'mongoose'

const categorySchema = new Schema({
    name: { type: String, required: [true, 'Category Name is required'], unique: [true, 'Product Name is taken'] },
    description: { type: String },
}, { timestamps: true })

type User = InferSchemaType<typeof categorySchema>

export default model<User>('Product', categorySchema)