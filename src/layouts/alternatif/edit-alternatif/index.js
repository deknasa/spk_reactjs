import Axios from 'axios'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { alternatifURL } from "URL/url";
import { Grid, Card, Icon } from "@mui/material/";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import { useParams } from "react-router-dom";

function EditAlternatif() {
    const navigate = useNavigate();
    const {kodeAlternatif} = useParams()
    console.log(kodeAlternatif);

    const [kode_alternatif, setKodeAlternatif] = useState("");
    const [nama_alternatif, setNamaAlternatif] = useState("");
    const [keterangan, setKeterangan] = useState("");
    const [alternatif, setAlternatif] = useState("")

    const KodeAlternatif = async() => {
        useEffect(() => {
          fetch(`${alternatifURL}/getAlternatifByKode/${kodeAlternatif}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setAlternatif(data.alternatif)
                setKodeAlternatif(data.alternatif.kode_alternatif)
                setNamaAlternatif(data.alternatif.nama_alternatif)
                setKeterangan(data.alternatif.keterangan)
            })
            .catch(error => console.error(error));
          },[]
        );
      }
    KodeAlternatif()

    const HandleEditAlternatif = async event => {
        event.preventDefault();

        const formData = new FormData()
        formData.append('kode_alternatif', kode_alternatif)
        formData.append('nama_alternatif', nama_alternatif)
        formData.append('keterangan', keterangan)

        Axios.put(`${alternatifURL}/updateAlternatif/${kodeAlternatif}`, formData, {
            headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify({ kode_kriteria, nama_kriteria, bobot_kriteria, jenis_kriteria }),
        }).then(res => {
            console.log(res.data);
            const dataUpdate = res.data
            if (dataUpdate) {
                alert(`Berhasil update data alternatif dengan kode ${kode_alternatif}`)
                navigate('/alternatif')
            }
            else {
                alert(`Alternatif dengan kode ${kode_alternatif} gagal diubah`);
            }
        }).catch(e => {
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
                            EDIT DATA ALTERNATIF
                        </MDTypography>
                    </MDBox>
                        
                    <MDBox pt={7} pb={3} px={3} mx={3}>
                        <MDBox component="form" role="form">
                            <MDBox mb={2} display="flex" alignItems="center" justifyContent="space-between">
                                <MDBox lineHeight={1} mb={1} ml={1} width="15%">
                                    <MDTypography variant="button" fontWeight="medium">
                                        Kode Alternatif :
                                    </MDTypography>
                                </MDBox>
                                <MDInput disabled type="text" fullWidth
                                value={kode_alternatif} 
                                onChange={(e) => setKodeAlternatif(e.target.value)}
                                label="Kode Alternatif"/>
                            </MDBox>
                            <MDBox mb={2} display="flex" alignItems="center" justifyContent="space-between">
                                <MDBox lineHeight={1} mb={1} ml={1} width="15%">
                                    <MDTypography variant="button" fontWeight="medium">
                                        Nama Alternatif :
                                    </MDTypography>
                                </MDBox>
                                <MDInput disabled required type="text" fullWidth 
                                value={nama_alternatif} 
                                onChange={(e) => setNamaAlternatif(e.target.value)} 
                                label="Nama Alternatif"/>
                            </MDBox>
                            <MDBox mb={2} display="flex" alignItems="center" justifyContent="space-between">
                                <MDBox lineHeight={1} mb={1} ml={1} width="15%">
                                    <MDTypography variant="button" fontWeight="medium">
                                        Keterangan :
                                    </MDTypography>
                                </MDBox>
                                <MDInput required type="text" fullWidth
                                value={keterangan} 
                                onChange={(e) => setKeterangan(e.target.value)} 
                                label="Keterangan"/>
                            </MDBox>

                            <MDBox mt={4} mb={1} display="flex" justifyContent="space-between">
                                <MDButton variant="gradient" color="info" href="/alternatif">
                                    <Icon fontSize="small">arrow_back</Icon>
                                    BACK
                                </MDButton>
                                <MDButton variant="gradient" color="info" onClick={HandleEditAlternatif}>
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

export default EditAlternatif