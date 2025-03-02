import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ProfileInfoCardd from "layouts/userProfile/data/ProfileInfoCard";
import Header from "layouts/userProfile/components/Header";

// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import MDTypography from "components/MDTypography";
// Material Dashboard 2 React example components
// Overview page components
// import PlatformSettings from "layouts/profile/components/PlatformSettings";
// import profilesListData from "layouts/profile/data/profilesListData";
// import homeDecor1 from "assets/images/home-decor-1.jpg";
// import homeDecor2 from "assets/images/home-decor-2.jpg";
// import homeDecor3 from "assets/images/home-decor-3.jpg";
// import homeDecor4 from "assets/images/home-decor-4.jpeg";
// import team1 from "assets/images/team-1.jpg";
// import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";

function Overview() {
    const token = Cookies.get("authentication")
    const decodeToken = jwtDecode(token)
    const fullname = decodeToken.full_name
    const email = decodeToken.email
    const userId = decodeToken.id

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <MDBox mt={5} mb={3}>
          <Grid 
        //   container spacing={1}
          >
            <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <ProfileInfoCardd
                title="profile information"
                // description="Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
                info={{
                    fullName: `${fullname}`,
                    email: `${email}`,
                //   mobile: "(44) 123 1234 123",
                //   location: "USA",
                }}
                action={{ route: `/user-profile/${userId}/edit-profile`, tooltip: "Edit Profile" }}
                shadow={false}
              />
              <Divider orientation="vertical" sx={{ mx: 0 }} /> 
            </Grid>
            {/* <Grid item xs={12} xl={4}>
              <ProfilesList title="conversations" profiles={profilesListData} shadow={false} />
            </Grid> */}
          </Grid>
        </MDBox>
      </Header>
    </DashboardLayout>
  );
}

export default Overview;
