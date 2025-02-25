import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
