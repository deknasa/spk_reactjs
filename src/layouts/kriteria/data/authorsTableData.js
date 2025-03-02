import { useEffect, useState } from "react";
import { kriteriaURL } from "URL/url";
import axios from "axios";
import Cookies from "js-cookie";
import MDBox from "components/MDBox";
import MDBadge from "components/MDBadge";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";
import { useMaterialUIController } from "context";
import RenderDeleteModal from "../delete-kriteria";

export default function Data() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const [data, setData] = useState([])
  // const getKriteria = async() => {
    // useEffect(() => {
    //   fetch(`http://localhost:5000/kriteria/getAllKriteria`)
    //     .then(response => {
    //       let res = response.json()
    //       // console.log(res);
    //       setData(response.data)
    //     })
        
    //     .catch(error => console.error(error));
    //   },
    //  []);
    //  console.log(data);
  // }
  // getKriteria()
  
  const getKriteria = async() => {
    const auth = Cookies.get('authentication')
    axios.get(`${kriteriaURL}/getAllKriteria`, {
      headers: {
        'Content-Type': 'application/json',
        // 'authentication': `${auth}`
      }
    }).then(response => {
        setData(response.data.data);
    }).catch( error => console.log(error))
  }
  
  useEffect(() => {
    getKriteria();
  }, []);

  // const columns = [
  //   {
  //     title: "No",
  //     dataIndex: "id"
  //   },
  //   {
  //     title: "Kode Kriteria",
  //     dataIndex: "kode_kriteria",
  //   },
  //   {
  //     title: "Nama Kriteria",
  //     dataIndex: "nama_kriteria",
  //   },
  //   {
  //     title: "Bobot Kriteria",
  //     dataIndex: "bobot_kriteria",
  //   },
  //   {
  //     title: "Jenis Kriteria",
  //     dataIndex: "jenis_kriteria",
  //   },
  //   {
  //     title: "Action",
  //     render: (
  //         <MDBox>
  //           <MDButton 
  //           variant="text" 
  //           color={darkMode ? "white" : "dark"}
  //           href="/kriteria/editKriteria"
  //           >
  //             <Icon>edit</Icon>&nbsp;edit
  //           </MDButton>
  //           <MDButton variant="text" color="error">
  //             <Icon>delete</Icon>&nbsp;delete
  //           </MDButton>
  //         </MDBox>
  //       ),
  //   },
  // ];

  return {
    columns: [
      { Header: "no", accessor: "number", align: "center" },
      { Header: "kode kriteria", accessor: "kode_kriteria", align: "center" },
      { Header: "nama kriteria", accessor: "nama_kriteria", width: "25%", align: "left" },
      { Header: "bobot kriteria", accessor: "bobot_kriteria", align: "left" },
      { Header: "jenis", accessor: "jenis", align: "center" },
      { Header: "action", accessor: "action", width: "25%", align: "center" },
    ],
    
    rows: 
    // [
      data.map((item, dataIndex) => (
        {
          number: dataIndex + 1,
          kode_kriteria: item.kode_kriteria,
          nama_kriteria: item.nama_kriteria,
          bobot_kriteria: item.bobot_kriteria,
          jenis: (
            <MDBox ml={-1}>
              <MDBadge badgeContent={item.jenis_kriteria} color="text" variant="caption" fontWeight="large" />
            </MDBox>
          ),
          action: (
            <MDBox>
              <MDButton 
                variant="text" 
                color={darkMode ? "white" : "dark"}
                href={`/kriteria/${item.kode_kriteria}/editKriteria`}
              >
                <Icon>edit</Icon>&nbsp;edit
              </MDButton>
              <RenderDeleteModal 
                id={item.id} 
                kode={item.kode_kriteria} 
              />
            </MDBox>
          ),
        }
      ))
      // {
      //   author: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
      //   function: <Job title="Programator" description="Developer" />,
      //   status: (
      //     <MDBox ml={-1}>
      //       <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
      //     </MDBox>
      //   ),
      //   employed: (
      //     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
      //       11/01/19
      //     </MDTypography>
      //   ),
      //   action: (
      //     <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
      //       Edit
      //     </MDTypography>
      //   ),
      // },
    // ],
    
  };
}
