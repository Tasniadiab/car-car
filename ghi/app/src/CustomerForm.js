import React, {useState} from 'react';

const CustomerForm = () => {


    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phone_number, setPhone_Number] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        const newCustomer = {
            'first_name': first_name,
            'last_name': last_name,
            'address': address,
            'phone_number': phone_number,
        }


        const customerUrl = "http://localhost:8090/api/customers/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(newCustomer),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        fetch(customerUrl, fetchConfig)
            .then(response => response.json())
            .then(() => {
                setFirstName('');
                setLastName('');
                setAddress('');
                setPhone_Number('');
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

    const handleAddressChange = (event) => {
        const value = event.target.value;
        setAddress(value);
    }

    const handlePhone_NumberChange = (event) => {
        const value = event.target.value;
        setPhone_Number(value);
    }


    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add a Customer</h1>
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
                            <input value={address} onChange={handleAddressChange} required type="text" name="address" id="address" className="form-control" />
                            <label>Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={phone_number} onChange={handlePhone_NumberChange} required type="tel" name="phone_number" id="phone_number" className="form-control" />
                            <label>Phone Number</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CustomerForm;
