import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { subkriteriaURL } from "URL/url";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Grid, Card, Icon } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import Cookies from "js-cookie";

function AddSubkriteria() {
    const navigate = useNavigate();
    const {kodeKriteria} = useParams()

    const kode_kriteria = kodeKriteria
    const [nama_subkriteria, setNamaSubkriteria] = useState("");
    const [bobot_subkriteria, setBobotSubkriteria] = useState("");

    const HandleAddSubkriteria = async event => {
        event.preventDefault();
        let data

        const response = await fetch(`${subkriteriaURL}/createSubkriteria`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authentication': Cookies.get("authentication") 
            },
            body: JSON.stringify({ nama_subkriteria, kode_kriteria, bobot_subkriteria }), 
        })
        data = await response.json();
        console.log(data);
        if (nama_subkriteria || kode_kriteria || bobot_subkriteria != "") {
            if (response.status == 201) {
                // const kodeKriteria = data.kriteria.kode_kriteria
                navigate('/subkriteria')
                alert(`Berhasil menambahkan data subkriteria dengan id ${data.subkriteria.id}`)
            } else {
                alert(`${data.message} ${data.error}`)
            }
        } else{
            alert(`${data.message} ${data.error}`)
        }
    }

    return(
        <>
        <DashboardLayout>
            <DashboardNavbar />                
            <Grid item xs={12} mt={8}>
                <Card>
                    <MDBox mx={2} mt={-3} py={3} px={2} variant="gradient" 
                    bgColor="info" borderRadius="lg" coloredShadow="info" 
                    display="flex" alignItems="center" justifyContent="space-between">
                        <MDTypography variant="h6" color="white">
                            TAMBAH DATA SUBKRITERIA
                        </MDTypography>
                    </MDBox>
                        
                    <MDBox pt={7} pb={3} px={3} mx={3}>
                        <MDBox component="form" role="form">
                            <MDBox mb={2} display="flex" alignItems="center" justifyContent="space-between">
                                <MDBox lineHeight={1} mb={1} ml={1} width="15%">
                                    <MDTypography variant="button" fontWeight="medium">
                                        Kode Kriteria :
                                    </MDTypography>
                                </MDBox>
                                <MDInput 
                                disabled
                                required
                                type="text" 
                                value={kode_kriteria} 
                                label="Kode Kriteria" 
                                fullWidth />
                            </MDBox>
                            <MDBox mb={2} display="flex" alignItems="center" justifyContent="space-between">
                                <MDBox lineHeight={1} mb={1} ml={1} width="15%">
                                    <MDTypography variant="button" fontWeight="medium">
                                        Nama Subkriteria :
                                    </MDTypography>
                                </MDBox>
                                <MDInput 
                                required
                                type="text" 
                                value={ nama_subkriteria } 
                                onChange={(e) => setNamaSubkriteria(e.target.value)} 
                                label="Nama Subkriteria" 
                                fullWidth/>
                            </MDBox>
                            <MDBox mb={2} display="flex" alignItems="center" justifyContent="space-between">
                                <MDBox lineHeight={1} mb={1} ml={1} width="15%">
                                    <MDTypography variant="button" fontWeight="medium">
                                        Bobot Subkriteria :
                                    </MDTypography>
                                </MDBox>
                                <MDInput 
                                required
                                type="number" 
                                value={bobot_subkriteria} 
                                onChange={(e) => setBobotSubkriteria(e.target.value)} 
                                label="Bobot Subkriteria" 
                                fullWidth />
                            </MDBox>
                            
                            <MDBox mt={4} mb={1} display="flex" justifyContent="space-between">
                                <Link to="/subkriteria">
                                    <MDButton variant="gradient" color="info">
                                        <Icon fontSize="small">arrow_back</Icon>
                                        BACK
                                    </MDButton>
                                </Link>
                                <MDButton variant="gradient" color="info" onClick={HandleAddSubkriteria}>
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

export default AddSubkriteria