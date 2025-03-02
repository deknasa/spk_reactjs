// import { Table } from "antd";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid, Card, Icon } from "@mui/material";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";
import getKriteria from "./data/authorsTableData"
import { useReactToPrint } from "react-to-print";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Kriteria() {
  const navigate = useNavigate();
  const getCookie = Cookies.get('authentication')
  useEffect(() => {
    const getCookie = Cookies.get('authentication')
    if (!getCookie) {
      navigate("/authentication/sign-in")
      // alert("If you have logged out, please log in again")
    }
  });

  const { columns, rows } = getKriteria();
  let componentRef = useRef();

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
            <MDBox display="flex" justifyContent="right">
              <MDBox pr={1} pl={1}>
                <Link to="/kriteria/addKriteria" component="a">
                  <MDButton variant="gradient" color="secondary" fontWeight="medium">
                    <Icon fontSize="small">add</Icon>
                    Tambah Kriteria
                  </MDButton>
                </Link>
              </MDBox>
              {/* <MDBox>
                <MDButton ml={4} component="a" href="#" variant="gradient" color="secondary" 
                fontWeight="medium"
                onClick={handlePrint}>
                  <Icon fontSize="small">print</Icon>
                  Print
                </MDButton>
              </MDBox> */}
            </MDBox>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <MDBox mx={2} mt={-3} py={3} px={2} variant="gradient"
              bgColor="info" borderRadius="lg" coloredShadow="info"
              display="flex" alignItems="center" justifyContent="space-between">
                <MDTypography variant="h6" color="white">
                  DATA KRITERIA
                </MDTypography>
              </MDBox>

              <MDBox pt={3}>
                {/* <div className="table-responsive">
                  <Table columns={columns} dataSource={data} />
                </div> */}
                <DataTable
                  // ref={componentRef}
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>

          {/* BUTTON TAMBAH KRITERIA
          <MDBox 
            ml={110}
            pt={4} 
          >
            <MDButton component="a" href="#"  variant="gradient" color="secondary" fontWeight="medium">
              Tambah Sub Kriteria
            </MDButton>
          </MDBox> */}

          {/* TABEL SUB KRITERIA */}
          {/* <Grid item xs={12}>
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
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid> */}
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Kriteria;
