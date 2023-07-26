import React, { useState, useEffect } from 'react';

function CustomerList () {
    const [customers, setCustomers] = useState([]);
    const getCustomers = async () => {
        const CustomersUrl = "http://localhost:8090/api/customers";
        const response =  await fetch(CustomersUrl);
        if (response.ok){
            const listCustomer = await response.json();
            setCustomers(listCustomer.customers);
            console.log(listCustomer)
        }
    }

    useEffect(() =>{
        getCustomers();
    }, []);

    return (
        <>
        <div className = "row">
            <h1>Customers</h1>
            <span className="square border-top"></span>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th> First Name </th>
                        <th> Last Name </th>
                        <th> Phone Number </th>
                        <th> Address </th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer => {
                        return (
                            <tr key ={customer.id}>
                                <td>{customer.first_name}</td>
                                <td>{customer.last_name}</td>
                                <td>{customer.phone_number}</td>
                                <td>{customer.address}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
        </>
    );


};

export default CustomerList
