import axios from "axios";
import { useState } from "react";
import { kriteriaURL } from "URL/url";
import { Modal, Icon } from "@mui/material";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

function RenderDeleteModal (props) { 
    console.log(props.id);
    console.log(props.kode);
    
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = (event) => setOpenModal(event.currentTarget);
    const handleCloseModal = () => setOpenModal(false);

    const handleDeleteKriteria = async() => {
        axios.delete(`${kriteriaURL}/deleteKriteria/${props.kode}`, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        .then(res => {
            // console.log(res.response.data);
            if (res.status === 200 && res.statusText === "OK") {
                alert(`Kriteria dengan kode ${props.kode} berhasil dihapus`)
                handleCloseModal()
                window.location.reload(false);
            } else {
                alert(`Kriteria dengan kode ${props.kode} gagal dihapus`);
            }
        })
        .catch(e => {
            console.log(e.response.data.message)
            alert(`${e.response.data.message}`)
            handleCloseModal()
        })
    }

    return(
        <>
            <MDButton variant="text" color="error" onClick={ handleOpenModal }>
                <Icon>delete</Icon>&nbsp;delete
            </MDButton>

            <Modal
            open={openModal}
            // onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
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
                            <MDTypography variant="h5" component="h2">DELETE KRITERIA!</MDTypography>
                        </MDBox>
                    </MDBox>
                    <MDBox mt={2}>
                        <MDTypography variant="h6" component="h2">Are you sure you want to delete criteria data with code {props.kode}?</MDTypography>
                    </MDBox>
                    <MDBox mt={2} display="flex" justifyContent="space-between">
                        <MDButton variant="gradient" color="secondary" onClick={handleCloseModal}>
                            CANCEL
                        </MDButton>
                        <MDButton variant="gradient" color="error" onClick={handleDeleteKriteria}>
                            DELETE
                        </MDButton>
                    </MDBox>
                </MDBox>
            </Modal>
        </>
    )
}

export default RenderDeleteModal;