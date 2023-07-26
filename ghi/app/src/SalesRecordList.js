import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SalesRecordList() {
    const [sales_records, setSalesRecord] = useState([])

    const getData = async () => {
        const response = await fetch('http://localhost:8090/api/sales')

        if (response.ok) {
            const data = await response.json();
            setSalesRecord(data.sales)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <br></br>
            <h1>Sales Records</h1>
            <br></br>
            <table className="table table-striped shadow p-3 mb-5 bg-white rounded">
                <thead>
                    <tr>
                        <th>Salesperson Employee ID</th>
                        <th>Salesperson Name</th>
                        <th>Customer</th>
                        <th>VIN</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {sales_records.map(sales_records => {
                        return (
                            <tr key={sales_records.id}>
                                <td>{sales_records.salesperson.employee_id}</td>
                                <td>{sales_records.salesperson.first_name} {sales_records.salesperson.last_name}</td>
                                <td>{sales_records.customer.first_name} {sales_records.customer.last_name}</td>
                                <td>{sales_records.automobile.vin}</td>
                                <td>{sales_records.price}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    )
}
export default SalesRecordList
