import Axios from 'axios'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { kriteriaURL } from "URL/url";
import { Grid, Card, Icon, InputLabel, MenuItem, Select } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";

function EditKriteria() {
    const navigate = useNavigate();
    const {kodeKriteria} = useParams()
    console.log(kodeKriteria);

    const [kode_kriteria, setKodeKriteria] = useState("");
    const [nama_kriteria, setNamaKriteria] = useState("");
    const [bobot_kriteria, setBobotKriteria] = useState("");
    const [jenis_kriteria, setJenisKriteria] = useState("");
    const [kriteria, setKriteria] = useState("")

    const KodeKriteria = async() => {
        useEffect(() => {
          fetch(`${kriteriaURL}/getKriteriaByCode/${kodeKriteria}`)
            .then(response => response.json())
            .then(data => {
                setKriteria(data.kriteria)
                setKodeKriteria(data.kriteria.kode_kriteria)
                setNamaKriteria(data.kriteria.nama_kriteria)
                setBobotKriteria(data.kriteria.bobot_kriteria)
                setJenisKriteria(data.kriteria.jenis_kriteria)
            })
            .catch(error => console.error(error));
          },[]
        );
      }
    KodeKriteria()

    const HandleEditKriteria = async event => {
        event.preventDefault();
        console.log(kode_kriteria, nama_kriteria, bobot_kriteria, jenis_kriteria);

        const formData = new FormData()
        formData.append('kode_kriteria', kode_kriteria)
        formData.append('nama_kriteria', nama_kriteria)
        formData.append('bobot_kriteria', bobot_kriteria)
        formData.append('jenis_kriteria', jenis_kriteria)

        Axios.put(`${kriteriaURL}/updateKriteria/${kodeKriteria}`, formData, {
            headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify({ kode_kriteria, nama_kriteria, bobot_kriteria, jenis_kriteria }),
        })
        .then(res => {
            const dataUpdate = res.data
            if (dataUpdate) {
                alert(`Berhasil update data kriteria dengan kode ${kode_kriteria}`)
                navigate('/kriteria')
            }
            else {
                alert(`Kriteria dengan kode ${kode_kriteria} gagal diubah`);
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
            <Grid item xs={12} mt={8}>
                <Card>
                    <MDBox mx={2} mt={-3} py={3} px={2} variant="gradient"
                    bgColor="info" borderRadius="lg" coloredShadow="info"
                    display="flex" alignItems="center" justifyContent="space-between">
                        <MDTypography variant="h6" color="white">
                            EDIT DATA KRITERIA
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
                                type="text"
                                value={kode_kriteria} 
                                onChange={(e) => setKodeKriteria(e.target.value)}
                                label="Kode Kriteria" 
                                fullWidth />
                            </MDBox>
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
                                    <MDTypography variant="button" fontWeight="medium">
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
                                    <InputLabel id="edit-kriteria-label">
                                        <MDTypography variant="button" fontWeight="medium">
                                            Jenis Kriteria :
                                        </MDTypography>
                                    </InputLabel>
                                </MDBox>
                                <Select
                                labelId="edit-kriteria-label"
                                id="edit-kriteria-select"
                                label="Jenis Kriteria"
                                value={jenis_kriteria} 
                                onChange={(e) => setJenisKriteria(e.target.value)}
                                fullWidth
                                required
                                sx={{ color: 'success.dark', py:1.5 }}>
                                    <MenuItem value="benefit">Benefit</MenuItem>
                                    <MenuItem value="cost">Cost</MenuItem>
                                </Select>
                            </MDBox>

                            <MDBox mt={4} mb={1} display="flex" justifyContent="space-between">
                                <MDButton variant="gradient" color="info" href="/kriteria">
                                    <Icon fontSize="small">arrow_back</Icon>
                                    BACK
                                </MDButton>
                                <MDButton variant="gradient" color="info" onClick={HandleEditKriteria}>
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

export default EditKriteria