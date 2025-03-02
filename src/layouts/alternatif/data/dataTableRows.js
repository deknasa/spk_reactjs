import PropTypes from "prop-types"
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import RenderDeleteModal from "../delete-alternatif";
import { useMaterialUIController } from "context";
import { Icon, TableRow } from "@mui/material/";

function DataTableRows(props) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller; 

  return (    
    <TableRow>
      <MDBox component="td" align="center" py={1.5} px={3} 
      sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
      fontSize: size.sm, })}>
        <MDBox display="inline-block" width="max-content" color="text" sx={{ verticalAlign: "middle" }}>
          { props.number }
        </MDBox>
      </MDBox>

      <MDBox component="td" align="center" py={1.5} px={3}
      sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
      fontSize: size.sm, })}>
        <MDBox display="inline-block" width="max-content" color="text" sx={{ verticalAlign: "middle" }}>
          { props.kode }
        </MDBox>
      </MDBox>

      <MDBox component="td" align="left" py={1.5} px={3}
      sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
      fontSize: size.sm, })}>
        <MDBox display="inline-block" width="max-content" color="text" sx={{ verticalAlign: "middle" }}>
          { props.nama }
        </MDBox>
      </MDBox>

      <MDBox component="td" align="left" py={1.5} px={3}
      sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
      fontSize: size.sm, })}>
        <MDBox display="inline-block" width="max-content" color="text" sx={{ verticalAlign: "middle" }}>
          { props.ket }
        </MDBox>
      </MDBox>
      <MDBox component="td" align="center" py={1.5} px={3}
      sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
      fontSize: size.sm, })}>
        <MDBox display="inline-block" width="max-content" color="text" sx={{ verticalAlign: "middle" }}>
          <MDButton variant="text" color={darkMode ? "white" : "dark"}
          href={`/alternatif/${props.kode}/editAlternatif`}>
            <Icon>edit</Icon>&nbsp;edit
          </MDButton>
          <RenderDeleteModal id={props.kode} kode={props.kode} />
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
}

export default DataTableRows;
