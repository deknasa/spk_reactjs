import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Axios from 'axios'

// @mui material components
import Card from "@mui/material/Card";
// import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import RegisterLayout from "layouts/authentication/components/RegisterLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function Cover() {
  const navigate = useNavigate();
  const [full_name, setFull_name] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();
    let data

    try {
      const response = await fetch(`http://localhost:5000/user/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ full_name, email, password }),
      })
      data = await response.json()
      console.log(data)
      // if (data.user.email) {
      //   navigate('/authentication/sign-in')
      // }
      // else{
      //   alert(`${data.message}`)
      // }

      if (response.status == 200) {
        if (data.user.email) {
          navigate('/authentication/sign-in')
        }
        else {
          alert(`${data.message}`)
        }
      }
        else{
          alert(`${data.message}, ${data.error}`)
      }

    } catch (error) {
        alert(`server mati`)
      }
    };
  
  return (
    <RegisterLayout image={bgImage}>
      <Card>
        <MDBox variant="gradient" bgColor="info" borderRadius="lg" coloredShadow="success"
        mx={2} mt={-3} px={3} py={1} mb={1} textAlign="center">
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Register Your Account
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your full name, email and password to register
          </MDTypography>
        </MDBox>

        <MDBox pt={2} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput 
              required
              type="text" 
              label="Full Name" 
              value={full_name}
              onChange={(e) => setFull_name(e.target.value)}
              variant="standard" 
              fullWidth/>
            </MDBox>
            <MDBox mb={2}>
              <MDInput 
              required
              type="email" 
              label="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="standard" 
              fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput 
              required
              type="password" 
              label="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="standard" 
              fullWidth/>
            </MDBox>
            {/* <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox> */}
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" onClick={handleSignup} fullWidth>
                sign up
              </MDButton>
            </MDBox>

            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </RegisterLayout>
  );
}

export default Cover;
