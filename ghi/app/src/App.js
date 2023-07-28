import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import SalespersonForm from "./SalespersonForm";
import SalespersonList from "./SalespersonList";
import CustomerForm from "./CustomerForm";
import CustomerList from "./CustomerList";
import SalesRecordForm from "./SalesRecordForm";
import SalesRecordList from "./SalesRecordList";
import SalesPersonHistory from "./SalesPersonHistory";
import ManufacturerForm from "./ManufacturerForm";
import VehicleModelForm from "./VehicleModelForm";
import AutomobileForm from "./AutomobileForm";
import VehicleModelList from "./VehicleModelList";
import TechnicianList from './TechnicianList';
import ServiceHistory from './ServiceHistory';
import ServiceList from './ServiceList';
import ServiceAppointmentForm from './ServiceAppointmentForm';
import TechnicianForm from './TechnicianForm';
import ManufacturerList from './ManufacturerList';
import AutomobileList from './AutomobilesList';

function App(props) {
function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/salespeople"
            element={<SalespersonList salespersons={props.salespersons} />}
          />
          <Route path="/salespeople/create" element={<SalespersonForm />} />
          <Route path="/customer/create" element={<CustomerForm />} />
          <Route
            path="/customer"
            element={<CustomerList customers={props.customers} />}
          />
          <Route path="/salesrecord" element={<SalesRecordForm />}></Route>
          <Route
            path="/sales"
            element={<SalesRecordList salespersons={props.sales_record} />}
          />
          <Route path="/saleshistory" element={<SalesPersonHistory />} />
          <Route path="/manufacturers/create" element={<ManufacturerForm />} />
          <Route path="/models/create" element={<VehicleModelForm />} />
          <Route path="/automobiles/create" element={<AutomobileForm />} />
          <Route path="/models" element={<VehicleModelList/>} ></Route>
          <Route path="manufacturers/" element={<ManufacturerList manufacturers={props.manufacturers} />} />
          <Route path="automobiles/" element={<AutomobileList automobiles={props.autombiles} />} />
          <Route path="technicians/" element={<TechnicianList technicians={props.technicians} />} />
          <Route path="/technician/new" element={<TechnicianForm />} />
          <Route path="appoinments/" element={<ServiceList list= {props.list}/>} />
          <Route path="/appoinments/new" element={<ServiceAppointmentForm />} />
          <Route path="appoinments/history/" element={<ServiceHistory history= {props.history}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
