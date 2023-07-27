import React, {useEffect, useState } from 'react'

const VehicleModelForm = () => {


  const [name, setName] = useState('')
  const [picture_url, setPicture_Url] = useState('')
  const [manufacturer_id, setManufacturer_Id] = useState('')
  const [manufacturers, setManufacturers] = useState([])


  useEffect(() => {
      const manufacturersUrl = 'http://localhost:8100/api/manufacturers/'
      fetch(manufacturersUrl)
          .then(response => response.json())
          .then(data => setManufacturers(data.manufacturers ))
          .catch(e => console.error('error: ', e))
  }, [])

  const handleSubmit = (event) => {
      event.preventDefault()
      const newVehicleModel = {
          'name': name,
          'picture_url': picture_url,
          'manufacturer_id': manufacturer_id,
      }

      const modelUrl = "http://localhost:8100/api/models/"
      const fetchConfig = {
          method: "post",
          body: JSON.stringify(newVehicleModel),
          headers: {
              'Content-Type': 'application/json',
          },
      }

      fetch(modelUrl, fetchConfig)
          .then(response => response.json())
          .then(() => {
              setName('')
              setPicture_Url('')
              setManufacturer_Id('')
          })
          .catch(e => console.error('error: ', e));
  }

    const handleNameChange = (event) => {
        const value = event.target.value
        setName(value)
    }
    const handlePicture_UrlChange = (event) => {
        const value = event.target.value
        setPicture_Url(value)
    }
    const handleManufacturer_IdChange = (event) => {
        const value = event.target.value
        setManufacturer_Id(value)
    }
        return (
          <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1>Create a vehicle model</h1>
                <form onSubmit={handleSubmit} id="create-Vehicle-Model-form">

                  <div className="form-floating mb-3">
                    <input value={name} onChange={handleNameChange} placeholder="Name" required type="text" name="Name" id="Name" className="form-control" />
                    <label htmlFor="Name">Name</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input value={picture_url} onChange={handlePicture_UrlChange} placeholder="picture_url"required type="url" name="picture_url" id="picture_url" className="form-control" />
                    <label htmlFor="picture url">picture Url</label>
                  </div>

                  <div className="mb-3">
                    <select value={manufacturer_id} onChange={handleManufacturer_IdChange} required name="manufacturer" id="manufacturer" className="form-select">
                    <option value="">Choose a manufacturer</option>
                    {manufacturers.map(manufacturer_id => {
                        return (
                        <option key={manufacturer_id.id} value={manufacturer_id.id }>{manufacturer_id.name}</option>
                    );
                  })}
                    </select>
                    </div>

                  <button className="btn btn-primary">Create</button>
                </form>
              </div>
            </div>
          </div>
        );
      }
    export default VehicleModelForm
