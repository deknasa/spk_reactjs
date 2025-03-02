import axios from "axios";
import { useState } from "react";
import { alternatifURL } from "URL/url";
import { Modal, Icon } from "@mui/material";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

function RenderDeleteModal (props) { 
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = (event) => setOpenModal(event.currentTarget);
    const handleCloseModal = () => setOpenModal(false);

    const handleDeleteAlternatif = async() => {
        axios.delete(`${alternatifURL}/deleteAlternatif/${props.kode}`, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        .then(res => {
            console.log(res);
            if (res.status === 200 && res.statusText === "OK") {
                alert(`Kriteria dengan kode ${props.kode} berhasil dihapus`)
                handleCloseModal()
                window.location.reload(false);
            }
            else {
                alert(`Kriteria dengan kode ${props.kode} gagal ditambahkan`);
            }
        }).catch(e => console.log(e))
    }

    return( 
        <>
            <MDButton variant="text" color="error"onClick={ handleOpenModal }>
                <Icon>delete</Icon>&nbsp;delete
            </MDButton>

            <Modal
            open={openModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
                <MDBox sx={{
                    position: "absolute",
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    borderRadius: 4,
                    boxShadow: 24,
                    p: 4,
                }}>
                    <MDBox display="flex" justifyContent="center" alignItems="center">
                        <Icon fontSize="large" color="error">warning</Icon>
                        <MDBox ml={2} fontSize={20} fontWeight='bold'>
                            <MDTypography variant="h5" component="h2">DELETE ALTERNATIF!</MDTypography>
                        </MDBox>
                    </MDBox>
                    <MDBox mt={2}>
                        <MDTypography variant="h6" component="h2">Are you sure you want to delete alternatif data with code {props.kode}?</MDTypography>
                    </MDBox>
                    <MDBox mt={2} display="flex" justifyContent="space-between">
                        <MDButton variant="gradient" color="secondary" onClick={handleCloseModal}>
                            CANCEL
                        </MDButton>
                        <MDButton variant="gradient" color="error" onClick={handleDeleteAlternatif}>
                            DELETE
                        </MDButton>
                    </MDBox>
                </MDBox>
            </Modal>
        </>
    )
}

export default RenderDeleteModal;