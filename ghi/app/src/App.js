import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalespersonForm from './SalespersonForm';
import SalespersonList from './SalespersonList';
function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/salespeople" element={<SalespersonList salespersons={props.salespersons} />} />
          <Route path="/salespeople/new" element={<SalespersonForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
