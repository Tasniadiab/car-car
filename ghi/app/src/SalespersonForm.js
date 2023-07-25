import React, {useState} from 'react';

const SalespersonForm = () => {


    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [employee_id, setEmployee_Id] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        const newSalesperson = {
            'first_name': first_name,
            'last_name': last_name,
            'employee_id': employee_id,
        }


        const salespeopleUrl = "http://localhost:8090/api/salespeople/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(newSalesperson),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        fetch(salespeopleUrl, fetchConfig)
            .then(response => response.json())
            .then(() => {
                setFirstName('');
                setLastName('');
                setEmployee_Id('');
            })
            .catch(e => console.error('error: ', e));
    }


    const handleFirstNameChange = (event) => {
        const value = event.target.value;
        setFirstName(value);
    }

    const handleLastNameChange = (event) => {
        const value = event.target.value;
        setLastName(value);
    }

    const handleEmployee_IdChange = (event) => {
        const value = event.target.value;
        setEmployee_Id(value);
    }


    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add a Salesperson</h1>
                    <form onSubmit={handleSubmit} id="create-bin-form">
                        <div className="form-floating mb-3">
                            <input value={first_name} onChange={handleFirstNameChange} required type="text" name="name" id="name" className="form-control" />
                            <label>First Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={last_name} onChange={handleLastNameChange} required type="text" name="name" id="name" className="form-control" />
                            <label>Last Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={employee_id} onChange={handleEmployee_IdChange} required type="number" name="employee_id" id="employee_id" className="form-control" />
                            <label>Employee_id</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SalespersonForm;
