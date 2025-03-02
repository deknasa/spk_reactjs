import PropTypes from "prop-types"
import MDBox from "components/MDBox";
import { useMaterialUIController } from "context";

function RankingColumns(props) {
    const [controller] = useMaterialUIController();
    const { darkMode } = controller;

    return (   
        <MDBox component="th" width={props.width ? props.width : "auto"}
        py={1.5} px={3}
        sx={({ palette: { light }, borders: { borderWidth } }) => ({
        borderBottom: `${borderWidth[1]} solid ${light.main}`})}>
            <MDBox position="relative" align="center"
            textAlign={props.align ? props.align : "center"}
            color={darkMode ? "white" : "secondary"}
            // color={"black"}
            opacity={0.7}
            sx={({ typography: { size, fontWeightBold } }) => ({
                fontSize: size.xxs,
                fontWeight: fontWeightBold,
                textTransform: "uppercase",
            })}>
                {props.header} 
            </MDBox>
        </MDBox>
    )
}

RankingColumns.propTypes = {
    header: PropTypes.string,
    align: PropTypes.string,
    width: PropTypes.node
}

export default RankingColumns;
