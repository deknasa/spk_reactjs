import PropTypes from "prop-types"
import MDBox from "components/MDBox";
import { useMaterialUIController } from "context";
import penilaianTableData from "layouts/penilaian/data/penilaianTableData";

function TableHeader(props) {
    const [controller] = useMaterialUIController();
    const { darkMode } = controller;
    const { columns_kriteria } = penilaianTableData();

    return (    
        <>
        <MDBox
        component="th" py={1.5} px={3}
        sx={({ palette: { light }, borders: { borderWidth } }) => ({
            borderBottom: `${borderWidth[1]} solid ${light.main}`,
        })}>
            <MDBox
            position="relative"
            color={darkMode ? "white" : "secondary"}
            opacity={0.7}
            textAlign="center"
            sx={({ typography: { size, fontWeightBold } }) => ({
            fontSize: size.xxs,
            fontWeight: fontWeightBold,
            textTransform: "uppercase",
            })}>
            No
            </MDBox>
        </MDBox>
        <MDBox component="th" py={1.5} px={2}
        sx={({ palette: { light }, borders: { borderWidth } }) => ({
            borderBottom: `${borderWidth[1]} solid ${light.main}`,
        })}>
            <MDBox
            position="relative"
            color={darkMode ? "white" : "secondary"}
            opacity={0.7}
            textAlign="center"
            sx={({ typography: { size, fontWeightBold } }) => ({
            fontSize: size.xxs,
            fontWeight: fontWeightBold,
            textTransform: "uppercase",
            })}>
            Kode
            </MDBox>
        </MDBox>
        <MDBox component="th" py={1.5} px={3}
        sx={({ palette: { light }, borders: { borderWidth } }) => ({
            borderBottom: `${borderWidth[1]} solid ${light.main}`,
        })}>
            <MDBox
            position="relative"
            color={darkMode ? "white" : "secondary"}
            opacity={0.7}
            align="left"
            ml={-1}
            sx={({ typography: { size, fontWeightBold } }) => ({
            fontSize: size.xxs,
            fontWeight: fontWeightBold,
            textTransform: "uppercase",
            })}>
            Nama Alternatif
            </MDBox>
        </MDBox>
                        
        {columns_kriteria.map((item) => (
            <MDBox component="th" width={item.width ? item.width : "auto"}
            py={1.5} px={3}
            sx={({ palette: { light }, borders: { borderWidth } }) => ({
            borderBottom: `${borderWidth[1]} solid ${light.main}`,
            })}>
                <MDBox
                position="relative"
                align="center"
                textAlign={item.align ? item.align : "center"}
                color={darkMode ? "white" : "secondary"}
                opacity={0.7}
                sx={({ typography: { size, fontWeightBold } }) => ({
                    fontSize: size.xxs,
                    fontWeight: fontWeightBold,
                    textTransform: "uppercase",
                })}>
                    {item.nama_kriteria} 
                </MDBox>
            </MDBox>
        ))}
        <MDBox component="th" py={1.5} px={3}
        sx={({ palette: { light }, borders: { borderWidth } }) => ({
            borderBottom: `${borderWidth[1]} solid ${light.main}`,
        })}>
            <MDBox
            position="relative"
            color={darkMode ? "white" : "secondary"}
            opacity={0.7}
            sx={({ typography: { size, fontWeightBold } }) => ({
            fontSize: size.xxs,
            fontWeight: fontWeightBold,
            textTransform: "uppercase",
            })}>
            Action
            </MDBox>
        </MDBox>
        </>
    )
}

TableHeader.propTypes = {
    nama: PropTypes.string,
    kode: PropTypes.node
}

export default TableHeader;