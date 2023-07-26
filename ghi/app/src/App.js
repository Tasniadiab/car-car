import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import TechnicianList from './TechnicianList';
import ServiceHistory from './ServiceHistory';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="technicians/" element={<TechnicianList technicians={props.technicians} />} />
          <Route path="service/history/" element={<ServiceHistory history= {props.history}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
