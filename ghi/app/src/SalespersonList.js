import React, { useState, useEffect } from 'react';

function SalespersonList () {
    const [salespersons, setSalepersons] = useState([]);
    const getSalepersons = async () => {
        const SalespersonsUrl = "http://localhost:8090/api/salespeople/";
        const response =  await fetch(SalespersonsUrl);
        if (response.ok){
            const listSalesPersons = await response.json();
            setSalepersons(listSalesPersons.salespeople);
            console.log(listSalesPersons)
        }
    }

    useEffect(() =>{
        getSalepersons();
    }, []);

    return (
        <>
        <div className = "row">
            <h1>Salespeople</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th> Employee ID </th>
                        <th> First Name </th>
                        <th> Last Name </th>
                    </tr>
                    <span className="square border-top"></span>
                </thead>
                <tbody>
                    {salespersons.map(salespeople => {
                        return (
                            <tr key ={salespeople.employee_id}>
                                <td>{salespeople.employee_id}</td>
                                <td>{salespeople.first_name}</td>
                                <td>{salespeople.last_name}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
        </>
    );


};

export default SalespersonList
