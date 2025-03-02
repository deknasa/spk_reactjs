// import {createContext} from "react"
import PropTypes from "prop-types"

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";

// const Context = createContext()

function MapJudul(props) {
    // const kode_kriteria = props.kode

    // console.log(props);
    return (    
        // <Context.Provider value={{kode_kriteria}}>
            <MDBox 
                pt={5} 
                px={2}
                mb={5}
                display="flex"
                justifyContent= "space-between"
            >
                <MDTypography display="block" variant="button" fontWeight="medium">
                    Kriteria {props.nama}
                </MDTypography>
                <MDBox display="flex">
                    <MDBox pr={1} pl={1}>
                        <MDButton component="a" href={`/subkriteria/${props.kode}/addSubkriteria`}  variant="gradient" color="secondary" fontWeight="medium">
                            <Icon fontSize="small">add</Icon>
                            Tambah Sub Kriteria
                        </MDButton>
                    </MDBox>
                </MDBox>
            </MDBox>
        // </Context.Provider>
    )
}

MapJudul.propTypes = {
    nama: PropTypes.string,
    kode: PropTypes.node
}

export default MapJudul;
// export default {MapJudul, Context};
