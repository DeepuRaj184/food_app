import Loginpage from "./pages/Loginpage";
import SignUpPage from "./pages/Signuppage";
import Homepage from "./pages/Home";
import AccountsSetting from "./components/accounts";
import ReviewPage from "./pages/Reviews";
import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" index element={<Loginpage />}/>
            <Route path="sign-up" element={<SignUpPage />}/>
            <Route path="home" element={<Homepage />}/>
            <Route path="account" element={<AccountsSetting />}/>
            <Route path="review" element={<ReviewPage />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
