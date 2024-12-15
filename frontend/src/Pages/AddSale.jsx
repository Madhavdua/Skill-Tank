import React, { useContext, useState } from 'react';
import {
    DollarSign,
    User,
    ShoppingCart,
    CreditCard,
    CheckCircle,
    TruckIcon
} from 'lucide-react';
import myContext from '../CreateContext';

const AddSale = () => {
    const c=useContext(myContext);
    const empty={
        customerName: '',
        productName: '',
        quantity: 0,
        unitPrice: 0,
        paymentMethod: 'Cash',
        status: 'Pending',
        discountApplied: 0,
        salespersonName: 'Not provided',
        deliveryStatus: 'Not Applicable',
        createdAt: new Date().toISOString().split('T')[0]
    }
    const [formData, setFormData] = useState(empty);

    const paymentMethodOptions = ['Credit Card', 'Cash', 'Online Payment'];

    const statusOptions = ['Completed', 'Pending', 'Cancelled'];

    // Delivery status options
    const deliveryStatus = ['Shipped', 'Delivered', 'In Transit', 'Not Applicable'];

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Validate quantity and unit price to be positive
        if ((name === 'quantity' || name === 'unitPrice') && parseFloat(value) < 0) {
            return;
        }

        setFormData(prev => ({
            ...prev,
            [name]: name === 'createdAt' ? value :
                (name === 'quantity' || name === 'unitPrice') ? parseFloat(value) :
                    value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate all required fields
        const requiredFields = [
            'customerName', 'productName', 'quantity',
            'unitPrice'
        ];

        const missingFields = requiredFields.filter(field => !formData[field]);

        if (missingFields.length > 0) {
            alert(`Please fill in all required fields: ${missingFields.join(', ')}`);
            return;
        }
        const res=c.addSale(formData);
        if(res===true){
            setFormData(empty);
        }
    };

    return (
        <div className="container mt-5">
            <div className="card shadow-sm">
                <div className="card-header bg-primary text-white d-flex align-items-center">
                    <ShoppingCart className="me-2" />
                    <h5 className="mb-0">New Sale Entry</h5>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="customerName" className="form-label">
                                    <User className="me-2" size={18} /> Customer Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="customerName"
                                    name="customerName"
                                    value={formData.customerName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="productName" className="form-label">
                                    <ShoppingCart className="me-2" size={18} /> Product Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="productName"
                                    name="productName"
                                    value={formData.productName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="quantity" className="form-label">
                                    Quantity
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="quantity"
                                    name="quantity"
                                    min="0"
                                    value={formData.quantity}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="unitPrice" className="form-label">
                                    <DollarSign className="me-2" size={18} /> Unit Price
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="unitPrice"
                                    name="unitPrice"
                                    min="0"
                                    step="0.01"
                                    value={formData.unitPrice}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label className="form-label">Payment Method</label>
                                <select
                                    className="form-select"
                                    value={formData.paymentMethod}
                                    onChange={(e) => handleInputChange(e)}
                                    name="paymentMethod"
                                >
                                    {paymentMethodOptions.map(method => (
                                        <option key={method} value={method}>
                                            {method}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">
                                    <CheckCircle className="me-2" size={18} /> Status
                                </label>
                                <select
                                    className="form-select"
                                    value={formData.status}
                                    onChange={(e) => handleInputChange(e)}
                                    name="status"
                                >
                                    {statusOptions.map(status => (
                                        <option key={status} value={status}>
                                            {status}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="discountApplied" className="form-label">
                                    Discount Applied
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="discountApplied"
                                    name="discountApplied"
                                    min="0"
                                    step="0.01"
                                    value={formData.discountApplied}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="salespersonName" className="form-label">
                                    <User className="me-2" size={18} /> Salesperson Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="salespersonName"
                                    name="salespersonName"
                                    value={formData.salespersonName}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label className="form-label">
                                    <TruckIcon className="me-2" size={18} /> Delivery Status
                                </label>
                                <select
                                    className="form-select"
                                    value={formData.deliveryStatus}
                                    onChange={(e) => handleInputChange(e)}
                                    name="deliveryStatus"
                                >
                                    {deliveryStatus.map(status => (
                                        <option key={status} value={status}>
                                            {status}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="createdAt" className="form-label">
                                    Created At
                                </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="createdAt"
                                    name="createdAt"
                                    value={formData.createdAt}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary w-100 d-flex align-items-center justify-content-center"
                        >
                            <ShoppingCart className="me-2" /> Submit Sale Entry
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddSale;