import React, { useState, useEffect } from 'react';

function ServiceHistory() {
    const [search, setSearch] = useState('')
    const [vin, setVin] = useState('')
    const [result, setResult] = useState('')
    const [appointments, setAppointments] = useState([])

    const getAppointmentsHistory = async () => {
        const appointmentsHistoryUrl = "http://localhost:8080/api/appointments/"
        const response = await fetch(appointmentsHistoryUrl);
        if (response.ok){
            const listHistory = await response.json();
            setAppointments(listHistory.appointments);
            console.log(listHistory)
        }




    };
    function isVip(props){
        if (props === true){
            return "Yes"
        }else{
            return "No"
        }
    }

    const handleSearch = async () => {
        const results = appointments.filter((appointment) =>
          appointment.vin.includes(search)
        );
        setResult(results);
      };


    useEffect(() => {
        getAppointmentsHistory();
    }, []);
    return (
        <>
        <div className = "row">
        <h1> Service History</h1>
        <div className="col-md-auto">
                    <div className="input-group mb-2">
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button
                            onClick={handleSearch}
                            type="button"
                            className="btn btn-outline-secondary">
                            Search VIN
                        </button>
                    </div>
                </div>
        <span className="square border-top"></span>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>VIN</th>
                    <th>Is VIP?</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Technician</th>
                    <th>Reason</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {appointments.map(appointment => {
                    return(
                        <tr key = {appointment.href}>
                            <td>{appointment.vin}</td>
                            <td>{isVip(appointment.vip)}</td>
                            <td>{appointment.customer}</td>
                            <td>{appointment.date}</td>
                            <td>{appointment.time }</td>
                            <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
                            <td>{appointment.reason}</td>
                            <td>{appointment.status}</td>
                        </tr>
                    )
                }
                    )}
            </tbody>
        </table>
        </div>
        </>
    )
}

export default ServiceHistory;
