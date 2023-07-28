import React, {useState, useEffect} from "react";

function AutomobileList () {
    const [automobiles, setAutomobiles] = useState([]);

    const getAutomobiles = async () => {
        const automobilesUrl = 'http://localhost:8100/api/automobiles/'
        const response = await fetch(automobilesUrl);
        if (response.ok) {
            const listAutomobile = await response.json();
            setAutomobiles(listAutomobile.autos);
            console.log(listAutomobile)
        }
    }

    function isSold(props){
        if (props === true){
            return "Yes"
        }else{
            return "No"
        }
    }

    useEffect(() =>{
        getAutomobiles();
    }, []);
    return (
        <>
        <div className = "row">
            <h1>Automobiles</h1>
            <span className="square border-top"></span>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th> Color </th>
                        <th>Year</th>
                        <th>Model</th>
                        <th>Manufacturer</th>
                        <th>Sold</th>
                    </tr>
                </thead>
                <tbody>
                    {automobiles.map(auto => {
                        return (
                            <tr key ={auto.vin}>
                                <td>{auto.vin}</td>
                                <td>{auto.color}</td>
                                <td>{auto.year}</td>
                                <td>{auto.model.name}</td>
                                <td>{auto.model.manufacturer.name}</td>
                                <td>{isSold(auto.sold)}</td>

                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
        </>
    );
}

export default AutomobileList;
