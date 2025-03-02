import { useEffect, useState } from "react";
import axios from "axios";
import { alternatifURL } from "URL/url";

export default function Data() {
  const [data, setData] = useState([])

  const getAlternatif = async() => {
    axios.get(`${alternatifURL}/getAllAlternatif`, {
      headers: {'Content-Type': 'multipart/form-data'}
    })
    .then(response => {
      setData(response.data.alternatif);
    })
    .catch( error => console.log(error))
  }
  
  useEffect(() => {
    getAlternatif();
  }, []);

  return {
    columns: [
      // { Header: "no", accessor: "number", align: "center" },
      { Header: "kode alternatif", accessor: "kode_alternatif", align: "center" },
      { Header: "nama alternatif", accessor: "nama_alternatif", align: "center" },
      { Header: "keterangan", accessor: "keterangan", align: "center" },
      { Header: "vikor total", accessor: "vikor_total", align: "center" },
      { Header: "vikor rank", accessor: "vikor_rank", align: "center" },
      { Header: "vikor hasil", accessor: "vikor_hasil", align: "center" },
      { Header: "vikor harga", accessor: "vikor_harga", align: "center" },
      { Header: "moora total", accessor: "moora_total", align: "center" },
      { Header: "moora rank", accessor: "moora_rank", align: "center" },
      { Header: "moora hasil", accessor: "moora_hasil", align: "center" },
      { Header: "moora harga", accessor: "moora_harga", align: "center" },
    ],
   
    rows: 
    // [
      data.map((item, dataIndex) => (
        {
          // number: dataIndex + 1, 
          kode_alternatif: item.kode_alternatif,
          nama_alternatif: item.nama_alternatif,
          keterangan: item.keterangan,
          vikor_total: item.vikor_total,
          vikor_rank: item.vikor_rank,
          vikor_hasil: item.vikor_hasil,
          vikor_harga: item.hitung_harga,
          moora_total: item.moora_total,
          moora_rank: item.moora_rank,
          moora_hasil: item.moora_hasil,
          moora_harga: `Rp ${item.moora_harga}`,
        }
      )) 
  };
}
