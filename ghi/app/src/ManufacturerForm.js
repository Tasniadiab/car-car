import React, { useState } from "react";

const ManufacturerForm = () => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newManufacturer = {
      name: name,
    };

    const manufacturerUrl = "http://localhost:8100/api/manufacturers/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(newManufacturer),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(manufacturerUrl, fetchConfig)
      .then((response) => response.json())
      .then(() => {
        setName("");
      })
      .catch((e) => console.error("error: ", e));
  };

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create a manufacturer</h1>
          <form onSubmit={handleSubmit} id="create-bin-form">
            <div className="form-floating mb-3">
              <input
                value={name}
                onChange={handleNameChange}
                required
                type="text"
                name="name"
                id="name"
                className="form-control"
              />
              <label>Manufacturer Name</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManufacturerForm;
