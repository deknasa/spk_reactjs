import { useState } from "react";
import { Grid, TableContainer, Table, TableRow, TableBody, Paper } from "@mui/material";
import getData from "./data/dataAlternatif"
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Kriteria from "../data-kriteria/index";
// import Alternatif from "./data-alternatif/index";
// import Normalisasi from "../vikor/normalisasi/index";
// import NormalisasiBobot from "../vikor/normalisasiBobot/index";
// import NilaiS from "../vikor/nilaiS/index"
// import NilaiR from "../vikor/nilaiR/index"
// import Qvalue from "../vikor/Qvalue/index"
// import Rank from "../vikor/rank/index"
import AlternatifColumns from "./data-alternatif/columnAlternatif";
import AlternatifTitle from "./data-alternatif/titleAlternatif";
import AlternatifTableRows from "./data-alternatif/alternatifRows";
import NormalisasiColumns from "./normalisasi/normalisasiColumns";
import NormalisasiTitle from "./normalisasi/normalisasiTitle";
import NormalisasiRows from "./normalisasi/normalisasiRows";
import NormalisasiBobotColumns from "./normalisasiBobot/normalisasiBobotColumns";
import NormalisasiBobotTitle from "./normalisasiBobot/normalisasiBobotTitle";
import NormalisasiBobotRows from "./normalisasiBobot/normalisasiBobotRows";
import UtilityMeasureColumns from "./nilaiS/utilityMeasureColumns";
import UtilityMeasureRows from "./nilaiS/utilityMeasureRows";
import RegretMeasureColumns from "./nilaiR/regretMeasureColumns";
import RegretMeasureRows from "./nilaiR/regretMeasureRows";
import NilaiVikorColumns from "./Qvalue/nilaiVikorCoumns";
import NilaiVikorRows from "./Qvalue/nilaiVikorRows";
import RankColumns from "./rank/rankColumns";
import RankRows from "./rank/rankRows";

