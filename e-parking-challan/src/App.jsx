import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from './pages/Home/Home';
import { History } from "./pages/History/History";
import { Login } from "./pages/Login/Login";
import { Signup } from "./pages/Signup/Signup";
import { Report } from "./pages/Report/Report";
import { Landing } from "./pages/Landing/Landing";
import { LoginPage } from "./pages/LoginPage/LoginPage"
import { PaymentFormPage } from "./pages/PaymentFormPage/PaymentFormPage"
import "./App.css"

const App = () => {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/landing" element={<Landing />} />
                    <Route path="/report" element={<Report />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/loginpage" element={<LoginPage />} />
                    <Route path="/paymentformpage" element={<PaymentFormPage />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App