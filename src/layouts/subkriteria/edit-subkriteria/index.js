import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from 'axios'
import { subkriteriaURL } from "URL/url";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";

function EditSubkriteria() {
    const navigate = useNavigate();
    const {subkriteriaId} = useParams()

    const [kode_kriteria, setKodeKriteria] = useState("");

    const [nama_subkriteria, setNamaSubkriteria] = useState("");

    const [bobot_subkriteria, setBobotSubkriteria] = useState("");

    const GetDataSubkriteria = async() => {
        useEffect(() => {
          fetch(`${subkriteriaURL}/getSubkriteriaById/${subkriteriaId}`)
            .then(response => response.json())
            .then(data => {
                setKodeKriteria(data.subkriteria.kode_kriteria)
                setNamaSubkriteria(data.subkriteria.nama_subkriteria)
                setBobotSubkriteria(data.subkriteria.bobot_subkriteria)
            })
            .catch(error => console.error(error));
          },[]
        );
      }
    GetDataSubkriteria()

    const HandleEditSubkriteria = async event => {
        event.preventDefault();
        console.log(kode_kriteria, nama_subkriteria, bobot_subkriteria);

        const formData = new FormData()
        formData.append('kode_kriteria', kode_kriteria)
        formData.append('nama_subkriteria', nama_subkriteria)
        formData.append('bobot_subkriteria', bobot_subkriteria)

        Axios.put(`${subkriteriaURL}/updateSubKriteria/${subkriteriaId}`, formData, {
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => {
            console.log(res.data);
            const dataUpdate = res.data
            if (dataUpdate) {
                alert(`Berhasil Update Data Subkriteria!`)
                navigate('/subkriteria')
            }
            else {
                alert(`Gagal Update Data Subkriteria!`);
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
                            EDIT DATA SUBKRITERIA
                        </MDTypography>
                    </MDBox>
                        
                    <MDBox pt={7} pb={3} px={3} mx={3}>
                        <MDBox component="form" role="form">
                            <MDBox mb={2} display="flex" alignItems="center" justifyContent="space-between">
                                <MDBox lineHeight={1} mb={1} ml={1} width="15%">
                                    <MDTypography 
                                    variant="button"
                                    fontWeight="medium">
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
                                    <MDTypography 
                                    variant="button"
                                    fontWeight="medium">
                                        Nama Subkriteria :
                                    </MDTypography>
                                </MDBox>
                                <MDInput 
                                required
                                type="text" 
                                value={nama_subkriteria} 
                                onChange={(e) => setNamaSubkriteria(e.target.value)} 
                                label="Nama Subkriteria" 
                                fullWidth />
                            </MDBox>
                            <MDBox mb={2} display="flex" alignItems="center" justifyContent="space-between">
                                <MDBox lineHeight={1} mb={1} ml={1} width="15%">
                                    <MDTypography 
                                    variant="button"
                                    fontWeight="medium">
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

                            <MDBox 
                            mt={4} 
                            mb={1}
                            display="flex"
                            justifyContent="space-between"
                            >
                                <MDButton 
                                variant="gradient" 
                                color="info" 
                                href="/subkriteria"
                                >
                                    <Icon fontSize="small">arrow_back</Icon>
                                    BACK
                                </MDButton>
                                <MDButton 
                                variant="gradient" 
                                color="info" 
                                onClick={HandleEditSubkriteria}
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

export default EditSubkriteria