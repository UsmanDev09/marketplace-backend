import { InferSchemaType, model, Schema } from 'mongoose'

const productInfoSchema = new Schema({
    sizes: { type: String, enum: ["XS", "S", "M", "L", "XL"] },
    quantity: { type: Number, required: true },
})

const productSchema = new Schema({
    name: { type: String, required: [true, 'Product Name is required'], unique: [true, 'Product Name is taken'] },
    productInfo: productInfoSchema,
    price: { type: Number, required: [true, 'Price is required'] },
    sizes: { type: String, enum: ["XS", "S", "M", "L", "XL"] },
    quantity: { type: Number, required: true },
    description: { type: String },
    categories: [{ type: Schema.Types.ObjectId, ref: 'category' }]
}, { timestamps: true })

type User = InferSchemaType<typeof productSchema>

export default model<User>('Product', productSchema)