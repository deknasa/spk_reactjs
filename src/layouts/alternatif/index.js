import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useMaterialUIController } from "context";
import { alternatifURL } from "URL/url";
import { Grid, Card, Icon, TableContainer, Table, TableRow, TableBody, Paper, TableCell, TableFooter, 
  TablePagination } from "@mui/material/";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import getAlternatif from "./data/alternatifsTableData";
import TablePaginationActions from "./data/tablePaginationActions"
import DataTableRows from "./data/dataTableRows";
import { useReactToPrint } from "react-to-print";

function Alternatif() {
  let componentRef = useRef();
  const { columns, rows } = getAlternatif();
  const [controller] = useMaterialUIController();
  const { darkMode } = controller; 
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  const handleChangePage = (event, newPage) => { setPage(newPage); };
  const handleChangeRowsPerPage = (event) => { setRowsPerPage(parseInt(event.target.value, 10)); setPage(0); };

  const [ searchItem, setSearchItem ] = useState("")
  const [ filter, setFilter ] = useState([])

  useEffect(() => {
    axios.get(`${alternatifURL}/getAllAlternatif`, {
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then(response => {
        setFilter(response.data.alternatif);
    }).catch( error => console.log(error))
  }, [])

  const handleInputChange = (e) => {
    const searchTerm = e.target.value
    setSearchItem(searchTerm)
    const filtered = rows.filter((item) => item.keterangan.toLowerCase().includes(searchTerm.toLowerCase()))
    setFilter(filtered)
  }

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Data Kriteria',
    // onAfterPrint: () => alert("Print Sukses")
  })

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12} mx={2}>
          <MDBox display="flex" justifyContent="space-between">
            <MDBox display="flex">
              <MDBox>
                <MDInput label="Search here" value={searchItem} onChange={handleInputChange} />
              </MDBox>
            </MDBox>

            <MDBox display="flex">
              <MDBox pr={1}>
                <MDButton component="a" href='/alternatif/addAlternatif'  variant="gradient" color="secondary" fontWeight="medium">
                  <Icon fontSize="small">add</Icon>
                  Tambah Alternatif
                </MDButton>
              </MDBox>
              <MDBox>
                <MDButton ml={4} component="a" href="#" variant="gradient" color="secondary" 
                fontWeight="medium" onClick={handlePrint}>
                  <Icon fontSize="small">print</Icon>
                  Print
                </MDButton>
              </MDBox>
            </MDBox>
          </MDBox>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <MDBox mx={2} mt={-3} py={3} px={2} variant="gradient" bgColor="info" borderRadius="lg"
                coloredShadow="info" display="flex" alignItems="center" justifyContent="space-between">
                <MDTypography variant="h6" color="white">
                  DATA ALTERNATIF
                </MDTypography>
              </MDBox>

              <MDBox pt={3} mx={2}>
                <TableContainer sx={{ boxShadow: "none" }} component={Paper}>
                  <Table ref={componentRef}>
                    <MDBox component="thead">
                      <TableRow>
                        {columns.map((item) => (
                          <MDBox component="th" width={item.width ? item.width : "auto"}
                          py={1.5} px={3}
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
                      {(rowsPerPage > 0 
                        ? filter.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : filter
                      ).map((data, idx) => (
                        <DataTableRows number={idx + 1} kode={data.kode_alternatif}
                        nama={data.nama_alternatif} ket={data.keterangan}/>
                      ))}

                      {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                          <TableCell colSpan={6} />
                        </TableRow>
                      )}
                    </TableBody>

                    <TableFooter>
                      <TableRow>
                        <TablePagination
                          rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                          count={rows.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          SelectProps={{
                            inputProps: { 'aria-label': 'rows per page', },
                            native: true,
                          }}
                          onPageChange={handleChangePage}
                          onRowsPerPageChange={handleChangeRowsPerPage}
                          ActionsComponent={TablePaginationActions}
                        />
                      </TableRow>
                    </TableFooter>
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


