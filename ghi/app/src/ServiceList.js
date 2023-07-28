import React, { useState, useEffect } from "react";

function ServiceList(){
    const [appointments, setAppointments]  = useState([]);

    const getAppointments = async () => {
        const appointmentsUrl = "http://localhost:8080/api/appointments/"
        const response = await fetch(appointmentsUrl);
        if (response.ok){
            const listAppointment = await response.json();
            const created = listAppointment.appointments.filter((appointment) => appointment.status === "created");
            console.log(created)
            setAppointments(created);

        }
    }

    function isVip(props){
        if (props === true){
            return "Yes"
        }else{
            return "No"
        }
    }

    useEffect(() =>{
        getAppointments();
    }, []);
    const handleCancel = async(id) =>{
        const cancelUrl = `http://localhost:8080/api/appointments/${id}/cancel/`;
        const fetchConfig = {
            method :"put",
            headers : {
                'Content-Type': 'application/json'
            },
        };
        const response = await fetch(cancelUrl, fetchConfig);
        if (response.ok) {
            window.location.reload();
        }
    }


    const handleFinish = async(id, event) =>{
        const finishUrl = `http://localhost:8080/api/appointments/${id}/finish/`;
        const fetchConfig = {
            method :"put",
            headers : {
                'Content-Type': 'application/json'
            },
        };
        const response = await fetch(finishUrl, fetchConfig);
        if (response.ok) {
            window.location.reload();
        };
    }
    return(
        <>
        <div className = "row">
        <h1>Service Appointments</h1>
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
                        <td>{appointment.time}</td>
                        <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
                        <td>{appointment.reason}</td>
                        <td><button type="button" onClick={(e) => handleCancel(appointment.id)}>Cancel</button>
                        <button  type="button" onClick={(e) => handleFinish(appointment.id)}>Finish</button></td>
                    </tr>
            )
                })}
            </tbody>
        </table>
        </div>
        </>
    );
};

export default ServiceList;
