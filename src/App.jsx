import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/Signup"; 
import AppLayout from "./component/global/appLayout"; 
import Wallet from "./pages/wallet/Wallet";
import ClubProfile from "./pages/clubProfile/ClubProfile"; 
import ScanHistory from "./pages/scanHistory/ScanHistory";
import Analysis from "./pages/analysis/Analysis";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<AppLayout />}> 
          <Route path="/scan-history" element={<ScanHistory/>} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/club-profile" element={<ClubProfile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
