import Axios from 'axios'
import { userURL } from "URL/url";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Grid, Card, Icon } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";

function EditProfile() {
    const navigate = useNavigate();
    const { userId } = useParams()
    console.log(userId);

    const [fullName, setFullName] = useState("");

    const [email, setEmail] = useState("");

    const GetUser = async() => {
        useEffect(() => {
          fetch(`${userURL}/getUserById/${userId}`)
            .then(response => response.json())
            .then(data => {
                setFullName(data.user.full_name)
                setEmail(data.user.email)
            })
            .catch(error => console.error(error));
          },[]
        );
      }
    GetUser()
    // console.log(kriteria);

    const HandleEditProfile = async event => {
        event.preventDefault();

        const formData = new FormData()
        formData.append('full_name', fullName)
        formData.append('email', email)

        Axios.put(`${userURL}/updateUser/${userId}`, formData, {
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => {
            console.log(res.data);
            const dataUpdate = res.data
            if (dataUpdate) {
                alert(`Congratulations ${fullName}, your profile has been successfully updated!`)
                navigate('/user-profile')
                // window.location.reload(false);
            }
            else {
                alert(`Ops.. your profile failed to update`);
            }
        })
        .catch(e => {
            console.log(e);
        })  
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
                            EDIT PROFILE
                        </MDTypography>
                    </MDBox>
                        
                    <MDBox pt={7} pb={3} px={3} mx={3}>
                        <MDBox component="form" role="form">
                            <MDBox mb={2} display="flex" alignItems="center" justifyContent="space-between">
                                <MDBox lineHeight={1} mb={1} ml={1} width="15%">
                                    <MDTypography 
                                    variant="button"
                                    fontWeight="medium">
                                        Full Name :
                                    </MDTypography>
                                </MDBox>
                                <MDInput 
                                required
                                type="text"
                                value={fullName} 
                                onChange={(e) => setFullName(e.target.value)}
                                label="Full Name" fullWidth />
                            </MDBox>
                            <MDBox mb={2} display="flex" alignItems="center" justifyContent="space-between">
                                <MDBox lineHeight={1} mb={1} ml={1} width="15%">
                                    <MDTypography 
                                    variant="button"
                                    fontWeight="medium">
                                        Email :
                                    </MDTypography>
                                </MDBox>
                                <MDInput 
                                required
                                type="text" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                label="Email" fullWidth />
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
                                onClick={HandleEditProfile}
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

export default EditProfile