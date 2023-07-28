import React, { useEffect, useState }  from 'react'

function VehicleModelList() {
  const [models, setModels] = useState([]);

  useEffect(() => {
          fetch('http://localhost:8100/api/models/')
              .then(response => response.json())
              .then(data => {
                  setModels(data.models);
              })
              .catch(e => console.error('error: ', e));
      }, [])

  return (
    <>
    <h1>Models</h1>
    <span className="square border-top"></span>
    <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Manufacturer</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {models.map(model => {
            return (
              <tr key={model.id}>
                <td>{model.name}</td>
                <td>{model.manufacturer.name}</td>
                <td><img src={model.picture_url} height= "100px" width="100px" /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </>
    );
  }

  export default VehicleModelList
