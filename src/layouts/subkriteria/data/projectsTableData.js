// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

import Icon from "@mui/material/Icon";

import { useMaterialUIController } from "context";


// Images
// import LogoAsana from "assets/images/small-logos/logo-asana.svg";
// import logoGithub from "assets/images/small-logos/github.svg";
// import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
// import logoSlack from "assets/images/small-logos/logo-slack.svg";
// import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
// import logoInvesion from "assets/images/small-logos/logo-invision.svg";

export default function Data() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const SubKriteria = ({ name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  const BobotSubkriteria = ({ value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}
      </MDTypography>
      {/* <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox> */}
    </MDBox>
  );

  return {
    columns: [
      { Header: "no", accessor: "number", align: "center" },
      { Header: "nama subkriteria", accessor: "nama_subkriteria", width: "25%", align: "left" },
      { Header: "bobot subkriteria", accessor: "bobot_subkriteria", width: "25%", align: "center" },
      { Header: "action", accessor: "action", width: "30%", align: "center" },
    ],

    rows: [
      {
        number: <p>1</p>,
        nama_subkriteria: <SubKriteria name="Ada" />,
        bobot_subkriteria: <BobotSubkriteria value="5" />,
        action: (
          <MDBox>
            <MDButton variant="text" color={darkMode ? "white" : "dark"}>
              <Icon>edit</Icon>&nbsp;edit
            </MDButton>
            <MDButton variant="text" color="error">
              <Icon>delete</Icon>&nbsp;delete
            </MDButton>
          </MDBox>
        ),
      },
      // {
      //   project: <SubKriteria image={logoGithub} name="Github" />,
      //   budget: (
      //     <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
      //       $5,000
      //     </MDTypography>
      //   ),
      //   status: (
      //     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
      //       done
      //     </MDTypography>
      //   ),
      //   completion: <Progress color="success" value={100} />,
      //   action: (
      //     <MDTypography component="a" href="#" color="text">
      //       <Icon>more_vert</Icon>
      //     </MDTypography>
      //   ),
      // },
      // {
      //   project: <SubKriteria image={logoAtlassian} name="Atlassian" />,
      //   budget: (
      //     <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
      //       $3,400
      //     </MDTypography>
      //   ),
      //   status: (
      //     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
      //       canceled
      //     </MDTypography>
      //   ),
      //   completion: <Progress color="error" value={30} />,
      //   action: (
      //     <MDTypography component="a" href="#" color="text">
      //       <Icon>more_vert</Icon>
      //     </MDTypography>
      //   ),
      // },
      // {
      //   project: <SubKriteria image={logoSpotify} name="Spotify" />,
      //   budget: (
      //     <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
      //       $14,000
      //     </MDTypography>
      //   ),
      //   status: (
      //     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
      //       working
      //     </MDTypography>
      //   ),
      //   completion: <Progress color="info" value={80} />,
      //   action: (
      //     <MDTypography component="a" href="#" color="text">
      //       <Icon>more_vert</Icon>
      //     </MDTypography>
      //   ),
      // }
    ],
  };
}
