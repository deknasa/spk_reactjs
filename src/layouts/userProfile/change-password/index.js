import { userURL } from "URL/url";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Grid, Card, Icon } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";

function ChangePassword() {
    const navigate = useNavigate();
    const { userId } = useParams()
    console.log(userId);

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [fullName, setFullName] = useState("");

    const GetUser = async() => {
        useEffect(() => {
          fetch(`${userURL}/getUserById/${userId}`)
            .then(response => response.json())
            .then(data => {
                setFullName(data.user.full_name)
            })
            .catch(error => console.error(error)); 
          },[]
        );
      }
    GetUser()
  
    const HandleChangePassword = async event => {
        event.preventDefault();
        let data

        const response = await fetch(`${userURL}/changePassword/${userId}`, {
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json',
                // 'Authentication': Cookies.get("authentication") 
            },
            body: JSON.stringify({ 
                oldPassword, 
                newPassword, 
                confirmPassword }),
            })
        
            data = await response.json();
            console.log(data)
            console.log(response.status);

            if (oldPassword || newPassword || confirmPassword != null) {
                if (response.status == 200) {
                    navigate('/user-profile')
                    alert(`Congratulation ${fullName}, your password has been successfully changed!`)
                }
                else {
                    alert(`${data.message}`)
                }
            }
            else{
                alert(`${data.message}, ${data.error}`)
            }
        }

    return(
        <>
        <DashboardLayout>
            <DashboardNavbar />                
            <Grid 
            item xs={12}
            mt={8}
            >
                <Card>
                    <MDBox
                    mx={2}
                    mt={-3}
                    py={3}
                    px={2}
                    variant="gradient"
                    bgColor="info"
                    borderRadius="lg"
                    coloredShadow="info"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    >
                        <MDTypography variant="h6" color="white">
                            Change Your Password!
                        </MDTypography>
                    </MDBox>
                        
                    <MDBox pt={7} pb={3} px={3} mx={3}>
                        <MDBox component="form" role="form">
                            <MDBox mb={2} display="flex" alignItems="center" justifyContent="space-between">
                                <MDBox lineHeight={1} mb={1} ml={1} width="20%">
                                    <MDTypography 
                                    variant="button"
                                    fontWeight="medium">
                                        Old Password :
                                    </MDTypography>
                                </MDBox>
                                <MDInput 
                                required
                                type="password"
                                onChange={(e) => setOldPassword(e.target.value)}
                                label="Old Password" fullWidth />
                            </MDBox>
                            <MDBox mb={2} display="flex" alignItems="center" justifyContent="space-between">
                                <MDBox lineHeight={1} mb={1} ml={1} width="20%">
                                    <MDTypography 
                                    variant="button"
                                    fontWeight="medium">
                                        New Password :
                                    </MDTypography>
                                </MDBox>
                                <MDInput 
                                required
                                type="password"
                                onChange={(e) => setNewPassword(e.target.value)}
                                label="New Password" fullWidth />
                            </MDBox>
                            <MDBox mb={2} display="flex" alignItems="center" justifyContent="space-between">
                                <MDBox lineHeight={1} mb={1} ml={1} width="20%">
                                    <MDTypography 
                                    variant="button"
                                    fontWeight="medium">
                                        Confirm New Password :
                                    </MDTypography>
                                </MDBox>
                                <MDInput 
                                required
                                type="password"  
                                onChange={(e) => setConfirmPassword(e.target.value)} 
                                label="Confirm New Password" fullWidth />
                            </MDBox>

                            <MDBox 
                            mt={4} 
                            mb={1}
                            display="flex"
                            justifyContent="space-between"
                            >
                                <MDButton 
                                variant="gradient" 
                                color="info" 
                                href="/user-profile"
                                >
                                    <Icon fontSize="small">arrow_back</Icon>
                                    BACK
                                </MDButton>
                                <MDButton 
                                variant="gradient" 
                                color="info" 
                                onClick={HandleChangePassword}
                                >
                                    <Icon fontSize="small">save</Icon>
                                    SAVE
                                </MDButton>
                                
                            </MDBox>

                        </MDBox>
                    </MDBox>
                </Card>
            </Grid>


        </DashboardLayout>
        </>
    )
}

export default ChangePassword