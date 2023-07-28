import React, {useRef, useState, useEffect} from 'react';

const ServiceAppointmentForm = () => {

    const[vin, setVin] = useState('');
    const[customer, setCustomer] = useState('');
    const[date, setDate] = useState('');
    const dateInputRef = useRef(null);
    const[time, setTime] = useState('');
    const timeInputRef = useRef(null);
    const[technician, setTechnician] = useState('');
    const[reason, setReason] = useState('');
    const [technicians, setTechnicians] = useState([]);



        const handleSubmit = async (event) => {
            event.preventDefault();

            const dateTime1 = new Date(date + 'T' + time).toISOString()
            const dateTime = dateTime1.substring(0, dateTime1.length-1)

            const data = {
            "vin" : vin,
            "customer" : customer,
            "date_time" : dateTime,
            "reason" : reason,
            "technician" :technician,
            }

            const appointmentUrl = 'http://localhost:8080/api/appointments/';
            const fetchConfig = {
                method: "post",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
            };

            const response = await fetch(appointmentUrl, fetchConfig);
            if (response.ok) {
                setVin('')
                setCustomer('')
                setDate('')
                setTime('')
                setReason('')
                setTechnician('')
            }
        }




    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    }

    const handleCustomerChange = (event) =>{
        const value = event.target.value;
        setCustomer(value);
    }


    const handleChange = (event) => {
        setDate(event.target.value);
    };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    const handleTechnicianChange = (event) => {
        const value = event.target.value;
        setTechnician(value);
    };

    const fetchData = async () => {
        const techniciansUrl = "http://localhost:8080/api/technicians/";

        const response = await fetch(techniciansUrl);
        if (response.ok){
            const data = await response.json();
            setTechnicians(data.technicians)
            console.log(data.technicians)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])


    const handleReasonChange = (event) => {
        const value = event.target.value;
        setReason(value);
    }




    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Make an Appoinment</h1>
                    <form onSubmit={handleSubmit} id="create-bin-form">
                        <div className="form-floating mb-3">
                            <input value={vin} onChange={handleVinChange} required type="text" name="name" id="name" className="form-control" />
                            <label>Vin</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={customer} onChange={handleCustomerChange} required type="text" name="name" id="name" className="form-control" />
                            <label>Customer</label>
                        </div>
                        <div>
                        <input
                            type="date"
                            onChange={handleChange}
                            ref={dateInputRef}
                        />
                        <p>Selected Date: {date}</p>
                        </div>
                        <div>
                        <input
                            type="time"
                            onChange={handleTimeChange}
                            ref={timeInputRef}
                        />
                        <p>Selected Date: {time}</p>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleTechnicianChange} name="technician" id="technician" className="form-select" value={technician}>
                                <option value="">Choose a technician</option>
                                {technicians.map(technician => {
                                    return (
                                        <option key={technician.id} value = {technician.id}>
                                            {technician.first_name}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={reason} onChange={handleReasonChange} required type="text" name="name" id="name" className="form-control" />
                            <label>Reason</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ServiceAppointmentForm;
