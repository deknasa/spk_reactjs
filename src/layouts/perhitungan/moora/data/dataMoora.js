import { useEffect, useState } from "react";
import axios from "axios";
import { kriteriaURL, mooraURL } from "URL/url";

export default function Data() {
	const [ dataAlternatif, setDataAlternatif ] = useState([])
    const [ dataNormalisasi, setDataNormalisasi ] = useState([])
    const [ nilaiOptimasi, setNilaiOptimasi ] = useState([])
    const [ dataMooraRank, setDataMooraRank ] = useState([])
	const [ dataRelAlternatif, setDataRelAlternatif ] = useState([])
	const [ dataKriteria, setDataKriteria ] = useState([])
	const kodeAlternatif = []
	const kodeKriteria = []

	const getDataNormalisasi = async() => {
		axios.get(`${mooraURL}/getresult`, {
		headers: { 'Content-Type': 'application/json' }
		})
		.then(response => {
			console.log(response);
			setDataAlternatif(response.data.alternatifs)
			setDataNormalisasi(response.data.resultNormalized)
            setNilaiOptimasi(response.data.YiFix)
            setDataMooraRank(response.data.rankedAlternatives)
			setDataRelAlternatif(response.data.indexedAlt);
		}).catch( error => console.log(error))
	}
	dataRelAlternatif.map(item => {
		kodeAlternatif.push(item.item.kode_alternatif)
		return kodeAlternatif
	})
 
	const getKriteria = async() => {
		axios.get(`${kriteriaURL}/getAllKriteria`, {
			headers: { 'Content-Type': 'application/json' }
		}).then(response => {
			setDataKriteria(response.data.data)
		}).catch( error => console.log(error))
	}
	dataKriteria.map(i => {
		kodeKriteria.push(i.kode_kriteria)
		return kodeKriteria
	})
  
	useEffect(() => {
		getDataNormalisasi();
		getKriteria();
	}, []);

	return {
		columns: [
			{ Header: "kode", accessor: "kode", width: "15%", align: "center" }
		],
		
		title: 
		kodeKriteria.map((item, index) => (
			{
				Header: kodeKriteria[index], accessor: kodeKriteria[index], align: "center" 
			}
		)),
		
		rowsAlternatif: 
		dataAlternatif.map((item, index) => (
			{
				kode: kodeAlternatif[index],
				C1: item[0],
				C2: item[1],
				C3: item[2],
				C4: item[3],
				C5: item[4],
				C6: item[5],
				// C7: item[6],
				// C8: item[7],
			}
		)),

        rowsNormalisasi: 
        dataNormalisasi.map((item, index) => (
            {
                kode: kodeAlternatif[index],
                C1: item[0],
                C2: item[1],
                C3: item[2],
                C4: item[3],
                C5: item[4],
                C6: item[5],
                // C7: item[6],
                // C8: item[7],
            }
        )),

		nilaiOptimasiColumns: [
            { Header: "kode", accessor: "kode", width: "50%", align: "center" },
            { Header: "Nilai Yi", accessor: "Nilai_Yi", width: "50%", align: "center" }
        ],

		nilaiOptimasiRows: 
        dataRelAlternatif.map((item, index) => (
            {
                kode: kodeAlternatif[index],
                Nilai_Yi: nilaiOptimasi[index],
            }
        )),

        rankingColumns: [
            { Header: "kode", accessor: "kode", width: "20%", align: "center" },
            { Header: "nama alternatif", accessor: "namaAlternatif", width: "20%", align: "center" },
            { Header: "Nilai Yi", accessor: "Nilai_Yi", width: "20%", align: "center" },
            { Header: "ranking", accessor: "ranking", width: "20%", align: "center" },
            { Header: "hasil", accessor: "hasil", width: "20%", align: "center" },
        ],

        rankingRows:  
        dataMooraRank.map((item, index) => (
            {
                kode: item.alternative,
                namaAlternatif: item.nama_alternatif,
                Nilai_Yi: item.Yi_value,
                ranking: index + 1,
                hasil: item.hasil
            }
        ))
	};
}
