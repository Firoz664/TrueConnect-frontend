import { Link, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Login from "../pages/login/Login";
import Registration from "../pages/SignUp";
import RegistrationLayout from "../layout/registrationLayout/RegistrationLayout";
import SignUp from "../pages/SignUp";
import LandingpageLayout from "../layout/landingPagelayout/LandingpageLayout";
import HomePageLayout from "../layout/homePageLayout/HomePageLayout";
import Otp from "../pages/otp/Otp";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<LandingpageLayout />}
        errorElement={
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
            }}
          >
            <div style={{display:'flex',flexDirection:'column',alignItems:"center",gap:".22rem"}}>
              <h6 sx={{fontsize:"1.8rem",fontWeight:"500"}}>Error occured</h6>
            <Link style={{color:"blue",textDecoration: "underline",}} to="/">
                Go to Home
            </Link>
            </div>
          </div>
        }
        >
        </Route>
      
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<RegistrationLayout />}>
        <Route path="" element={<SignUp />} />
        <Route path="otp" element={<Otp />} />
      </Route>
        <Route path="/home" element={<HomePageLayout />} />
        <Route path="/LandingpageLayout" element={<LandingpageLayout />} />


       

        
      
    </>,
  ),
)
            
