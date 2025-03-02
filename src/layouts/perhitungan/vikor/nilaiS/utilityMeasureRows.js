import PropTypes from "prop-types"
import MDBox from "components/MDBox";
import {TableRow } from "@mui/material";

function UtilityMeasureRows(props) {
    return (   
        <TableRow>
            <MDBox component="td" align="center" py={1.5} px={3}
            sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
            fontSize: size.sm, })}>
                <MDBox display="inline-block" width="max-content" color="text"
                sx={{ verticalAlign: "middle" }}>
                    { props.kode }
                </MDBox>
            </MDBox>

            <MDBox component="td" align="center" py={1.5} px={3}
            sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
            fontSize: size.sm, })}>
                <MDBox display="inline-block" width="max-content" color="text"
                sx={{ verticalAlign: "middle" }}>
                    { props.nilai_s }
                </MDBox>
            </MDBox>
        </TableRow>
    )
}

UtilityMeasureRows.propTypes = {
    kode: PropTypes.node,
    nilai_s: PropTypes.node
}

export default UtilityMeasureRows;
