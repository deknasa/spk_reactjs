/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Homepage from "layouts/homepage";
import Aboutpage from "layouts/aboutPage";
import Dashboard from "layouts/dashboard";

import Kriteria from "layouts/kriteria";
import AddKriteria from "layouts/kriteria/add-kriteria";
import EditKriteria from "layouts/kriteria/edit-kriteria";

import SubKriteria from "layouts/subkriteria";
import AddSubkriteria from "layouts/subkriteria/add-subkriteria";
import EditSubkriteria from "layouts/subkriteria/edit-subkriteria";

import Alternatif from "layouts/alternatif/index";
import AddAlternatif from "layouts/alternatif/add-alternatif"
import EditAlternatif from "layouts/alternatif/edit-alternatif";

import Penilaian from "layouts/penilaian";
import EditPenilaian from "layouts/penilaian/edit-penilaian";

import Perhitungan from "layouts/perhitungan";
import PerhitunganVikor from "layouts/perhitungan/vikor";
import PerhitunganMoora from "layouts/perhitungan/moora";

import Hasil from "layouts/hasil";

import UserProfile from "layouts/userProfile"
import EditProfile from "layouts/userProfile/edit-profile";
import ChangePassword from "layouts/userProfile/change-password";

import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

import Icon from "@mui/material/Icon";
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
// import { Accordion, AccordionSummary } from "@mui/material";

// import jwtDecode from "jwt-decode";
// import Cookies from "js-cookie";

// const token = Cookies.get("authentication")
// const decodeToken = jwtDecode(token)
// const authRoute = decodeToken.email

const routes = [
  {
    // type: "collapse",
    name: "Homepage",
    key: "homepage",
    icon: <Icon fontSize="small">homepage</Icon>,
    route: "/",
    component: <Homepage />,
  },
  {
    // type: "title",
    name: "Aboutpage",
    key: "aboutpage",
    icon: <Icon fontSize="small">info</Icon>,
    route: "/about",
    component: <Aboutpage />,
  },
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  
  {
    type: "collapse",
    name: "Kriteria",
    key: "kriteria",
    icon: <Icon fontSize="small">checklist</Icon>,
    route: "/kriteria",
    component: <Kriteria />,
  },
  {
    // type: "collapse",
    name: "addKriteria",
    key: "add-kriteria",
    icon: <Icon fontSize="small">checklist</Icon>,
    route: "kriteria/addKriteria",
    component: <AddKriteria />,
  },
  {
    // type: "collapse",
    name: "editKriteria",
    key: "edit-kriteria",
    icon: <Icon fontSize="small">checklist</Icon>,
    route: "kriteria/:kodeKriteria/editKriteria",
    component: <EditKriteria />,
  },
  // {
  //   // type: "collapse",
  //   name: "deleteKriteria",
  //   key: "delete-kriteria",
  //   route: "/kriteria/:kriteriaId",
  //   component: <Kriteria />,
  // },

  {
    type: "collapse",
    name: "Subkriteria",
    key: "subkriteria",
    icon: <Icon fontSize="small">notes</Icon>,
    route: "/subkriteria",
    component: <SubKriteria />,
  },
  {
    name: "addSubkriteria",
    key: "add-subkriteria",
    icon: <Icon fontSize="small">checklist</Icon>,
    route: "subkriteria/:kodeKriteria/addSubkriteria",
    component: <AddSubkriteria />,
  },
  {
    name: "editSubkriteria",
    key: "edit-subkriteria",
    icon: <Icon fontSize="small">checklist</Icon>,
    route: "subkriteria/:subkriteriaId/editSubkriteria",
    component: <EditSubkriteria />,
  },

  {
    type: "collapse",
    name: "Alternatif",
    key: "alternatif",
    icon: <Icon fontSize="small">groups</Icon>,
    route: "/alternatif",
    component: <Alternatif />,
  },
  {
    name: "addAlternatif",
    key: "add-alternatif",
    icon: <Icon fontSize="small">checklist</Icon>,
    route: "alternatif/addAlternatif",
    component: <AddAlternatif />,
  },
  {
    name: "editAlternatif",
    key: "edit-alternatif",
    icon: <Icon fontSize="small">checklist</Icon>,
    route: "alternatif/:kodeAlternatif/editAlternatif",
    component: <EditAlternatif />,
  },

  {
    type: "collapse",
    name: "Penilaian",
    key: "penilaian",
    icon: <Icon fontSize="small">grading</Icon>,
    route: "penilaian",
    component: <Penilaian />,
  },
  {
    name: "editPenilaian",
    key: "edit-penilaian",
    icon: <Icon fontSize="small">checklist</Icon>,
    route: "penilaian/:kode_alternatif/:nama_alt/editPenilaian",
    component: <EditPenilaian />,
  },

  {
    type: "collapse",
    name: "Perhitungan",
    key: "perhitungan",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "perhitungan",
    component: <Perhitungan />,
  },
  {
    name: "PerhitunganVikor",
    key: "perhitungan-vikor",
    icon: <Icon fontSize="small">calculate</Icon>,
    route: "perhitungan/vikor",
    component: <PerhitunganVikor />,
  },
  {
    name: "PerhitunganMoora",
    key: "perhitungan-moora",
    icon: <Icon fontSize="small">calculate</Icon>,
    route: "perhitungan/moora",
    component: <PerhitunganMoora />,
  },

  {
    type: "collapse",
    name: "Hasil",
    key: "hasil", 
    icon: <Icon fontSize="small">calculate</Icon>,
    route: "hasil",
    component: <Hasil />,
  },

  {
    name: "UserProfile",
    key: "user-profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/user-profile",
    component: <UserProfile />,
  },
  {
    name: "EditProfile",
    key: "edit-profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/user-profile/:userId/edit-profile",
    component: <EditProfile />,
  },
  {
    name: "ChangePassword",
    key: "change-password",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/user-profile/:userId/change-password",
    component: <ChangePassword />,
  },

  // {
  //   type: "collapse",
  //   name: "Tables",
  //   key: "tables",
  //   icon: <Icon fontSize="small">table_view</Icon>,
  //   route: "/tables",
  //   component: <Tables />,
  // },
  // {
  //   type: "collapse",
  //   name: "Billing",
  //   key: "billing",
  //   icon: <Icon fontSize="small">receipt_long</Icon>,
  //   route: "/billing",
  //   component: <Billing />,
  // },
  // {
  //   type: "collapse",
  //   name: "RTL",
  //   key: "rtl",
  //   icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
  //   route: "/rtl",
  //   component: <RTL />,
  // },
  // {
  //   type: "collapse",
  //   name: "Notifications",
  //   key: "notifications",
  //   icon: <Icon fontSize="small">notifications</Icon>,
  //   route: "/notifications",
  //   component: <Notifications />,
  // },
  // {
  //   type: "collapse",
  //   name: "Profile",
  //   key: "profile",
  //   icon: <Icon fontSize="small">person</Icon>,
  //   route: "/profile",
  //   component: <Profile />,
  // },
  {
    // type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    // type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
];

export default routes;
