import { Grid, Card, Icon, TableContainer, Table, TableRow, TableCell, TableBody, Paper } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import penilaianTableData from "layouts/penilaian/data/penilaianTableData";
import TableHeader from "./data/tableHeader";

function Alternatif() {
  const { rel_alternatif } = penilaianTableData();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          {/* <MDBox ml={8}pt={4} display="flex">
            <MDBox>
              <MDInput label="Search here" />
            </MDBox>
          </MDBox> */}

          <Grid item xs={12}>
            <Card>
              <MDBox mx={2} mt={-3} py={3} px={2} variant="gradient" bgColor="info"
              borderRadius="lg" coloredShadow="info" display="flex" alignItems="center" justifyContent="space-between">
                <MDTypography variant="h6" color="white">DATA PENILAIAN ALTERNATIF</MDTypography>
              </MDBox> 

              <MDBox pt={3}>
                <TableContainer sx={{ boxShadow: "none" }} component={Paper}>
                  <Table>
                    <MDBox component="thead">
                      <TableRow>
                        <TableHeader />
                      </TableRow>
                    </MDBox>

                    <TableBody>
                      {rel_alternatif.map((data, index) => (
                        <TableRow>
                          <MDBox
                          component="td"
                          align={data.align ? data.align : "center"}
                          py={1.5} // px={3}
                          sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
                            fontSize: size.sm,
                          })}>
                            <MDBox
                            display="inline-block"
                            width="max-content"
                            color="text"
                            sx={{ verticalAlign: "middle" }}>
                              { index + 1 }
                            </MDBox>
                          </MDBox>

                          <MDBox 
                          component="td"
                          align={data.align ? data.align : "center"}
                          py={1.5}
                          sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
                            fontSize: size.sm,
                          })}>
                            <MDBox
                            display="inline-block"
                            width="max-content"
                            color="text"
                            sx={{ verticalAlign: "middle" }}>
                              { data.kode_alternatif }
                            </MDBox>
                          </MDBox>

                          <MDBox
                          component="td"
                          align={data.align ? data.align : "left"}
                          py={1.5}
                          pl={2}
                          sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
                            fontSize: size.sm,
                          })}>
                            <MDBox
                            display="inline-block"
                            width="max-content"
                            color="text"
                            sx={{ verticalAlign: "middle" }}>
                              { data.nama_alternatif }
                            </MDBox>
                          </MDBox>

                          {data.kriteria.map(item => (
                            <MDBox
                            component="td"
                            align={data.align ? data.align : "center"}
                            py={1.5}
                            px={3}
                            sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
                              fontSize: size.sm,
                            })}>
                              <MDBox
                              display="inline-block"
                              width="max-content"
                              color="text"
                              sx={{ verticalAlign: "middle" }}>
                                {/* { item.id_subkriteria ? (<div>{item.nama_subkriteria}</div>) : (<>{parseInt(0)}</>) } */}
                                {item.nama_subkriteria}
                              </MDBox>
                            </MDBox>
                          ))}

                          <MDBox
                          component="td"
                          align={data.align ? data.align : "left"}
                          py={1.5}
                          px={3}
                          sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
                            fontSize: size.sm,
                          })}>
                            <MDBox
                            display="inline-block"
                            width="max-content"
                            color="text"
                            sx={{ verticalAlign: "middle" }}>
                              <MDButton href={`/penilaian/${data.kode_alternatif}/${data.nama_alternatif}/editPenilaian`}>
                                <Icon>edit</Icon>&nbsp;edit
                              </MDButton>
                            </MDBox>
                          </MDBox>
                        </TableRow>
                      ))}
                    </TableBody>

                    {/* <TableBody>
                      {data_alternatif.map((data, index) => (
                        <TableRow>
                          <TableCell align="center" scope="row" padding="none"> {index + 1} </TableCell>
                          <TableCell align="left"> {data.kode_alternatif} </TableCell>
                          <TableCell align="left"> {data.nama_alternatif} {data.keterangan} </TableCell>
                          {rel_alternatif.map((item, idx) => (
                            console.log(item.kriteria.hasOwnProperty("kriteria")),
                            <TableCell>
                              {item.hasOwnProperty("kriteria") && data.hasOwnProperty("nama_alternatif") ? (<div>ess</div>) : (<div>{parseInt(0)}</div>)}
                            </TableCell>
                          ))}
                          <TableCell align="center"></TableCell>
                          <TableCell align="center">
                            <MDBox>
                              <MDButton 
                              key="edit"
                              variant="text" 
                              color={darkMode ? "white" : "dark"}>
                                <Icon>edit</Icon>&nbsp;edit
                              </MDButton>
                            </MDBox>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody> */}
                  </Table>
                </TableContainer>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Alternatif;