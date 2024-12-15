const express = require("express");
const router = express.Router();
const Sale = require('../Schema/Sales')
const bcrypt = require("bcrypt");

const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwtkey = process.env.PRIVATE_KEY;

router.post(('/sales/add'), async (req, res) => {
    const { customerName, productName, quantity, unitPrice, paymentMethod,
        status, discountApplied, salespersonName, deliveryStation, createdAt } = req.body;
    const saleID = Math.floor(Math.random() * 100000);
    try {
        const sale = await Sale.create({
            saleID,
            customerName,
            productName,
            quantity,
            unitPrice,
            paymentMethod,
            status,
            discountApplied,
            salespersonName,
            deliveryStation,
            createdAt

        })
        res.status(201).json({ success: true, msg: "Entry added!" });
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
})

router.get('/sales', async (req, res) => {
    try {
        
        const sales = await Sale.find();

        if (sales.length === 0) {
            return res.status(404).json({ success: false, msg: "No sales found." });
        }

        res.status(200).json({ success: true, sales });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports=router;