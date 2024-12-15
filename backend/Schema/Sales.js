const mongoose=require("mongoose");
const {Schema}=mongoose;

const SalesSchema = new Schema({
    saleID: {
        type: String,
    },
    customerName: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1 
    },
    unitPrice: {
        type: Number,
        required: true,
        min: 1 
    },
    totalPrice: {
        type: Number,
        default: function () {
            return this.quantity * this.unitPrice;
        }
    },
    paymentMethod: {
        type: String,
        enum: ['Credit Card', 'Cash', 'Online Payment'],
        required: true
    },
    status: {
        type: String,
        enum: ['Completed', 'Pending', 'Cancelled'],
        default: 'Pending'
    },
    discountApplied: {
        type: Number,
        min: 0,
        default: 0 
    },
    netAmount: {
        type: Number,
        min: 0,
        default: function () {
            return (this.totalPrice - this.discountApplied);
        }
    },
    salespersonName: {
        type: String,
        default:"Not provided"
    },
    deliveryStatus: {
        type: String,
        enum: ['Shipped', 'Delivered', 'In Transit', 'Not Applicable'],
        default: 'Not Applicable'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Sale=mongoose.model("Sale",SalesSchema);
module.exports=Sale;