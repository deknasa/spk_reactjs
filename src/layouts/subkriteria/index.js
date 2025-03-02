// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { TableContainer, Table, TableRow, TableCell, TableBody, Paper } from "@mui/material";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Data
import subkriteriaTableData from "layouts/subkriteria/data/subkriteriaTableData";
import MapJudul from "./data/mapJudul";
import RenderDeleteModal from "./delete-subkriteria";

import { useMaterialUIController } from "context";
import TableHeader from "./data/tableHeader";

function Tables() {
  const { 
    columns, 
    // rows, 
    title 
  } = subkriteriaTableData();

    const [controller] = useMaterialUIController();
    const { darkMode } = controller;

  // console.log(rows);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        {/* <Grid container spacing={6}>   */}
        <Grid item xs={12}>
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
            >
              <MDTypography variant="h6" color="white"> 
                DATA SUB KRITERIA
              </MDTypography>
            </MDBox>

            {title.map(item => (
              <MDBox>
                <MapJudul kode={item.kode_kriteria} nama={item.nama_kriteria}/>
                
                <TableContainer sx={{ boxShadow: "none" }} component={Paper}>
                  <Table>
                    <MDBox component="thead">
                      <TableRow>
                        {columns.map((column) => (
                          <TableHeader header={column.Header} width={column.width} align={column.align}/>
                        ))}
                      </TableRow>
                    </MDBox>

                    <TableBody>
                      {item.sub_kriteria.sort((a, b) => (
                        a.bobot_subkriteria < b.bobot_subkriteria ? 1 :-1
                      )).map((data, index) => (
                        <TableRow key={data.id}>
                          <TableCell align="center" scope="row" padding="none">
                            {index + 1} 
                          </TableCell>
                          <TableCell align="left">
                            {data.nama_subkriteria}
                          </TableCell>
                          <TableCell align="center">
                            {data.bobot_subkriteria}
                          </TableCell>
                          <TableCell align="center">
                            <MDBox>
                              <MDButton 
                              key="edit"
                              variant="text" 
                              color={darkMode ? "white" : "dark"}
                              href={`/subkriteria/${data.id}/editSubkriteria`} 
                              >
                                <Icon>edit</Icon>&nbsp;edit
                              </MDButton>
                              {/* <MDButton variant="text" color="error">
                                <Icon>delete</Icon>&nbsp;delete
                              </MDButton> */}
                              <RenderDeleteModal
                              id={data.id} 
                              />
                            </MDBox>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </MDBox>
            ))}
          </Card>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Tables;
