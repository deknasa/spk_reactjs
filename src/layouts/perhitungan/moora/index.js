import { useState } from "react";
import { Grid, TableContainer, Table, TableRow, TableBody, Paper } from "@mui/material";
import getData from "./data/dataMoora"
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Kriteria from "../data-kriteria/index";
// import Alternatif from "../vikor/data-alternatif/index";
// import Normalisasi from "../moora/normalisasi/index";
// import NilaiOptimasi from "../moora/nilaiOptimasi/index";
// import Rank from "../moora/rank/index";
import AlternatifColumns from "./data-alternatif/alternatifColumns";
import AlternatifTitle from "./data-alternatif/alternatifTitle";
import AlternatifRows from "./data-alternatif/alternatifRows";
import NormalisasiColumns from "./normalisasi/normalisasiColumns";
import NormalisasiTitle from "./normalisasi/normalisasiTitle";
import NormalisasiRows from "./normalisasi/normalisasiRows";
import NilaiOptimasiColumns from "./nilaiOptimasi/nilaiOptimasiColumns";
import NilaiOptimasiRows from "./nilaiOptimasi/nilaiOptimasiRows";
import RankingColumns from "./rank/rankingColumns";
import RankingRows from "./rank/rankingRows";

function PerhitunganMoora() {
   const { columns, title, rowsAlternatif, rowsNormalisasi, 
      nilaiOptimasiColumns, nilaiOptimasiRows,
      rankingColumns, rankingRows
   } = getData();

   const [openAlternatif, setOpenAlternatif] = useState(false);
   const handleOpenAlternatif = () => setOpenAlternatif(true);
   const handleCloseAlternatif = () => setOpenAlternatif(false);

   const [openNormalisasi, setOpenNormalisasi] = useState(false);
   const handleOpenNormalisasi = () => setOpenNormalisasi(true);
   const handleCloseNormalisasi = () => setOpenNormalisasi(false);

   const [openNilaiOptimasi, setOpenNilaiOptimasi] = useState(false);
   const handleOpenNilaiOptimasi = () => setOpenNilaiOptimasi(true);
   const handleCloseNilaiOptimasi = () => setOpenNilaiOptimasi(false);

   const [openDataRanking, setOpenDataRanking] = useState(false);
   const handleOpenDataRanking = () => setOpenDataRanking(true);
   const handleCloseDataRanking = () => setOpenDataRanking(false);

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
                                 <AlternatifRows 
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
                                    <NormalisasiColumns header={item.Header} width={item.width} align={item.align} />
                                 ))}
                                 {title.map((item) => (
                                    <NormalisasiTitle header={item.Header} width={item.width} align={item.align} />
                                 ))}
                              </TableRow>
                           </MDBox>
                           <TableBody>
                              {rowsNormalisasi.map((data, index) => (
                                 <NormalisasiRows 
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
                  <MDBox mx={2} mt={-3} py={1} px={2} onClick={handleOpenNilaiOptimasi}
                  variant="gradient" bgColor="light" borderRadius="lg" coloredShadow="info"
                  display="sticky" alignItems="center" justifyContent="space-between">
                     <MDButton variant="text" color="black"> DATA NILAI OPTIMASI (Yi) </MDButton>
                  </MDBox>
                  { openNilaiOptimasi &&
                  <MDBox pt={3} mx={2}> 
                     <TableContainer sx={{ boxShadow: "none" }} component={Paper}>
                        <Table onClick={handleCloseNilaiOptimasi}>
                           <MDBox component="thead">
                              <TableRow>
                                 {nilaiOptimasiColumns.map((item) => (
                                    <NilaiOptimasiColumns header={item.Header} width={item.width} align={item.align} />
                                 ))}
                              </TableRow>
                           </MDBox>
                           <TableBody>
                              {nilaiOptimasiRows.map((data, index) => (
                                 <NilaiOptimasiRows kode={data.kode} nilai_yi={data.Nilai_Yi}/>
                              ))}
                           </TableBody>
                        </Table>
                     </TableContainer>
                  </MDBox>
                  }  
               </Grid>

               <Grid item xs={12}>
                  <MDBox mx={2} mt={-3} py={1} px={2} onClick={handleOpenDataRanking}
                  variant="gradient" bgColor="light" borderRadius="lg" coloredShadow="info"
                  display="sticky" alignItems="center" justifyContent="space-between">
                     <MDButton variant="text" color="black"> PERANGKINGAN </MDButton>
                  </MDBox>
                  {openDataRanking &&
                  <MDBox pt={3} mx={2}> 
                        <TableContainer sx={{ boxShadow: "none" }} component={Paper}>
                           <Table onClick={handleCloseDataRanking}>
                              <MDBox component="thead">
                                 <TableRow>
                                    {rankingColumns.map((item) => (
                                       <RankingColumns header={item.Header} width={item.width} align={item.align} />
                                    ))}
                                 </TableRow>
                              </MDBox>

                              <TableBody>
                                    {rankingRows.map((data) => (
                                       <RankingRows 
                                       kode={data.kode} nama={data.namaAlternatif} nilai_yi={data.Nilai_Yi} 
                                       ranking={data.ranking} hasil={data.hasil} />
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

export default PerhitunganMoora;
