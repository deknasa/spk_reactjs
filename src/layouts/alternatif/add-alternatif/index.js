import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { alternatifURL, masterURL } from "URL/url";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Grid, Card, Icon, InputLabel, MenuItem, Select } from "@mui/material/";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";

function AddAlternatif() {
    const navigate = useNavigate();
    const [alternatifMaster, setAlternatifMaster] = useState([]);
    const [namaAlternatif, setNamaAlternatif] = useState([]);
    const [keterangan, setKeterangan] = useState("");

    useEffect(() => {
        axios.get(`${masterURL}/getAll`, {
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then(response => {
            setAlternatifMaster(response.data.data);
        }).catch( error => console.log(error))
    }, [])
    console.log(alternatifMaster);
    console.log(namaAlternatif);

    const handleAddAlternatif = async event => {
        event.preventDefault();
        let data
        const response = await fetch(`${alternatifURL}/createAlternatif`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                    // 'Authentication': Cookies.get("authentication") 
            },
            body: JSON.stringify({ namaAlternatif, keterangan }),
        })
        data = await response.json();
        if (namaAlternatif || keterangan != "") {
            if (response.status == 201) {
                const kodeAlternatif = data.alternatif.kode_alternatif
                navigate('/alternatif')
                alert(`Alternatif dengan kode ${kodeAlternatif} berhasil ditambahkan`)
            } else {
                // alert(`${data.message} ${data.error}`)
                alert(`${data.message}`)
            }
        } else {
            alert(`nama_alternatif, keterangan Wajib Diisi!`)
        }
    }
    return(
        <>
        <DashboardLayout>
            <DashboardNavbar />                
            <Grid item xs={12} mt={8}>
                <Card>
                    <MDBox mx={2} mt={-3} py={3} px={2} variant="gradient" bgColor="info" borderRadius="lg"
                    coloredShadow="info" display="flex" alignItems="center" justifyContent="space-between">
                        <MDTypography variant="h6" color="white">
                            TAMBAH DATA ALTERNATIF
                        </MDTypography>
                    </MDBox>
                        
                    <MDBox pt={7} pb={3} px={3} mx={3}>
                        <MDBox component="form" role="form">
                            {/* {alternatifMaster.map((item, index) => ( */}
                                <MDBox mb={2} display="flex" alignItems="center" justifyContent="space-between">
                                    <MDBox lineHeight={1} mb={1} ml={1} width="15%">
                                        <InputLabel id="select_alternatif">
                                            <MDTypography variant="button" fontWeight="medium">Nama Alternatif :</MDTypography>
                                        </InputLabel> 
                                    </MDBox> 
                                    <Select
                                    id="select_alternatif"
                                    label="Select Alternatif" labelId="select_alternatif"
                                    value={namaAlternatif} 
                                    onChange={(e) => setNamaAlternatif(e.target.value)}
                                    fullWidth required
                                    sx={{ color: 'success.dark', py:1.5 }}>
                                        {alternatifMaster.map((item, index) => (
                                            <MenuItem value={item.nama_alternatif}> {item.nama_alternatif} </MenuItem>
                                        ))}
                                    </Select> 
                                </MDBox>
                            {/* // ))} */}
                            {/* <MDBox mb={2} display="flex" alignItems="center" justifyContent="space-between">
                                <MDBox lineHeight={1} mb={1} ml={1} width="15%">
                                    <MDTypography variant="button" fontWeight="medium">
                                        Nama Alternatif :
                                    </MDTypography>
                                </MDBox>
                                <MDInput required type="text" 
                                value={nama_alternatif} 
                                onChange={(e) => setNamaAlternatif(e.target.value)} 
                                label="Nama Alternatif" fullWidth />
                            </MDBox> */}
                            <MDBox mb={2} display="flex" alignItems="center" justifyContent="space-between">
                                <MDBox lineHeight={1} mb={1} ml={1} width="15%">
                                    <MDTypography variant="button" fontWeight="medium">
                                        Keterangan :
                                    </MDTypography>
                                </MDBox>
                                <MDInput required type="text" 
                                value={keterangan} 
                                onChange={(e) => setKeterangan(e.target.value)} 
                                label="Keterangan" fullWidth />
                            </MDBox>

                            <MDBox mt={4} mb={1} display="flex" justifyContent="space-between">
                                <Link to="/alternatif">
                                    <MDButton variant="gradient" color="info">  {/* href="/kriteria" */}
                                        <Icon fontSize="small">arrow_back</Icon>
                                        BACK
                                    </MDButton>
                                </Link>
                                <MDButton variant="gradient" color="info" onClick={handleAddAlternatif}>
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

export default AddAlternatif