// import { useEffect, useState } from "react";
// import { mooraURL } from "URL/url";
// import axios from "axios";

// export default function MooraRank() {
//   const [ dataMooraRank, setDataMooraRank ] = useState([])

//   const getDataMooraRank = async() => {
//     axios.get(`${mooraURL}/getresult`, {
//     headers: { 'Content-Type': 'application/json' }
//     }).then(response => {
//         setDataMooraRank(response.data.rankedAlternatives)
//     }).catch( error => console.log(error))
//   }
  
//   useEffect(() => {
//     getDataMooraRank();
//   }, []);

//   return {
//     columns: [
//       { Header: "kode", accessor: "kode", width: "20%", align: "center" },
//       { Header: "nama alternatif", accessor: "namaAlternatif", width: "20%", align: "center" },
//       { Header: "Nilai Yi", accessor: "Nilai_Yi", width: "20%", align: "center" },
//       { Header: "ranking", accessor: "ranking", width: "20%", align: "center" },
//       { Header: "hasil", accessor: "hasil", width: "20%", align: "center" },
//   ],

//     rows:  
//     dataMooraRank.map((item, index) => (
//         {
//             kode: item.alternative,
//             namaAlternatif: item.nama_alternatif,
//             Nilai_Yi: item.Yi_value,
//             ranking: index + 1,
//             hasil: item.hasil
//         }
//     ))
//   };
// }
