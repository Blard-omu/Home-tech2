/** @format */
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import "./styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { StateProvider } from "./context/states";
import CreateAccount from "./components/CreateAccount";
import PrivateRoute from "./utils/PrivateRoute";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <StateProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/create" element={<CreateAccount />} />

            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </StateProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
