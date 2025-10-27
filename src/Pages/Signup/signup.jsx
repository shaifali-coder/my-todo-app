import React from "react"
import logo from "../../assets/Images/logo.png";
import image from "../../assets/Images/image.svg";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import "./signup.css";
import { TextField } from "@mui/material";


const Signup = () => {
const [firstName, setFirstName] = React.useState("")
const [lastName, setLastName] = React.useState("") 
const [email, setEmail] = React.useState("")
const [phoneNumber, setPhoneNumber] = React.useState("");
const [showPassword, setShowPassword] = React.useState("");
const [showConfirmPassword, setShowConfirmPassword] = React.useState("");

  const handleChange = (e,type) => {
    e.preventDefault()

  const{name,value} = e.target;
  switch(name){
    case "firstName":
    setFirstName(value);
    break;
   
    case "lastName":
    setLastName(value);
    break;
  
    case "email":
    setEmail(value);
    break;

    case "phoneNumber":
    setPhoneNumber(value);
    break;
   
    case "showPassword":
    setShowPassword(value);
    break;
  
    case "showConfirmPassword":
    showConfirmPassword(value);
    break;

    default:
    break;
}
};



  
    



    // if (e.target.name === "firstName") {
    //   setFirstName(e.target.value)
    // } else if (e.target.name === "lastName"){
    //   setLastName(e.target.value)
    // }else if(e.targate.name === "email"){
    //   setEmail(e.target.value)
    // }else if(e.targate.name === "phoneNumber"){
    //   setPhoneNumber(e.target.value)
    // }else if(e.targate.name === "showPassword"){
    //   setShowPassword(e.target.value)
    // }else if(e.targate.name === "showConfirmPassword"){
    //   setShowConfirmPassword(e.target.value)
    // }


//     
  


 function handleSubmit() {
  alert("Submitted");
}




  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="main">
        <div className="main-one">
       
          <img className="image" src={image} width={'50%'} alt="Side Image" /> 
          
        </div>
        <div className="main-two">
          <div className="logo-two">
          <img src={logo} alt="Logo" style={{ width: "20px", height: "20px", marginLeft: "60%"}} />
            <h2 className="logo">Sign Up</h2>
          </div>
          <div>

            <p className="para">Let's get you all st up so you can access your personal account.</p>

            <div className="display">
              <div className="input" >
                <TextField
                  id="outlined-read-only-input"
                  label="First Name"
                  name="firstName"
                  onChange={(e)=>handleChange(e)}
                />
              </div>
              <div className="input" >
                <TextField
                  id="outlined-read-only-input"
                  label="Last Name"
                  name="lastName"
                  onChange={(e)=>handleChange(e)}
                />
              </div>
            </div>

            <div className="display">
              <div className="input">
                <TextField
                  id="outlined-read-only-input"
                  label="Email"
                  name="email"
                  onChange={(e)=>handleChange(e)}
                />
              </div>
              <div className="input">
                <TextField
                  id="outlined-read-only-input"
                  label="Phone Number"
                  name="phoneNumber"
                  onChange={(e)=>handleChange(e)}
                />
              </div>
            </div>

            <div>
              <FormControl sx={{ mt: 2, width: '100%' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword ? 'hide the password' : 'display the password'
                        }
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  name="showPassword"
                  onChange={(e)=>handleChange(e)}
                />
              </FormControl>
            </div>

            <div>
              <FormControl sx={{ mt: 2, width: '100%' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword ? 'hide the password' : 'display the password'
                        }
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Confirm Password"
                  name="showConfirmPassword"
                  onChange={(e)=>handleChange(e)}
                />
              </FormControl>
            </div>

            <div className="input">
              <label>
                <input type="checkbox" name="option1" value="Option 1" />I agree to all
                <span className="term">Terms</span> and <span className="term">Privacy Policies</span>
              </label>
            </div>

           <button className="button" onClick={()=> handleSubmit()} 
            disabled={
            !firstName ||
            !lastName ||
            !email ||
            !phoneNumber ||
            !showPassword ||
            !showConfirmPassword 
            }
            >Create Account</button>

            <div className="para-two">Already i have an account? <span className="login">Login</span></div>

            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", color: "gray" }} >
              <div style={{ width: "200px", border: "1px solid gray", backgroundColor: "gray" }}></div>
              <div style={{ width: "130px", display: "flex", justifyContent: "center", alignItems: "center" }}>Or sign up with</div>
              <div style={{ width: "200px", border: "1px solid gray", backgroundColor: "gray" }}></div>
            </div>

            <div className="box">
              <div className="boxone"><svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z" /></svg></div>
              <div className="boxone"><svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M564 325.8C564 467.3 467.1 568 324 568C186.8 568 76 457.2 76 320C76 182.8 186.8 72 324 72C390.8 72 447 96.5 490.3 136.9L422.8 201.8C334.5 116.6 170.3 180.6 170.3 320C170.3 406.5 239.4 476.6 324 476.6C422.2 476.6 459 406.2 464.8 369.7L324 369.7L324 284.4L560.1 284.4C562.4 297.1 564 309.3 564 325.8z" /></svg></div>
              <div className="boxone">

                <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M447.1 332.7C446.9 296 463.5 268.3 497.1 247.9C478.3 221 449.9 206.2 412.4 203.3C376.9 200.5 338.1 224 323.9 224C308.9 224 274.5 204.3 247.5 204.3C191.7 205.2 132.4 248.8 132.4 337.5C132.4 363.7 137.2 390.8 146.8 418.7C159.6 455.4 205.8 545.4 254 543.9C279.2 543.3 297 526 329.8 526C361.6 526 378.1 543.9 406.2 543.9C454.8 543.2 496.6 461.4 508.8 424.6C443.6 393.9 447.1 334.6 447.1 332.7zM390.5 168.5C417.8 136.1 415.3 106.6 414.5 96C390.4 97.4 362.5 112.4 346.6 130.9C329.1 150.7 318.8 175.2 321 202.8C347.1 204.8 370.9 191.4 390.5 168.5z" /></svg></div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}
export default Signup;
