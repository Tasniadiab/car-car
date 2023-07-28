import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import TechnicianList from './TechnicianList';
import ServiceHistory from './ServiceHistory';
import ServiceList from './ServiceList';
import ServiceAppointmentForm from './ServiceAppointmentForm';
import TechnicianForm from './TechnicianForm';
import ManufacturerList from './ManufacturerList';
import AutomobileList from './AutomobilesList';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
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
