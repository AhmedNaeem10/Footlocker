import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import FormComponent from "./components/FormComponent";
import Dashboard from './components/Dashboard';


function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<FormComponent />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
