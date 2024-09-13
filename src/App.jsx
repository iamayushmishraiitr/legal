import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./pages/auth/Login.jsx";
import SignUp from "./pages/auth/Signup.jsx"; 
import AppLayout from "./component/global/AppLayout.jsx"; 
import Wallet from "./pages/Wallet/Wallet.jsx";
import ClubProfile from "./pages/clubProfile/ClubProfile.jsx"; 
import ScanHistory from "./pages/scanHistory/ScanHistory.jsx";
import Analysis from "./pages/Analysis/Analysis.jsx";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route element={<AppLayout />}> 
        <Route path="/scan-history" element={<ScanHistory />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/club-profile" element={<ClubProfile />} />
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
