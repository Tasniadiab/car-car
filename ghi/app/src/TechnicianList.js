import React, { useState, useEffect } from 'react';

function TechnicianList () {
    const [technicians, setTechnicians] = useState([]);
    const getTechnicians = async () => {
        const techniciansUrl = `http://localhost:8080/api/technicians/`;
        const response =  await fetch(techniciansUrl);
        if (response.ok){
            const listTechnicians = await response.json();
            setTechnicians(listTechnicians.technicians);
            console.log(listTechnicians)
        }
    }
    useEffect(() =>{
        getTechnicians();
    }, []);
    return (
        <>
        <div className = "row">
            <h1>Technicians</h1>
            <span className="square border-top"></span>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Employee No.</th>
                        <th> First Name </th>
                        <th>Last Name </th>
                    </tr>
                </thead>
                <tbody>
                    {technicians.map(technician => {
                        return (
                            <tr key ={technician.employee_id}>
                                <td>{technician.employee_id}</td>
                                <td>{technician.first_name}</td>
                                <td>{technician.last_name}</td>

                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
        </>
    );


};




export default TechnicianList;
