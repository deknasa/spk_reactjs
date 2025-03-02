// import { useEffect, useState } from "react";
// import { mooraURL } from "URL/url";
// import axios from "axios";

// export default function NilaiOptimasi() {
//     const [ nilaiOptimasi, setNilaiOptimasi ] = useState([])
//     const [ dataRelAlternatif, setDataRelAlternatif ] = useState([])
//     const kodeAlternatif = []

//     const getDataNilaiOptimasi = async() => {
//         axios.get(`${mooraURL}/getresult`, {
//         headers: { 'Content-Type': 'application/json' }
//         }).then(response => {
//             setNilaiOptimasi(response.data.YiFix)
//             setDataRelAlternatif(response.data.transformedData);
//         }).catch( error => console.log(error))
//     }
//     dataRelAlternatif.map(item => {
//         kodeAlternatif.push(item.kode_alternatif)
//         return kodeAlternatif
//     })
  
//     useEffect(() => {
//         getDataNilaiOptimasi();
//     }, []);

//     return {
//         columns: [
//             { Header: "kode", accessor: "kode", width: "50%", align: "center" },
//             { Header: "Nilai Yi", accessor: "Nilai_Yi", width: "50%", align: "center" }
//         ],

//         rows: 
//         dataRelAlternatif.map((item, index) => (
//             {
//                 kode: kodeAlternatif[index],
//                 Nilai_Yi: nilaiOptimasi[index],
//             }
//         ))
//     };
// }
