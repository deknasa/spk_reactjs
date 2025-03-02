import MDBox from "components/MDBox";
import { useMaterialUIController } from "context";

function TableHeader (props) { 
    const [controller] = useMaterialUIController();
    const { darkMode } = controller;

    return(
        <MDBox
        component="th"
        width={props.width ? props.width : "auto"} 
        py={1.5}
        px={3}
        sx={({ palette: { light }, borders: { borderWidth } }) => ({
            borderBottom: `${borderWidth[1]} solid ${light.main}`,
        })}
        >
            <MDBox
            position="relative"
            textAlign={props.align ? props.align : "left"}
            color={darkMode ? "white" : "secondary"}
            opacity={0.7}
            sx={({ typography: { size, fontWeightBold } }) => ({
            fontSize: size.xxs,
            fontWeight: fontWeightBold,
            textTransform: "uppercase",
            })}
            >
                {props.header} 
            </MDBox>
        </MDBox>
    )
}

export default TableHeader;