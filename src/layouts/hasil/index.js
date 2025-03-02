import axios from "axios";
import { useReactToPrint } from "react-to-print";
import { useEffect, useState, useRef } from "react";
import { useMaterialUIController } from "context";
import { alternatifURL } from "URL/url";
import { Grid, Card, Icon, TableContainer, Table, TableRow, TableBody, Paper } from "@mui/material/";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDProgress from "components/MDProgress";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import getDataAlternatif from "./data/hasilTableData"
import DataTableRows from "./data/dataTableRows";
import CurrencyFormat from "react-currency-format"

const Progress = ({ color, value }) => (
   <MDBox display="flex" alignItems="center">
     <MDTypography variant="caption" color="text" fontWeight="medium">
       {value}%
     </MDTypography>
     <MDBox ml={0.5} width="9rem">
       <MDProgress variant="gradient" color={color} value={value} />
     </MDBox>
   </MDBox>
);

function Hasil (props) { 
   let componentRef = useRef();
   const { columns, rows } = getDataAlternatif();
   const [controller] = useMaterialUIController();
   const { darkMode } = controller; 
   const [ searchItem, setSearchItem ] = useState("")
   const [ filter, setFilter ] = useState([])

   useEffect(() => {
   axios.get(`${alternatifURL}/getAllAlternatif`, {
      headers: { 'Content-Type': 'multipart/form-data' }
   }).then(response => {
         setFilter(response.data.alternatif);
   }).catch( error => console.log(error))
   
   }, [])

   const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      documentTitle: 'Data Hasil Akhir Sistem Pendukung Keputusan',
   })
  
   const handleInputChange = (e) => {
      const searchTerm = e.target.value
      setSearchItem(searchTerm)
      const filtered = rows.filter((item) =>
      item.keterangan.toLowerCase().includes(searchTerm.toLowerCase()) 
      )
      setFilter(filtered)
   }

    return(
      <>
      <DashboardLayout>
         <DashboardNavbar />
               <MDBox pt={6} pb={3}>
                  <Grid container spacing={6}>
                     <Grid item xs={12} mx={2} >
                        <MDTypography variant="caption" color="text" fontWeight="medium">
                           Akurasi VIKOR:
                        </MDTypography>
                        <MDBox display="flex" alignItems="center">
                           <MDBox width="100rem">
                              <MDProgress variant="gradient" color={"info"} value={75} />
                           </MDBox>
                           <MDTypography ml={0.5} variant="caption" color="text" fontWeight="medium">
                           75%
                           </MDTypography>
                        </MDBox>
                        <MDTypography variant="caption" color="text" fontWeight="medium">
                           Akurasi MOORA:
                        </MDTypography>
                        <MDBox display="flex" alignItems="center">
                           <MDBox width="100rem">
                              <MDProgress variant="gradient" color={"warning"} value={69} />
                           </MDBox>
                           <MDTypography ml={0.5} variant="caption" color="text" fontWeight="medium">
                           69%
                           </MDTypography>
                        </MDBox>
                     </Grid>

                     <Grid item xs={12} mx={2}>
                        <MDBox display="flex" justifyContent="space-between">
                           <MDBox display="flex">
                              <MDBox>
                                 <MDInput label="Search here" value={searchItem} onChange={handleInputChange} />
                              </MDBox>
                           </MDBox>
                           <MDBox>
                              <MDButton ml={4} component="a" href="#" variant="gradient" 
                              color="secondary" fontWeight="medium" onClick={handlePrint}>
                              <Icon fontSize="small">print</Icon>
                              Print
                              </MDButton>
                           </MDBox>
                        </MDBox>
                     </Grid>

                     <Grid item xs={12}>
                        <Card>
                           <MDBox mx={2} mt={-3} py={3} px={2} variant="gradient" bgColor="info"
                           borderRadius="lg" coloredShadow="info" display="flex"
                           alignItems="center" justifyContent="space-between" ref={componentRef}>
                              <MDTypography variant="h6" color="white" >
                              DATA HASIL AKHIR
                              </MDTypography>
                           </MDBox>

                           <MDBox pt={3} mx={2}>
                              <TableContainer sx={{ boxShadow: "none" }} component={Paper} ref={componentRef}> 
                                 <Table>
                                    <MDBox component="thead">
                                       <TableRow>
                                          {columns.map((item) => (
                                          <MDBox component="th" width={item.width ? item.width : "auto"}
                                          py={1.5} px={1}
                                          sx={({ palette: { light }, borders: { borderWidth } }) => ({
                                          borderBottom: `${borderWidth[1]} solid ${light.main}`})}>
                                             <MDBox position="relative" align="center"
                                             textAlign={item.align ? item.align : "center"}
                                             color={darkMode ? "white" : "secondary"}
                                             // color={"black"}
                                             opacity={0.7}
                                             sx={({ typography: { size, fontWeightBold } }) => ({
                                                fontSize: size.xxs, fontWeight: fontWeightBold, textTransform: "uppercase",
                                             })}>
                                                {item.Header} 
                                             </MDBox>
                                          </MDBox>
                                          ))}
                                       </TableRow>
                                    </MDBox>

                                    <TableBody>
                                       {filter.map((data, idx) => (
                                          <DataTableRows 
                                          // number={idx + 1} 
                                          kode={data.kode_alternatif}
                                          nama={data.nama_alternatif} 
                                          ket={data.keterangan}
                                          Vtotal={data.vikor_total}
                                          Vrank={data.vikor_rank}
                                          Vhasil={data.vikor_hasil}
                                          Vharga={data.hitung_harga}
                                          Mtotal={data.moora_total}
                                          Mrank={data.moora_rank}
                                          Mhasil={data.moora_hasil}
                                          Mharga={data.hitung_harga}
                                          />
                                       ))}
                                    </TableBody>
                                 </Table>
                              </TableContainer>
                           </MDBox>
                        </Card>
                     </Grid>
                  </Grid>
               </MDBox>
         </DashboardLayout>
      </>
    )
}

export default Hasil;
            