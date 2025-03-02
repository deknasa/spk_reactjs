import Axios from 'axios'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import { kriteriaURL, subkriteriaURL, relAlternatifURL } from "URL/url";
import { Grid, Card, Icon, InputLabel, MenuItem, Select } from "@mui/material";
import penilaianTableData from "layouts/penilaian/data/penilaianTableData";

function EditPenilaian() {
    const navigate = useNavigate();
    const { kode_alternatif, nama_alt } = useParams()
    const { kriteriaSubkriteria } = penilaianTableData();

    const kodeBPKB = "C1"; 
    const kodeSTNK = "C2"; 
    const kodePajak = "C3"; 
    const kodeKondisiBody = "C4"
    const kodeKondisiMesin = "C5"; 
    const kodeTahunKeluaran = "C6"
    // const kodeKriteriaBaru = 'C7'
    const [subkriteria_bpkb, setsubkriteria_bpkb] = useState("");
    const [subkriteriaStnk, setSubkriteriaStnk] = useState("");
    const [subkriteriaPajak, setSubkriteriaPajak] = useState("");
    const [subkriteriaKondisiBody, setSubkriteriaKondisiBody] = useState("");
    const [subkriteriaKondisiMesin, setSubkriteriaKondisiMesin] = useState("");
    const [subkriteriaTahunKeluaran, setSubkriteriaTahunKeluaran] = useState("");
    // const [subkriteriaKriteriaBaru, setSubkriteriaKriteriaBaru] = useState("");
    // const [subkriteria, setSubKriteria] = useState([]);

    // console.log(subkriteria);

    const HandleEditPenilaian = async event => {
        event.preventDefault();
        // console.log(subkriteria_bpkb);

        const formData = new FormData()
        formData.append('kode_altenatif', kode_alternatif)
        // formData.append('kode_kriteria', kode_kriteria)
        
        formData.append('kodeBPKB', kodeBPKB)
        formData.append('subkriteria_bpkb', subkriteria_bpkb) 

        formData.append('kodeSTNK', kodeSTNK)
        formData.append('subkriteriaStnk', subkriteriaStnk) 

        formData.append('kodePajak', kodePajak)
        formData.append('subkriteriaPajak', subkriteriaPajak)

        formData.append('kodeKondisiBody', kodeKondisiBody)
        formData.append('subkriteriaKondisiBody', subkriteriaKondisiBody)

        formData.append('kodeKondisiMesin', kodeKondisiMesin)
        formData.append('subkriteriaKondisiMesin', subkriteriaKondisiMesin)

        formData.append('kodeTahunKeluaran', kodeTahunKeluaran)
        formData.append('subkriteriaTahunKeluaran', subkriteriaTahunKeluaran)
        // formData.append('subkriteria', subkriteria)

        // formData.append('kodeKriteriaBaru', kodeKriteriaBaru)
        // formData.append('subkriteriaKriteriaBaru', subkriteriaKriteriaBaru)

        Axios.put(`${relAlternatifURL}/create/${kode_alternatif}`, formData, {
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => { 
            console.log(res.data); 
            const dataUpdate = res.data
            if (dataUpdate) {
                alert(`Data Penilaian Alternatif berhasil di edit!`)
                navigate('/penilaian')
            } else {
                alert(`Data Penilaian Alternatif gagal di edit!`);
            }
        }).catch(e => console.log(e))  
    }

    return(
        <>
        <DashboardLayout>
            <DashboardNavbar />                
            <Grid item xs={12} mt={8}>
                <Card>
                    <MDBox
                    mx={2} mt={-3} py={3} px={2}
                    variant="gradient" bgColor="info" borderRadius="lg" coloredShadow="info" 
                    display="flex" alignItems="center" justifyContent="space-between">
                        <MDTypography variant="h6" color="white">EDIT DATA PENILAIAN ALTERNATIF</MDTypography>
                    </MDBox>
                        
                    <MDBox pt={7} pb={3} px={3} mx={3}>
                        <MDBox component="form" role="form">
                            <MDBox mb={2} display="flex" alignItems="center" justifyContent="space-between">
                                <MDBox lineHeight={1} mb={1} ml={1} width="15%">
                                    <MDTypography variant="button" fontWeight="medium">Kode Alternatif :</MDTypography>
                                </MDBox>
                                <MDInput disabled type="text" value={kode_alternatif} label="Kode Alternatif" fullWidth/>
                            </MDBox>
                            <MDBox mb={2} display="flex" alignItems="center" justifyContent="space-between">
                                <MDBox lineHeight={1} mb={1} ml={1} width="15%">
                                    <MDTypography variant="button" fontWeight="medium">Nama Alternatif :</MDTypography>
                                </MDBox>
                                <MDInput disabled type="text" value={nama_alt} label="Nama Alternatif" fullWidth/>
                            </MDBox>

                            {/* {kriteriaSubkriteria.map((item, index) => (
                                <MDBox mb={2} display="flex" alignItems="center" justifyContent="space-between">
                                    <MDBox lineHeight={1} mb={1} ml={1} width="15%">
                                        <InputLabel id="input_penilaian">
                                            <MDTypography variant="button" fontWeight="medium">{item.nama_kriteria} :</MDTypography>
                                        </InputLabel> 
                                    </MDBox> 
                                    <Select
                                    key={index} id="input-penilaian"
                                    label="Input Penilaian" labelId="input_penilaian" 
                                    value={subkriteria[index]} 
                                    // onChange={handleChange}
                                    onChange={(e) => [setSubKriteria(e.target.value)]}
                                    fullWidth required
                                    sx={{ color: 'success.dark', py:1.5 }}>
                                        {item.sub_kriteria.map(i => (
                                            <MenuItem value={i.id}>
                                                {i.nama_subkriteria}
                                            </MenuItem>
                                        ))}
                                    </Select> 
                                </MDBox>
                            ))} */}

                            <MDBox mb={2} display="flex" alignItems="center" justifyContent="space-between">
                                <MDBox lineHeight={1} mb={1} ml={1} width="15%">
                                    <InputLabel id="penilaian-bpkb">
                                        <MDTypography variant="button" fontWeight="medium">BPKB : </MDTypography>
                                    </InputLabel>
                                </MDBox> 
                                <Select 
                                labelId="penilaian-bpkb" id="input-penilaian"
                                label="Input Penilaian" value={subkriteria_bpkb} 
                                onChange={(e) => setsubkriteria_bpkb(e.target.value)}
                                fullWidth required
                                sx={{ color: 'success.dark', py:1.5 }}>
                                    <MenuItem value={1}>Ada</MenuItem>
                                    <MenuItem value={2}>Tidak Ada</MenuItem>
                                </Select>
                            </MDBox>
 
                            <MDBox mb={2} display="flex" alignItems="center" justifyContent="space-between">
                                <MDBox lineHeight={1} mb={1} ml={1} width="15%">
                                    <InputLabel id="penilaian-stnk">
                                        <MDTypography variant="button" fontWeight="medium">STNK : </MDTypography>
                                    </InputLabel>
                                </MDBox> 
                                <Select
                                labelId="penilaian-stnk" id="input-penilaian"
                                label="Input Penilaian" value={subkriteriaStnk} 
                                onChange={(e) => setSubkriteriaStnk(e.target.value)}
                                fullWidth required
                                sx={{ color: 'success.dark', py:1.5 }}>
                                    <MenuItem value={3}>Ada</MenuItem>
                                    <MenuItem value={4}>Tidak Ada</MenuItem>
                                </Select>
                            </MDBox>

                            <MDBox mb={2} display="flex" alignItems="center" justifyContent="space-between">
                                <MDBox lineHeight={1} mb={1} ml={1} width="15%">
                                    <InputLabel id="penilaian-pajak">
                                        <MDTypography variant="button" fontWeight="medium">Pajak : </MDTypography>
                                    </InputLabel>
                                </MDBox> 
                                <Select
                                labelId="penilaian-pajak" id="input-penilaian"
                                label="Input Penilaian" value={subkriteriaPajak} 
                                onChange={(e) => setSubkriteriaPajak(e.target.value)}
                                fullWidth required
                                sx={{ color: 'success.dark', py:1.5 }}>
                                    <MenuItem value={5}>Hidup</MenuItem>
                                    <MenuItem value={6}>Mati</MenuItem>
                                </Select>
                            </MDBox>

                            <MDBox mb={2} display="flex" alignItems="center" justifyContent="space-between">
                                <MDBox lineHeight={1} mb={1} ml={1} width="15%">
                                    <InputLabel id="penilaian-kondisi-body">
                                        <MDTypography variant="button" fontWeight="medium">Kondisi Body :</MDTypography>
                                    </InputLabel>
                                </MDBox> 
                                <Select
                                labelId="penilaian-kondisi-body" id="input-penilaian"
                                label="Input Penilaian" value={subkriteriaKondisiBody} 
                                onChange={(e) => setSubkriteriaKondisiBody(e.target.value)}
                                fullWidth required
                                sx={{ color: 'success.dark', py:1.5 }}>
                                    {/* <MenuItem value={7}>Sangat Bagus</MenuItem>
                                    <MenuItem value={8}>Bagus</MenuItem>
                                    <MenuItem value={9}>Tidak Bagus</MenuItem> */}
                                    <MenuItem value={8}>Bagus</MenuItem>
                                    <MenuItem value={9}>Tidak Bagus</MenuItem>
                                </Select>
                            </MDBox>

                            <MDBox mb={2} display="flex" alignItems="center" justifyContent="space-between">
                                <MDBox lineHeight={1} mb={1} ml={1} width="15%">
                                    <InputLabel id="penilaian-kondisi-mesin">
                                        <MDTypography variant="button" fontWeight="medium">Kondisi Mesin :</MDTypography>
                                    </InputLabel>
                                </MDBox> 
                                <Select
                                labelId="penilaian-kondisi-mesin" id="input-penilaian"
                                label="Input Penilaian" value={subkriteriaKondisiMesin} 
                                onChange={(e) => setSubkriteriaKondisiMesin(e.target.value)}
                                fullWidth required
                                sx={{ color: 'success.dark', py:1.5 }}>
                                    {/* <MenuItem value={10}>Sangat Bagus</MenuItem>
                                    <MenuItem value={11}>Bagus</MenuItem>
                                    <MenuItem value={12}>Tidak Bagus</MenuItem> */}
                                    <MenuItem value={11}>Bagus</MenuItem>
                                    <MenuItem value={12}>Tidak Bagus</MenuItem>
                                </Select>
                            </MDBox>

                            <MDBox mb={2} display="flex" alignItems="center" justifyContent="space-between">
                                <MDBox lineHeight={1} mb={1} ml={1} width="15%">
                                    <InputLabel id="penilaian-tahun-keluaran">
                                        <MDTypography variant="button" fontWeight="medium">Tahun Keluaran :</MDTypography>
                                    </InputLabel>
                                </MDBox> 
                                <Select
                                labelId="penilaian-tahun-keluaran" id="input-penilaian"
                                label="Input Penilaian" value={subkriteriaTahunKeluaran} 
                                onChange={(e) => setSubkriteriaTahunKeluaran(e.target.value)}
                                fullWidth required
                                sx={{ color: 'success.dark', py:1.5 }}>
                                    {/* <MenuItem value={13}>Diatas tahun 2020</MenuItem>
                                    <MenuItem value={14}>2016 - 2020</MenuItem>
                                    <MenuItem value={15}>2011 - 2015</MenuItem>
                                    <MenuItem value={16}>2006 - 2010</MenuItem>
                                    <MenuItem value={17}>2001 - 2005</MenuItem>
                                    <MenuItem value={18}>Dibawah/sama dengan tahun 2000</MenuItem> */}
                                    <MenuItem value={13}>Diatas tahun 2010</MenuItem>
                                    <MenuItem value={18}>Dibawah/sama dengan tahun 2010</MenuItem>
                                </Select>
                            </MDBox>

                            {/* UNCOMMENT AFTER ADD CRITERIA & SUBKRITERIA AND WANT TO EDIT PENILAIAN */}
                            {/* <MDBox mb={2} display="flex" alignItems="center" justifyContent="space-between">
                                <MDBox lineHeight={1} mb={1} ml={1} width="15%">
                                    <InputLabel id="penilaian-kriteria-baru">
                                        <MDTypography variant="button" fontWeight="medium">Kriteria BARU :</MDTypography>
                                    </InputLabel>
                                </MDBox> 
                                <Select
                                labelId="penilaian-kriteria-baru" id="input-penilaian"
                                label="Input Penilaian" value={subkriteriaKriteriaBaru} 
                                onChange={(e) => setSubkriteriaKriteriaBaru(e.target.value)}
                                fullWidth required
                                sx={{ color: 'success.dark', py:1.5 }}>
                                    <MenuItem value={19}>Ada</MenuItem>
                                    <MenuItem value={2}>Bagus</MenuItem>
                                </Select>
                            </MDBox> */}
                            
                            <MDBox mt={4} mb={1} display="flex" justifyContent="space-between">
                                <MDButton variant="gradient" color="info" href="/penilaian">
                                    <Icon fontSize="small">arrow_back</Icon> BACK
                                </MDButton>
                                <MDButton variant="gradient" color="info" onClick={HandleEditPenilaian}>
                                    <Icon fontSize="small">save</Icon> SAVE
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

export default EditPenilaian