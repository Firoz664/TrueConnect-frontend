import { Link, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Login from "../pages/login/Login";
import Registration from "../pages/SignUp";
import RegistrationLayout from "../layout/registrationLayout/RegistrationLayout";
import SignUp from "../pages/SignUp";
import LandingpageLayout from "../layout/landingPagelayout/LandingpageLayout";
import HomePageLayout from "../layout/homePageLayout/HomePageLayout";
import Otp from "../pages/otp/Otp";
import Testimonial from "../layout/landingPagelayout/navComponents/Testimonial";
import Pricing from "../layout/landingPagelayout/navComponents/Pricing";
import Blog from "../layout/landingPagelayout/navComponents/Blog";
import Product from "../layout/landingPagelayout/navComponents/Product";


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
        <Route path="/signup" element={<SignUp />} />
        <Route path="otp" element={<Otp />} />
      </Route>
        <Route path="/home" element={<HomePageLayout />} />
        <Route path="/LandingpageLayout" element={<LandingpageLayout />} />
        <Route path="/testimonial" element={<Testimonial/>} />
        <Route path="/prcing" element={<Pricing/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/product" element={<Product/>} />



       

        
      
    </>,
  ),
)
            
