import { useEffect, useState } from "react";
import { subkriteriaURL } from "URL/url";
import axios from "axios";
import { useMaterialUIController } from "context";

export default function Data() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const [data, setData] = useState([])
  let dataSubkriteria = []

  const getSubkriteria = async() => {
    axios.get(`${subkriteriaURL}/getSubkriteriaByKriteria`, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      console.log(response.data)
      setData(response.data.data);
    })
    .catch( error => console.log(error))
  }

  const subkriteriaData = async() => {
      data.map((res) => {
      return res.sub_kriteria.map(sub =>{
        dataSubkriteria.push(sub)
        return `${sub.id}, ${sub.nama_subkriteria}`
      }).join("\n")
    }).join("\n")
  }
  subkriteriaData()

  console.log(dataSubkriteria);

  useEffect(() => {
    getSubkriteria();
  }, []);

  return {
    title: 
    data.map(item => (
      {
        kode_kriteria: item.kode_kriteria,
        nama_kriteria: item.nama_kriteria,
        sub_kriteria: item.sub_kriteria
      }
    )),

    columns: [
      { Header: "no", accessor: "number", align: "center" },
      { Header: "nama subkriteria", accessor: "nama_subkriteria", width: "25%", align: "left" },
      { Header: "bobot subkriteria", accessor: "bobot_subkriteria", width: "25%", align: "center" },
      { Header: "action", accessor: "action", width: "30%", align: "center" },
    ],    
  };
}
