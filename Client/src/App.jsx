import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  UserSignUp,
  OtpVerify,
  ForgotPassword,
  ResetPassword,
  FourOFour,
} from "./pages/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/auth" element={<UserSignUp />} />
          <Route path="/user/register/otp" element={<OtpVerify />} />
          <Route path="/user/forgot/email" element={<ForgotPassword />} />
          <Route path="/user/forgot/otp" element={<OtpVerify />} />
          <Route path="/user/forgot/reset" element={<ResetPassword />} />
          <Route path="/error/404" element={<FourOFour />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
