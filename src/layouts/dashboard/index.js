import { Icon, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { kriteriaURL, subkriteriaURL, alternatifURL } from "URL/url";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import Cookies from "js-cookie";

function Dashboard() {
  const navigate = useNavigate();
  const getCookie = Cookies.get('authentication')
  useEffect(() => {
    const getCookie = Cookies.get('authentication')
    if (!getCookie) {
      navigate("/authentication/sign-in")
    }
  });
  
  const [kriCount, setKriCount] = useState("");
  const [subkriCount, setSubkriCount] = useState("");
  const [altCount, setAltCount] = useState("");

  const kriteriaCount = async () => {
    let data
    const response = await fetch(`${kriteriaURL}/count`, {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json'
      },
    })
    data = await response.json();
    setKriCount(data.count)
    console.log(data.count)
    return data
  }

  const subkriteriaCount = async () => {
    let data
    const response = await fetch(`${subkriteriaURL}/count`, {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json'
      },
    })
    data = await response.json();
    setSubkriCount(data.count)
    console.log(data.count)
    return data
  }

  const alternatifCount = async () => {
    let data
    const response = await fetch(`${alternatifURL}/count`, {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json'
      },
    })
    data = await response.json();
    setAltCount(data.count)
    console.log(data.count)
    return data
  }

  useEffect(() => {
    kriteriaCount();
    subkriteriaCount();
    alternatifCount()
  }, []);  

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5} >
              <ComplexStatisticsCard
                color="dark"
                icon="checklist"
                title="DATA KRITERIA"
                count={kriCount}
                percentage={{
                  color: "success",
                  amount: "",
                  label: 
                    <MDBox component="a" href="/kriteria">
                      Selengkapnya
                      <Icon mt={3}>keyboard_double_arrow_right</Icon>
                    </MDBox>,
                }}
              />
            </MDBox>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="notes"
                title="DATA SUBKRITERIA"
                count={subkriCount}
                percentage={{
                  color: "success",
                  amount: "",
                  label: 
                    <MDBox component="a" href="/subkriteria">
                      Selengkapnya
                      <Icon mt={3}>keyboard_double_arrow_right</Icon>
                    </MDBox>,
                }}
              />
            </MDBox>
          </Grid>
          
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="groups"
                title="DATA ALTERNATIF"
                count={altCount}
                percentage={{
                  color: "success",
                  amount: "",
                  label: 
                    <MDBox component="a" href="/alternatif">
                      Selengkapnya
                      <Icon mt={3}>keyboard_double_arrow_right</Icon>
                    </MDBox>,
                }}
              />
            </MDBox>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="calculate"
                title="HASIL AKHIR"
                count="Vikor Moora"
                percentage={{
                  color: "success",
                  amount: "",
                  label: 
                    <MDBox component="a" href="/perhitungan">
                      Selengkapnya
                      <Icon mt={3}>keyboard_double_arrow_right</Icon>
                    </MDBox>,
                }}
                // percentage={{
                //   color: "success",
                //   amount: "",
                //   label: "Just updated",
                // }}
              />
            </MDBox>
          </Grid>
        </Grid>
        
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
