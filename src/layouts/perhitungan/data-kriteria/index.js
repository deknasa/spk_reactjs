import { useState } from "react";
import { subkriteriaURL } from "URL/url";
import axios from "axios";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import { Modal, Icon, Menu, Card } from "@mui/material";
import getDataKriteria from "./dataKriteria"
import DataTable from "examples/Tables/DataTable";


function Kriteria (props) { 
    const { columns, rows } = getDataKriteria();

    const [openKriteria, setOpenKriteria] = useState(false);

    const handleOpenKriteria = () => setOpenKriteria(true);

    const handleCloseKriteria = () => setOpenKriteria(false);

    // const renderDataKriteria = () => (
    //     <MDBox
    //       anchorEl={openKriteria}
    //       anchorReference={null}
    //       anchorOrigin={{ 
    //         vertical: "bottom",
    //         horizontal: "center",
    //       }}
    //       open={Boolean(openKriteria)} 
    //       onClose={handleCloseKriteria}
    //       sx={{ mt: 3, ml: 20}}
    //       >
    //         <MDBox pt={2}>
    //             <DataTable
    //                 table={{ columns, rows }}
    //                 isSorted={false}
    //                 entriesPerPage={false}
    //                 showTotalEntries={false}
    //                 noEndBorder
    //             />
    //         </MDBox>
    //     </MDBox>
    // );

    return(
        <>
        {/* <Card> */}
            <MDBox
            mx={2}
            mt={-3}
            py={1} 
            px={2}
            onClick={handleOpenKriteria}
            
            variant="gradient"
            bgColor="light" 
            borderRadius="lg"
            coloredShadow="info"
            display="sticky"
            alignItems="center"
            justifyContent="space-between">
                <MDButton variant="text" color="black">
                    DATA KRITERIA
                </MDButton>
            </MDBox>

            { openKriteria &&
            <MDBox pt={2} mx={2} onClick={handleCloseKriteria}>
                <DataTable
                table={{ columns, rows }}
                isSorted={false}
                entriesPerPage={false}
                showTotalEntries={false}
                noEndBorder
                />
            </MDBox>
            }
        {/* </Card> */}
        {/* {renderDataKriteria()} */}
        
       
        </>
    )
}

export default Kriteria;

            