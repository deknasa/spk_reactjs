import { useEffect, useState } from "react";
import axios from "axios";
import { kriteriaURL } from "URL/url";

export default function Data() {
	const [ dataAlternatif, setDataAlternatif ] = useState([])
	const [ dataNormalisasi, setDataNormalisasi ] = useState([])
	const [ dataNormalisasiBobot, setDataNormalisasiBobot ] = useState([])
	const [ dataNilaiS, setDataNilaiS ] = useState([])
	const [ dataNilaiR, setDataNilaiR ] = useState([])
	const [ dataQvalue, setDataQvalue ] = useState([])
	const [ dataRankingVikor, setDataRankingVikor ] = useState([])
	const [ dataRelAlternatif, setDataRelAlternatif ] = useState([])
	const [ dataKriteria, setDataKriteria ] = useState([])
	const kodeAlternatif = []
	const kodeKriteria = []

	const getDataNormalisasi = async() => {
		axios.get(`http://localhost:5000/vikor/getresult`, {
		headers: { 'Content-Type': 'application/json' }
		})
		.then(response => {
			setDataAlternatif(response.data.alternatifs)
			setDataNormalisasi(response.data.resultNormalized)
			setDataNormalisasiBobot(response.data.resultNormalisasiBobot)
			setDataNilaiS(response.data.nilaiS)
			setDataNilaiR(response.data.nilaiR)
			setDataQvalue(response.data.Qvalue)
			setDataRankingVikor(response.data.rankedAlternatives)
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

		rowsNormalisasiBobot: 
		dataNormalisasiBobot.map((item, index) => (
			{
				kode: kodeAlternatif[index],
				// kodeKriteria[index]: item[index]
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

		utilityMeasureColumns: [
			{ Header: "kode", accessor: "kode", width: "50%", align: "center" },
			{ Header: "Nilai S", accessor: "Nilai_S", width: "50%", align: "center" }
	  	],

		utilityMeasureRows: 
		dataRelAlternatif.map((item, index) => (
			{
				kode: kodeAlternatif[index],
				Nilai_S: dataNilaiS[index],
			}
		)),

		regretMeasureColumns: [
			{ Header: "kode", accessor: "kode", width: "50%", align: "center" },
			{ Header: "Nilai R", accessor: "Nilai_R", width: "50%", align: "center" }
	  	],
	
		regretMeasureRows: 
		dataRelAlternatif.map((item, index) => (
			{
				kode: kodeAlternatif[index],
				Nilai_R: dataNilaiR[index],
			}
		)),

		qiColumns: [
			{ Header: "kode", accessor: "kode", width: "50%", align: "center" },
			{ Header: "Nilai Q", accessor: "Nilai_Q", width: "50%", align: "center" }
	  	],
	
		qiRows: 
		dataRelAlternatif.map((item, index) => (
			{
				kode: kodeAlternatif[index],
				Nilai_Q: dataQvalue[index],
			}
		)),

		rankColumns: [
			{ Header: "kode", accessor: "kode", width: "20%", align: "center" },
			{ Header: "nama alternatif", accessor: "namaAlternatif", width: "20%", align: "center" },
			{ Header: "Nilai Q", accessor: "Nilai_Q", width: "20%", align: "center" },
			{ Header: "ranking", accessor: "ranking", width: "20%", align: "center" },
			{ Header: "hasil", accessor: "hasil", width: "20%", align: "center" },
	  	],
	
		rankRows:  
		dataRankingVikor.map((item, index) => (
			{
				kode: item.alternative,
				namaAlternatif: item.nama_alternatif,
				Nilai_Q: item.Q,
				ranking: index + 1,
				hasil: item.hasil
			}
		))
	};
}
