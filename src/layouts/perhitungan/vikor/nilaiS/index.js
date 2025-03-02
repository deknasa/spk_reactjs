// import { useState } from "react";
// import MDBox from "components/MDBox";
// import MDButton from "components/MDButton";
// import getData from "../data/dataAlternatif"
// import { useMaterialUIController } from "context";
// import { TableContainer, Table, TableRow, TableBody, Paper } from "@mui/material";

// function NilaiS (props) { 
//     const { utilityMeasureColumns, utilityMeasureRows } = getData();
//     const [controller] = useMaterialUIController();
//     const { darkMode } = controller;
//     const [openNilaiS, setOpenNilaiS] = useState(false);
//     const handleOpenNilaiS = () => setOpenNilaiS(true);
//     const handleCloseNilaiS = () => setOpenNilaiS(false);

//     return(
//         <>
//         <MDBox mx={2} mt={-3} py={1} px={2} onClick={handleOpenNilaiS}
//         variant="gradient" bgColor="light" borderRadius="lg" coloredShadow="info"
//         display="sticky" alignItems="center" justifyContent="space-between">
//             <MDButton variant="text" color="black">
//                 DATA UTILITY MEASURE (S) 
//             </MDButton>
//         </MDBox>

//         { openNilaiS &&
//         <MDBox pt={3} mx={2}> 
//             <TableContainer sx={{ boxShadow: "none" }} component={Paper}>
//                 <Table onClick={handleCloseNilaiS}>
//                     <MDBox component="thead">
//                         <TableRow>
//                             {utilityMeasureColumns.map((item) => (
//                                 <MDBox component="th" width={item.width ? item.width : "auto"}
//                                 py={1.5} px={3}
//                                 sx={({ palette: { light }, borders: { borderWidth } }) => ({
//                                 borderBottom: `${borderWidth[1]} solid ${light.main}`})}>
//                                     <MDBox position="relative" align="center"
//                                     textAlign={item.align ? item.align : "center"}
//                                     color={darkMode ? "white" : "secondary"}
//                                     opacity={0.7}
//                                     sx={({ typography: { size, fontWeightBold } }) => ({
//                                         fontSize: size.xxs,
//                                         fontWeight: fontWeightBold,
//                                         textTransform: "uppercase",
//                                     })}>
//                                         {item.Header} 
//                                     </MDBox>
//                                 </MDBox>
//                             ))}
//                         </TableRow>
//                     </MDBox>

//                     <TableBody>
//                         {utilityMeasureRows.map((data, index) => (
//                             <TableRow>
//                                 <MDBox component="td" align="center" py={1.5} px={3}
//                                 sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
//                                 fontSize: size.sm, })}>
//                                     <MDBox display="inline-block" width="max-content" color="text"
//                                     sx={{ verticalAlign: "middle" }}>
//                                         { data.kode }
//                                     </MDBox>
//                                 </MDBox>

//                                 <MDBox component="td" align="center" py={1.5} px={3}
//                                 sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
//                                 fontSize: size.sm, })}>
//                                     <MDBox display="inline-block" width="max-content" color="text"
//                                     sx={{ verticalAlign: "middle" }}>
//                                         { data.Nilai_S }
//                                     </MDBox>
//                                 </MDBox>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//         </MDBox>
//         }   
//         </>
//     )
// }

// export default NilaiS;
            