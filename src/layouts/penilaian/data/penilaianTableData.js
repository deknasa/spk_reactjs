import { useEffect, useState } from "react";
import axios from "axios";
import { kriteriaURL, relAlternatifURL, subkriteriaURL } from "URL/url";

export default function Data() {
  const [ dataKriteria, setDataKriteria ] = useState([])
  const [ dataSubkriteria, setDataSubkriteria ] = useState([])
  const [ dataRelAlternatif, setDataRelAlternatif ] = useState([])
  
  const getAllKriteria = async() => {
    axios.get(`${kriteriaURL}/getAllKriteria`, {
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then(response => {
        setDataKriteria(response.data.data);
    }).catch( error => console.log(error))
  }

  const getRelAlternatif = async() => {
    axios.get(`${relAlternatifURL}/includeAll`, {
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then(response => {
        setDataRelAlternatif(response.data.arr);
        return dataRelAlternatif
    }).catch( error => console.log(error))
  }

  const getSubkriteria = async() => {
    axios.get(`${subkriteriaURL}/getSubkriteriaByKriteria`, {
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then(response => {
      setDataSubkriteria(response.data.data);
    }).catch( error => console.log(error))
  }
  
  useEffect(() => {
    getAllKriteria(); getRelAlternatif(); getSubkriteria()
  }, []);

  return {
    columns_kriteria: // ==> ADA DI tableHeader BUAT DI INDEX
    dataKriteria.map(item => (
      { id_kriteria: item.id, align: "center" },
      { kode_kriteria: item.kode_kriteria, align: "center" },
      { nama_kriteria: item.nama_kriteria, align: "center" }
    )),

    rel_alternatif: // ==> ADA DI INDEX
    dataRelAlternatif.map(relAlternatif => (
      { 
        id: relAlternatif.id,
        kode_alternatif: relAlternatif.kode_alternatif, 
        nama_alternatif: relAlternatif.nama_alternatif,  
        kriteria: relAlternatif.kriteria,
      }
    )),

    kriteriaSubkriteria: // ==> ada di edit
    dataSubkriteria.map(i => (
      { 
        kode_kriteria: i.kode_kriteria,
        nama_kriteria: i.nama_kriteria,
        sub_kriteria: i.sub_kriteria
      }
    )),
  };
}
