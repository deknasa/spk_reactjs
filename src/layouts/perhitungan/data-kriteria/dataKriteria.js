import { useEffect, useState } from "react";
import { kriteriaURL } from "URL/url";
import axios from "axios";
import MDBox from "components/MDBox";
import MDBadge from "components/MDBadge";

export default function DataKriteria() {
  const [ dataKriteria, setDataKriteria ] = useState([])

  const getDataKriteria = async() => {
    axios.get(`${kriteriaURL}/getAllKriteria`, {
      headers: {
        'Content-Type': 'application/json'
      }
    }) 
    .then(response => {
        setDataKriteria(response.data.data);
    })
    .catch( error => console.log(error))
  }
  
  useEffect(() => {
    getDataKriteria();
  }, []);

  return {
    columns: [
      { Header: "kode kriteria", accessor: "kode_kriteria", align: "center" },
      { Header: "nama kriteria", accessor: "nama_kriteria", width: "25%", align: "left" },
      { Header: "jenis kriteria", accessor: "jenis_kriteria", align: "center" },
      { Header: "bobot kriteria", accessor: "bobot_kriteria", align: "center" },
    ],
    
    rows: 
      dataKriteria.map((item) => (
        {
          kode_kriteria: item.kode_kriteria,
          nama_kriteria: item.nama_kriteria,
          jenis_kriteria: (
            <MDBox ml={-1}>
              <MDBadge badgeContent={item.jenis_kriteria} color="text" variant="caption" fontWeight="large" />
            </MDBox>
          ),
          bobot_kriteria: item.bobot_kriteria,
        }
      ))
  };
}
