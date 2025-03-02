import PropTypes from "prop-types"
import MDBox from "components/MDBox";
import {TableRow } from "@mui/material";

function RankRows(props) {
    return (   
        <TableRow>
            <MDBox component="td" align="center" py={1.5} px={3}
            sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
            fontSize: size.sm, })}>
                <MDBox display="inline-block" width="max-content" color="text"
                sx={{ verticalAlign: "middle" }}>
                { props.kodeAlt }
                </MDBox>
            </MDBox>

            <MDBox component="td" align="center" py={1.5} px={3}
            sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
            fontSize: size.sm, })}>
                <MDBox display="inline-block" width="max-content" color="text"
                sx={{ verticalAlign: "middle" }}>
                { props.namaAlt }
                </MDBox>
            </MDBox>

            <MDBox component="td" align="center" py={1.5} px={3}
            sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
            fontSize: size.sm, })}>
                <MDBox display="inline-block" width="max-content" color="text"
                sx={{ verticalAlign: "middle" }}>
                { props.Q }
                </MDBox>
            </MDBox>

            <MDBox component="td" align="center" py={1.5} px={3}
            sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
            fontSize: size.sm, })}>
                <MDBox display="inline-block" width="max-content" color="text"
                sx={{ verticalAlign: "middle" }}>
                { props.ranking }
                </MDBox>
            </MDBox>

            <MDBox component="td" align="center" py={1.5} px={3}
            sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
            fontSize: size.sm, })}>
                <MDBox display="inline-block" width="max-content" color="text"
                sx={{ verticalAlign: "middle" }}>
                { props.hasil }
                </MDBox>
            </MDBox>
        </TableRow>
    )
}

RankRows.propTypes = {
    kodeAlt: PropTypes.node,
    namaAlt: PropTypes.string,
    Q: PropTypes.node,
    ranking: PropTypes.number,
    hasil: PropTypes.string
}

export default RankRows;
