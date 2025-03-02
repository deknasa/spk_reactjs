// import { useEffect, useState } from "react";
// import { kriteriaURL, mooraURL } from "URL/url";
// import axios from "axios";

// export default function DataNormalisasi() {
//     const [ dataNormalisasi, setDataNormalisasi ] = useState([])
//     const [ dataRelAlternatif, setDataRelAlternatif ] = useState([])
//     const [ dataKriteria, setDataKriteria ] = useState([])
//     const kodeAlternatif = []
//     const kodeKriteria = []

//     const getDataNormalisasi = async() => {
//         axios.get(`${mooraURL}/getresult`, {
//         headers: { 'Content-Type': 'application/json' }
//         }).then(response => {
//             setDataNormalisasi(response.data.resultNormalized)
//             setDataRelAlternatif(response.data.transformedData);
//         }).catch( error => console.log(error))
//     }
//     dataRelAlternatif.map(item => {
//         kodeAlternatif.push(item.kode_alternatif)
//         return kodeAlternatif
//     })

//     const getKriteria = async() => {
//         axios.get(`${kriteriaURL}/getAllKriteria`, {
//           headers: { 'Content-Type': 'application/json' }
//         }).then(response => {
//             setDataKriteria(response.data.data)
//         }).catch( error => console.log(error))
//     }
//     dataKriteria.map(i => {
//         kodeKriteria.push(i.kode_kriteria)
//         return kodeKriteria
//     })

//     useEffect(() => { getDataNormalisasi(); getKriteria(); }, []);

//     return {
//         columns: [
//             { Header: "kode", accessor: "kode", width: "15%", align: "center" }
//         ],

//         title: 
//         dataKriteria.map((item, index) => (
//             {
//                 Header: kodeKriteria[index], accessor: kodeKriteria[index], align: "center" 
//             }
//         )),
        
//         rows: 
//         dataNormalisasi.map((item, index) => (
//             {
//                 kode: kodeAlternatif[index],
//                 C1: item[0],
//                 C2: item[1],
//                 C3: item[2],
//                 C4: item[3],
//                 C5: item[4],
//                 C6: item[5],
//                 // C7: item[6],
//                 // C8: item[7],
//             }
//         ))
//     };
// }