function PerhitunganVikor() {
   const { columns, title, rowsAlternatif, rowsNormalisasi, rowsNormalisasiBobot, 
      utilityMeasureColumns, utilityMeasureRows,
      regretMeasureColumns, regretMeasureRows,
      qiColumns, qiRows,
      rankColumns, rankRows
   } = getData();

   const [openAlternatif, setOpenAlternatif] = useState(false);
   const handleOpenAlternatif = () => setOpenAlternatif(true);
   const handleCloseAlternatif = () => setOpenAlternatif(false);

   const [openNormalisasi, setOpenNormalisasi] = useState(false);
   const handleOpenNormalisasi = () => setOpenNormalisasi(true);
   const handleCloseNormalisasi = () => setOpenNormalisasi(false);

   const [openNormalisasiBobot, setOpenNormalisasiBobot] = useState(false);
   const handleOpenNormalisasiBobot = () => setOpenNormalisasiBobot(true);
   const handleCloseNormalisasiBobot = () => setOpenNormalisasiBobot(false);

   const [openNilaiS, setOpenNilaiS] = useState(false);
   const handleOpenNilaiS = () => setOpenNilaiS(true);
   const handleCloseNilaiS = () => setOpenNilaiS(false);

   const [openNilaiR, setOpenNilaiR] = useState(false);
   const handleOpenNilaiR = () => setOpenNilaiR(true);
   const handleCloseNilaiR = () => setOpenNilaiR(false);

   const [openNilaiVikor, setOpenNilaiVikor] = useState(false);
   const handleOpenNilaiVikor = () => setOpenNilaiVikor(true);
   const handleCloseNilaiVikor = () => setOpenNilaiVikor(false);

   const [openRankData, setOpenRankData] = useState(false);
   const  handleOpenRankData= () => setOpenRankData(true);
   const handleCloseRankData = () => setOpenRankData(false);

   return (
      <DashboardLayout>
         <DashboardNavbar />
         <MDBox pt={6} pb={3}>
            <Grid container spacing={6}>
               <Grid item xs={12}>
                  <Kriteria />
               </Grid>

               <Grid item xs={12}>
                  <MDBox mx={2} mt={-3} py={1} px={2} onClick={handleOpenAlternatif}
                  variant="gradient" bgColor="light" borderRadius="lg" coloredShadow="info"
                  display="sticky" alignItems="center" justifyContent="space-between">
                     <MDButton variant="text" color="black"> DATA ALTERNATIF </MDButton>
                  </MDBox>
                  { openAlternatif &&
                  <MDBox pt={3} mx={2}> 
                     <TableContainer sx={{ boxShadow: "none" }} component={Paper}>
                        <Table onClick={handleCloseAlternatif}>
                           <MDBox component="thead">
                              <TableRow>
                                 {columns.map((item) => (
                                    <AlternatifColumns Header={item.Header} align={item.align} width={item.width} />
                                 ))}
                                 {title.map((item) => (
                                    <AlternatifTitle Header={item.Header} align={item.align} width={item.width} />
                                 ))}
                              </TableRow>
                           </MDBox>
                           <TableBody>
                              {rowsAlternatif.map((data, index) => (
                                 <AlternatifTableRows 
                                 kode={data.kode} 
                                 C1={data.C1}
                                 C2={data.C2}
                                 C3={data.C3}
                                 C4={data.C4}
                                 C5={data.C5}
                                 C6={data.C6} />
                              ))}
                           </TableBody>
                        </Table>
                     </TableContainer>
                  </MDBox>
                  }
               </Grid>

               <Grid item xs={12}>
                  <MDBox mx={2} mt={-3} py={1} px={2} onClick={handleOpenNormalisasi}
                  variant="gradient" bgColor="light" borderRadius="lg" coloredShadow="info"
                  display="sticky" alignItems="center" justifyContent="space-between">
                     <MDButton variant="text" color="black"> DATA NORMALISASI </MDButton>
                  </MDBox>
                  { openNormalisasi &&
                  <MDBox pt={3} mx={2}> 
                     <TableContainer sx={{ boxShadow: "none" }} component={Paper}>
                        <Table onClick={handleCloseNormalisasi}>
                           <MDBox component="thead">
                              <TableRow>
                                 {columns.map((item) => (
                                    <NormalisasiColumns Header={item.Header} width={item.width} align={item.align}/>
                                 ))}
                                 {title.map((item) => (
                                    <NormalisasiTitle header={item.Header} width={item.width} align={item.align}/> 
                                 ))}
                              </TableRow>
                           </MDBox>
                           <TableBody>
                                 {rowsNormalisasi.map((data, index) => (
                                    <NormalisasiRows
                                    kode={data.kode} 
                                    C1={data.C1}
                                    C2={data.C2}
                                    C3={data.C3}
                                    C4={data.C4}
                                    C5={data.C5}
                                    C6={data.C6}/>
                                 ))}
                           </TableBody>
                        </Table>
                     </TableContainer>
                  </MDBox>
                  }
               </Grid>

               <Grid item xs={12}>
                  <MDBox mx={2} mt={-3} py={1} px={2} onClick={handleOpenNormalisasiBobot}
                  variant="gradient" bgColor="light" borderRadius="lg" coloredShadow="info"
                  display="sticky" alignItems="center" justifyContent="space-between">
                     <MDButton variant="text" color="black"> DATA NORMALISASI BOBOT </MDButton>
                  </MDBox>
                  { openNormalisasiBobot &&
                  <MDBox pt={3} mx={2}> 
                     <TableContainer sx={{ boxShadow: "none" }} component={Paper}>
                        <Table onClick={handleCloseNormalisasiBobot}>
                           <MDBox component="thead">
                              <TableRow>
                                 {columns.map((item) => (
                                    <NormalisasiBobotColumns header={item.Header} width={item.width} align={item.align} />
                                 ))}
                                 {title.map((item) => (
                                    <NormalisasiBobotTitle header={item.Header} width={item.width} align={item.align} />
                                 ))}
                              </TableRow>
                           </MDBox>
                           <TableBody>
                              {rowsNormalisasiBobot.map((data, index) => (
                                 <NormalisasiBobotRows 
                                 kode={data.kode} C1={data.C1} C2={data.C2} C3={data.C3}
                                 C4={data.C4} C5={data.C5} C6={data.C6} />
                              ))}
                           </TableBody>
                        </Table>
                     </TableContainer>
                  </MDBox>
                  }
               </Grid>

               <Grid item xs={12}>
                  <MDBox mx={2} mt={-3} py={1} px={2} onClick={handleOpenNilaiS}
                  variant="gradient" bgColor="light" borderRadius="lg" coloredShadow="info"
                  display="sticky" alignItems="center" justifyContent="space-between">
                     <MDButton variant="text" color="black"> DATA UTILITY MEASURE (S) </MDButton>
                  </MDBox>
                  {openNilaiS &&
                  <MDBox pt={3} mx={2}> 
                     <TableContainer sx={{ boxShadow: "none" }} component={Paper}>
                        <Table onClick={handleCloseNilaiS}>
                           <MDBox component="thead">
                              <TableRow>
                                 {utilityMeasureColumns.map((item) => (
                                    <UtilityMeasureColumns header={item.Header} width={item.width} align={item.align}/>
                                 ))}
                              </TableRow>
                           </MDBox>
                           <TableBody>
                              {utilityMeasureRows.map((data, index) => (
                                 <UtilityMeasureRows kode={data.kode} nilai_s={data.Nilai_S}/>
                              ))}
                           </TableBody>
                        </Table>
                     </TableContainer>
                  </MDBox>
                  }
               </Grid>

               <Grid item xs={12}>
                  <MDBox mx={2} mt={-3} py={1} px={2} onClick={handleOpenNilaiR}
                  variant="gradient" bgColor="light" borderRadius="lg" coloredShadow="info"
                  display="sticky" alignItems="center" justifyContent="space-between">
                     <MDButton variant="text" color="black"> DATA REGRET MEASURE (R) </MDButton>
                  </MDBox>
                  { openNilaiR &&
                  <MDBox pt={3} mx={2}> 
                     <TableContainer sx={{ boxShadow: "none" }} component={Paper}>
                        <Table onClick={handleCloseNilaiR}>
                           <MDBox component="thead">
                              <TableRow>
                                 {regretMeasureColumns.map((item) => (
                                    <RegretMeasureColumns header={item.Header} width={item.width} align={item.align}/>
                                 ))}
                              </TableRow>
                           </MDBox>
                           <TableBody>
                              {regretMeasureRows.map((data, index) => (
                                 <RegretMeasureRows kode={data.kode} nilai_r={data.Nilai_R}/>
                              ))}
                           </TableBody>
                        </Table>
                     </TableContainer>
                  </MDBox>
                  }
               </Grid>

               <Grid item xs={12}>
                  <MDBox mx={2} mt={-3} py={1} px={2} onClick={handleOpenNilaiVikor}
                  variant="gradient" bgColor="light" borderRadius="lg" coloredShadow="info"
                  display="sticky" alignItems="center" justifyContent="space-between">
                     <MDButton variant="text" color="black"> DATA NILAI INDEKS VIKOR (Q) </MDButton>
                  </MDBox>
                  { openNilaiVikor &&
                  <MDBox pt={3} mx={2}> 
                        <TableContainer sx={{ boxShadow: "none" }} component={Paper}>
                           <Table onClick={handleCloseNilaiVikor}>
                              <MDBox component="thead">
                                 <TableRow>
                                    {qiColumns.map((item) => (
                                       <NilaiVikorColumns header={item.Header} width={item.width} align={item.align}/>
                                    ))}
                                 </TableRow>
                              </MDBox>
                              <TableBody>
                                 {qiRows.map((data, index) => (
                                    <NilaiVikorRows kodeAlt={data.kode} nilai_q={data.Nilai_Q}/>
                                 ))}
                              </TableBody>
                           </Table>
                        </TableContainer>
                  </MDBox>
                  }
               </Grid>

               <Grid item xs={12}>
                  <MDBox mx={2} mt={-3} py={1} px={2} onClick={handleOpenRankData}
                  variant="gradient" bgColor="light" borderRadius="lg" coloredShadow="info"
                  display="sticky" alignItems="center" justifyContent="space-between">
                     <MDButton variant="text" color="black"> PERANGKINGAN </MDButton>
                  </MDBox>
                  { openRankData &&
                  <MDBox pt={3} mx={2}> 
                     <TableContainer sx={{ boxShadow: "none" }} component={Paper}>
                        <Table onClick={handleCloseRankData}>
                           <MDBox component="thead">
                              <TableRow>
                                 {rankColumns.map((item) => (
                                    <RankColumns header={item.Header} width={item.width} align={item.align} />
                                 ))}
                              </TableRow>
                           </MDBox>
                           <TableBody>
                              {rankRows.map((data, index) => (
                                 <RankRows kodeAlt={data.kode} namaAlt={data.namaAlternatif} 
                                 Q={data.Nilai_Q} ranking={data.ranking} hasil={data.hasil} />
                              ))}
                           </TableBody>
                        </Table>
                     </TableContainer>
                  </MDBox>
                  }
               </Grid>
            </Grid>
         </MDBox>
      </DashboardLayout>
   );
}

export default PerhitunganVikor;
