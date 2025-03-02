// import { useState } from "react";
// import MDBox from "components/MDBox";
// import MDButton from "components/MDButton";
// import getDataNormalisasi from "./normalisasiTableData"
// import { useMaterialUIController } from "context";
// import { TableContainer, Table, TableRow, TableBody, Paper } from "@mui/material";

// function Normalisasi (props) { 
//     const { columns, rows, title } = getDataNormalisasi();
//     const [controller] = useMaterialUIController();
//     const { darkMode } = controller;

//     const [openData, setOpenData] = useState(false);
//     const handleOpenData = () => setOpenData(true);
//     const handleCloseData = () => setOpenData(false);

//     return(
//         <>
//         <MDBox mx={2} mt={-3} py={1} px={2} onClick={handleOpenData}
//         variant="gradient" bgColor="light" borderRadius="lg" coloredShadow="info"
//         display="sticky" alignItems="center" justifyContent="space-between">
//             <MDButton variant="text" color="black">
//                 DATA NORMALISASI
//             </MDButton>
//         </MDBox>

//         { openData &&
//         <MDBox pt={3} mx={2}> 
//             <TableContainer sx={{ boxShadow: "none" }} component={Paper}>
//                 <Table onClick={handleCloseData}>
//                     <MDBox component="thead">
//                         <TableRow>
//                             {columns.map((item) => (
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
//                             {title.map((item) => (
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
//                         {rows.map((data, index) => (
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
//                                         { data.C1 }
//                                     </MDBox>
//                                 </MDBox>

//                                 <MDBox component="td" align="center" py={1.5} px={3}
//                                 sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
//                                 fontSize: size.sm, })}>
//                                     <MDBox display="inline-block" width="max-content" color="text"
//                                     sx={{ verticalAlign: "middle" }}>
//                                         { data.C2 }
//                                     </MDBox>
//                                 </MDBox>

//                                 <MDBox component="td" align="center" py={1.5} px={3}
//                                 sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
//                                 fontSize: size.sm, })}>
//                                     <MDBox display="inline-block" width="max-content" color="text"
//                                     sx={{ verticalAlign: "middle" }}>
//                                         { data.C3 }
//                                     </MDBox>
//                                 </MDBox>

//                                 <MDBox component="td" align="center" py={1.5} px={3}
//                                 sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
//                                 fontSize: size.sm, })}>
//                                     <MDBox display="inline-block" width="max-content" color="text"
//                                     sx={{ verticalAlign: "middle" }}>
//                                         { data.C4 }
//                                     </MDBox>
//                                 </MDBox>

//                                 <MDBox component="td" align="center" py={1.5} px={3}
//                                 sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
//                                 fontSize: size.sm, })}>
//                                     <MDBox display="inline-block" width="max-content" color="text"
//                                     sx={{ verticalAlign: "middle" }}>
//                                         { data.C5 }
//                                     </MDBox>
//                                 </MDBox>

//                                 <MDBox component="td" align="center" py={1.5} px={3}
//                                 sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
//                                 fontSize: size.sm, })}>
//                                     <MDBox display="inline-block" width="max-content" color="text"
//                                     sx={{ verticalAlign: "middle" }}>
//                                         { data.C6 }
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

// export default Normalisasi;
            