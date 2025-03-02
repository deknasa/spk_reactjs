import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { kriteriaURL } from "URL/url";
import { Grid, Card, InputLabel, MenuItem, Select, Icon } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import Cookies from "js-cookie";

function AddKriteria() {
    const navigate = useNavigate();
    // const [kode_kriteria, setKodeKriteria] = useState("");
    const [nama_kriteria, setNamaKriteria] = useState("");
    const [bobot_kriteria, setBobotKriteria] = useState("");
    const [jenis_kriteria, setJenisKriteria] = useState("");

    const HandleAddKriteria = async event => {
        event.preventDefault();
        let data

        const response = await fetch(`${kriteriaURL}/createKriteria`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authentication': Cookies.get("authentication") 
            },
            body: JSON.stringify({ nama_kriteria, bobot_kriteria, jenis_kriteria }), })
        
            data = await response.json();
            console.log(data)
            console.log(response.status);
            if (nama_kriteria || bobot_kriteria || jenis_kriteria != "") {
                if (response.status == 201) {
                    const kodeKriteria = data.kriteria.kode_kriteria
                    navigate('/kriteria')
                    alert(`Kriteria dengan kode ${kodeKriteria} berhasil ditambahkan`)
                } else {
                    alert(`${data.message} ${data.error}`)
                }
            } else{
                alert(`Nama Kriteria, Bobot Kriteria dan Jenis Kriteria Wajib Diisi!`)
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
                            TAMBAH DATA KRITERIA
                        </MDTypography>
                    </MDBox>
                        
                    <MDBox pt={7} pb={3} px={3} mx={3}>
                        <MDBox component="form" role="form">
                            <MDBox mb={2} display="flex" alignItems="center" justifyContent="space-between">
                                <MDBox lineHeight={1} mb={1} ml={1} width="15%">
                                    <MDTypography variant="button" fontWeight="medium">
                                        Nama Kriteria :
                                    </MDTypography>
                                </MDBox>
                                <MDInput 
                                required
                                type="text" 
                                value={nama_kriteria} 
                                onChange={(e) => setNamaKriteria(e.target.value)} 
                                label="Nama Kriteria" fullWidth />
                            </MDBox>
                            <MDBox mb={2} display="flex" alignItems="center" justifyContent="space-between">
                                <MDBox lineHeight={1} mb={1} ml={1} width="15%">
                                    <MDTypography 
                                    variant="button"
                                    fontWeight="medium">
                                        Bobot Kriteria :
                                    </MDTypography>
                                </MDBox>
                                <MDInput 
                                required
                                type="number" 
                                value={bobot_kriteria} 
                                onChange={(e) => setBobotKriteria(e.target.value)} 
                                label="Bobot Kriteria" fullWidth />
                            </MDBox>
                            <MDBox mb={2} display="flex" alignItems="center" justifyContent="space-between">
                                <MDBox lineHeight={1} mb={1} ml={1} width="15%">
                                    <InputLabel id="add-kriteria-label">
                                        <MDTypography 
                                        variant="button"
                                        fontWeight="medium">
                                            Jenis Kriteria :
                                        </MDTypography>
                                    </InputLabel>
                                </MDBox>
                                <Select
                                labelId="add-kriteria-label"
                                id="add-kriteria-select"
                                label="Jenis Kriteria"
                                value={jenis_kriteria} 
                                onChange={(e) => setJenisKriteria(e.target.value)}
                                fullWidth
                                required
                                sx={{ 
                                    color: 'success.dark',
                                    py:1.5
                                }}>
                                    <MenuItem value="benefit">Benefit</MenuItem>
                                    <MenuItem value="cost">Cost</MenuItem>
                                </Select>
                            </MDBox>

                            <MDBox mt={4} mb={1} display="flex" justifyContent="space-between">
                                <Link to="/kriteria">
                                    <MDButton variant="gradient" color="info" 
                                    // href="/kriteria"
                                    >
                                        <Icon fontSize="small">arrow_back</Icon>
                                        BACK
                                    </MDButton>
                                </Link>
                                <MDButton variant="gradient" color="info" onClick={HandleAddKriteria}>
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

export default AddKriteria