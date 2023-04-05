import { InferSchemaType, model, Schema } from 'mongoose'

const productInfoSchema = new Schema({
    size: { type: String, enum: ["XS", "S", "M", "L", "XL"] },
    quantity: { type: Number, required: true },
})

const productSchema = new Schema({
    name: { type: String, required: [true, 'Product Name is required'], unique: [true, 'Product Name is taken'] },
    productInfo: productInfoSchema,
    price: { type: Number, required: [true, 'Price is required'] },
    description: { type: String },
    category: [{ type: Schema.Types.ObjectId, ref: 'category' }]
}, { timestamps: true })

type Product = InferSchemaType<typeof productSchema>
export default model<Product>('Product', productSchema)
