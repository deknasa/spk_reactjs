import axios from "axios";
import { useEffect, useState } from "react";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";
import { useMaterialUIController } from "context";
import { alternatifURL } from "URL/url";
import RenderDeleteModal from "../delete-alternatif";

export default function Data() {
   const [controller] = useMaterialUIController();
   const { darkMode } = controller;
   const [data, setData] = useState([])

   const getAlternatif = async() => {
      axios.get(`${alternatifURL}/getAllAlternatif`, {
         headers: { 'Content-Type': 'multipart/form-data' }
      }).then(response => {
         setData(response.data.alternatif);
      }).catch( error => console.log(error))
   }
  
   useEffect(() => {
      getAlternatif();
   }, []);

   return {
      columns: [
         { Header: "no", accessor: "number", align: "center" },
         { Header: "kode alternatif", accessor: "kode_alternatif", align: "center" },
         { Header: "nama alternatif", accessor: "nama_alternatif", width: "25%", align: "left" },
         { Header: "keterangan", accessor: "keterangan", align: "left" },
         { Header: "action", accessor: "action", width: "25%", align: "center" },
      ],
   
      rows: 
      data.map((item, dataIndex) => (
         {
            number: dataIndex + 1,
            kode_alternatif: item.kode_alternatif,
            nama_alternatif: item.nama_alternatif,
            keterangan: item.keterangan,
            action: (
               <MDBox>
                  <MDButton variant="text" color={darkMode ? "white" : "dark"}
                  href={`/alternatif/${item.id}/editAlternatif`}>
                     <Icon>edit</Icon>&nbsp;edit
                  </MDButton>
                  <RenderDeleteModal id={item.id} kode={item.kode_alternatif} />
               </MDBox>
            ),
         }
      ))
   };
}
