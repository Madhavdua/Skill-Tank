import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import myContext from '../CreateContext';
import {} from 'react-table'

function ShowSale() {
    const [tableData, settableData] = useState(null);
    const c = useContext(myContext);
    async function getData() {
        // console.log("getting data")
        const response = await c.getSales();
        if (response) {
            settableData(response.sales);
            // console.log(response);
        }
    }
    useEffect(() => {
        getData();
    }, [])
    const columns = [
        { name: "saleID", selector: (row) => row.saleID },
        { name: "customerName", selector: (row) => row.customerName },
        { name: "productName", selector: (row) => row.productName },
        { name: "quantity", selector: (row) => row.quantity },
        { name: "unitPrice", selector: (row) => row.unitPrice },
        { name: "totalPrice", selector: (row) => row.totalPrice },
        { name: "paymentMethod", selector: (row) => row.paymentMethod },
        { name: "status", selector: (row) => row.status },
        { name: "discountApplied", selector: (row) => row.discountApplied },
        { name: "netAmount", selector: (row) => row.netAmount },
        { name: "salespersonName", selector: (row) => row.salespersonName },
        { name: "deliveryStatus", selector: (row) => row.deliveryStatus },
        { name: "createdAt", selector: (row) => row.createdAt },
    ]
    return (
        <>
            


        </>
    )
}

export default ShowSale