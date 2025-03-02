import PropTypes from "prop-types"
import MDBox from "components/MDBox";
import { Icon, TableRow } from "@mui/material/";
import CurrencyFormat from "react-currency-format"

function DataTableRows(props) {
  return (    
    <TableRow>
        {/* <MDBox component="td" align="center" py={1.5} px={3}
        sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
        fontSize: size.sm, })}>
        <MDBox display="inline-block" width="max-content" color="text" sx={{ verticalAlign: "middle" }}>
            { props.number }
        </MDBox>
        </MDBox> */}

        <MDBox component="td" align="center" py={1.5} // px={3}
        sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
        fontSize: size.sm, })}>
        <MDBox display="inline-block" width="max-content" color="text" sx={{ verticalAlign: "middle" }}>
            { props.kode }
        </MDBox>
        </MDBox>

        <MDBox component="td" align="center" py={1.5} // px={3}
        sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
        fontSize: size.sm, })}>
        <MDBox display="inline-block" width="max-content" color="text" sx={{ verticalAlign: "middle" }}>
            { props.nama }
        </MDBox>
        </MDBox>

        <MDBox component="td" align="center" py={1.5} px={3}
        sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
        fontSize: size.sm, })}>
        <MDBox display="inline-block" width="max-content" color="text" sx={{ verticalAlign: "middle" }}>
            { props.ket }
        </MDBox>
        </MDBox>

        <MDBox component="td" align="center" py={1.5} px={2}
        sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
        fontSize: size.sm, })}>
        <MDBox display="inline-block" width="max-content" color="text" sx={{ verticalAlign: "middle" }}>
            { props.Vtotal }
        </MDBox>
        </MDBox>
        <MDBox component="td" align="center" py={1.5} px={3}
        sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
        fontSize: size.sm, })}>
        <MDBox display="inline-block" width="max-content" color="text" sx={{ verticalAlign: "middle" }}>
            { props.Vrank }
        </MDBox>
        </MDBox>
        <MDBox component="td" align="center" py={1.5} //px={3}
        sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
        fontSize: size.sm, })}>
        <MDBox display="inline-block" color="text" sx={{ verticalAlign: "middle" }}>
            { props.Vhasil }
        </MDBox>
        </MDBox>
        <MDBox component="td" align="center" py={1.5} px={3}
        sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
        fontSize: size.sm, })}>
        <MDBox display="inline-block" width="max-content" color="text" sx={{ verticalAlign: "middle" }}>
            <CurrencyFormat value={props.Vharga} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />
            {/* { props.Vharga } */}
        </MDBox>
        </MDBox>

        <MDBox component="td" align="center" py={1.5} px={2}
        sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
        fontSize: size.sm, })}>
        <MDBox display="inline-block" width="max-content" color="text" sx={{ verticalAlign: "middle" }}>
            { props.Mtotal }
        </MDBox>
        </MDBox>
        <MDBox component="td" align="center" py={1.5} px={3}
        sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
        fontSize: size.sm, })}>
        <MDBox display="inline-block" width="max-content" color="text" sx={{ verticalAlign: "middle" }}>
            { props.Mrank }
        </MDBox>
        </MDBox>
        <MDBox component="td" align="center" py={1.5} px={1}
        sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
        fontSize: size.sm, })}>
        <MDBox display="inline-block" color="text" sx={{ verticalAlign: "middle" }}>
            { props.Mhasil }
        </MDBox>
        </MDBox>
        <MDBox component="td" align="center" py={1.5} px={3}
        sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
        fontSize: size.sm, })}>
        <MDBox display="inline-block" width="max-content" color="text" sx={{ verticalAlign: "middle" }}>
            <CurrencyFormat value={props.Mharga} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />
        </MDBox>
        </MDBox>
    </TableRow>
  )
}

DataTableRows.propTypes = {
    number: PropTypes.number,
    nama: PropTypes.string,
    kode: PropTypes.node,
    ket: PropTypes.string,
    Vtotal: PropTypes.number,
    Vrank: PropTypes.number,
    Vhasil: PropTypes.string,
    Vharga: PropTypes.number,
    Mtotal: PropTypes.number,
    Mrank: PropTypes.number,
    Mhasil: PropTypes.string,
    Mharga: PropTypes.number,
}

export default DataTableRows;
