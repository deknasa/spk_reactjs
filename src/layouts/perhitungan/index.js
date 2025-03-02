import { Link } from "react-router-dom";
import { Grid, Icon } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function Perhitungan() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <MDBox mx={2} mt={-1} py={2.5} px={2} variant="gradient" bgColor="info" borderRadius="lg"
            coloredShadow="info" display="flex" alignItems="center" justifyContent="space-between">
              <MDTypography variant="h6" color="white">PERHITUNGAN METODE VIKOR</MDTypography>
              <MDBox textAlign="center">
                <MDTypography component={Link} to="/perhitungan/vikor" variant="button" color="dark" fontWeight="medium" textGradient>
                  <Icon fontSize="medium" href={`perhitungan/vikor`}>arrow_forward_ios</Icon>
                </MDTypography>
              </MDBox>
            </MDBox>

            <MDBox mx={2} mt={3} py={2.5} px={2} variant="gradient" bgColor="info" borderRadius="lg"
            coloredShadow="info" display="flex" alignItems="center" justifyContent="space-between">
              <MDTypography variant="h6" color="white">PERHITUNGAN METODE MOORA</MDTypography>
              <MDBox textAlign="center">
                <MDTypography component={Link} to="/perhitungan/moora" variant="button" color="dark" fontWeight="medium" textGradient>
                  <Icon fontSize="medium">arrow_forward_ios</Icon>
                </MDTypography>
              </MDBox>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Perhitungan;
