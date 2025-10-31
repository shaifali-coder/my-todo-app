import React from "react"
import "./login.css";
import logo from "../../assets/Images/logo.png";
import image from "../../assets/Images/login.svg";

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from "@mui/material/Button";

import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { TextField } from "@mui/material";

import { useFormik } from "formik";
import * as Yup from "yup";



const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

 
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),

    onSubmit: (values) => {
      alert(`Login Successful!\n\n${JSON.stringify(values, null, 2)}`);
      console.log("Form data:", values);
    },
  });


    return(
        <>
         
      <div className="login-page">
        <form onSubmit={formik.handleSubmit}>
        <div className="form-page">
          <div className="logo-loginfile">
          <img className="logo-image"src={logo} alt="Logo" />
            <h2 className="logo-name">Login</h2>
          </div>
          <div><p className="top-linesentence">Login to access your Travelwise account.</p></div>

           
           <div className="email">
                <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </div>
                
              
             

            <div>
              <FormControl
              sx={{ mt: 2, width: "100%" }}
              variant="outlined"
              error={formik.touched.password && Boolean(formik.errors.password)}
            >
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            {formik.touched.password && formik.errors.password && (
              <div style={{ color: "red", fontSize: "0.8rem", marginTop: "4px" }}>
                {formik.errors.password}
            </div>
             )}
             </div>

           

            <div className="checkbox">
              <label>
                <input type="checkbox" name="option1" value="Option 1" />Remember me
                <span className="forgate-password"> Forgate Password</span>
              </label>
            </div>

           
            <button className="login-button"
            type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2, borderRadius: "8px", textTransform: "none" }}
            >
               Login
            </button>

  
        <div className="account">
              Don't have an account?{" "}
              <span className="redcolor-signup">Sign up</span>
            </div>

            <div className="horizontal-line-socialmedia-icon">
              <div className="horizontal-line"></div>
              <div className="horizontal-content">Or login with</div>
              <div  className="horizontal-line"></div>
            </div>
             
           
            <div className="line-social-media">
              <div className="center-social-media-icon"><svg className="social-media-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z" /></svg></div>
              <div className="center-social-media-icon"><svg className="social-media-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M564 325.8C564 467.3 467.1 568 324 568C186.8 568 76 457.2 76 320C76 182.8 186.8 72 324 72C390.8 72 447 96.5 490.3 136.9L422.8 201.8C334.5 116.6 170.3 180.6 170.3 320C170.3 406.5 239.4 476.6 324 476.6C422.2 476.6 459 406.2 464.8 369.7L324 369.7L324 284.4L560.1 284.4C562.4 297.1 564 309.3 564 325.8z" /></svg></div>
              <div className="center-social-media-icon">

                <svg className="social-media-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M447.1 332.7C446.9 296 463.5 268.3 497.1 247.9C478.3 221 449.9 206.2 412.4 203.3C376.9 200.5 338.1 224 323.9 224C308.9 224 274.5 204.3 247.5 204.3C191.7 205.2 132.4 248.8 132.4 337.5C132.4 363.7 137.2 390.8 146.8 418.7C159.6 455.4 205.8 545.4 254 543.9C279.2 543.3 297 526 329.8 526C361.6 526 378.1 543.9 406.2 543.9C454.8 543.2 496.6 461.4 508.8 424.6C443.6 393.9 447.1 334.6 447.1 332.7zM390.5 168.5C417.8 136.1 415.3 106.6 414.5 96C390.4 97.4 362.5 112.4 346.6 130.9C329.1 150.7 318.8 175.2 321 202.8C347.1 204.8 370.9 191.4 390.5 168.5z" /></svg></div>
                 </div>
                 </div>
                  </form>
          

          <div className="image-page">
            <img className="image" src={image} alt="Side Image" /> 
          </div>
        </div> 

      </>
    );
};

export default Login;





























