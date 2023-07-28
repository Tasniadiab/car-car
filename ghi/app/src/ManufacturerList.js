import React, {useState, useEffect} from "react";

function ManufacturerList () {
    const [manufacturer, setManufacturer] = useState([]);
    const getManufacturer = async () => {
        const manufacturerUrl = `http://localhost:8100/api/manufacturers/`;
        const response = await fetch(manufacturerUrl);
        if (response.ok){
            const listManufacturers = await response.json();
            setManufacturer(listManufacturers.manufacturers);
            console.log(listManufacturers)
        }
    }
    useEffect(() =>{
        getManufacturer();
    }, []);
    return(
        <>
        <div className = "row">
        <h1>Manufacturers</h1>
        <span className="square border-top"></span>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Manufacturers</th>
                </tr>
            </thead>
            <tbody>
            {manufacturer.map(manu => {
                return(
                    <tr key = {manu.id}>
                        <td>{manu.name}</td>
                    </tr>
            )
                })}
            </tbody>
        </table>
        </div>
        </>
    );
};
export default ManufacturerList;
