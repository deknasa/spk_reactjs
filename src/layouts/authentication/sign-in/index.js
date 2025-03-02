import { useState } from "react";
import { userURL } from "../../../URL/url"
import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
// import Switch from "@mui/material/Switch";
// import MuiLink from "@mui/material/Link";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import LoginLayout from "layouts/authentication/components/LoginLayout";
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import Cookies from "js-cookie";

function Basic() {
  // const [rememberMe, setRememberMe] = useState(false);
  // const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    let data

    try {
      const response = await fetch(`${userURL}/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
      })
      data = await response.json();
      console.log(data)
      
      if (email || password != "") {
        if (response.status == 200) {
          const token = data.token
          Cookies.set(
            "authentication", 
            token, 
            // {expires: 1/48} 
          )
          navigate("/dashboard")
        } else {
          alert(`${data.message}`)
        }
      } else{
          alert(`email dan password wajib diisi`)
      }
    } catch (error) {
        alert("Server Mati!")
    }
  };

  return (
    <LoginLayout image={bgImage}>
      <Card>
        <MDBox variant="gradient" bgColor="info" borderRadius="lg" coloredShadow="info"
        mx={2} mt={-3} p={2} mb={1} textAlign="center">
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
          Please enter your email and password to login !
          </MDTypography>
        </MDBox>
        
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput 
              required
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              label="Email" 
              fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput 
              required
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              label="Password" 
              fullWidth />
            </MDBox>
            {/* <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox> */}
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" onClick={onSubmit} fullWidth>
                sign in
              </MDButton>
            </MDBox>

            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </LoginLayout>
  );
}

export default Basic;
