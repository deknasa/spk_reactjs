import { useState } from "react";
import { subkriteriaURL } from "URL/url";
import axios from "axios";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import { Modal, Icon } from "@mui/material";

function RenderDeleteModal (props) { 
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = (event) => setOpenModal(event.currentTarget);

    const handleCloseModal = () => setOpenModal(false);

    const handleDeleteSubkriteria = async() => {
        axios.delete(`${subkriteriaURL}/deleteSubkriteria/${props.id}`, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(res => {
            console.log(res);
            if (res.status === 200 && res.statusText === "OK") {
                alert(`Berhasil menghapus data subkriteria dengan id ${props.id}`)
                handleCloseModal()
                window.location.reload(false);
            }
            else {
                alert(`Gagal menghapus data subkriteria dengan id ${props.id}`);
            }
        })
        .catch(e => console.log(e))
    }

    return(
        <>
            <MDButton variant="text" color="error"onClick={ handleOpenModal }>
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
                            <MDTypography variant="h5" component="h2">DELETE SUBKRITERIA!</MDTypography>
                        </MDBox>
                    </MDBox>
                    <MDBox mt={2}>
                        <MDTypography variant="h6" component="h2">Are you sure you want to delete subkriteria data?</MDTypography>
                    </MDBox>
                    <MDBox mt={2} display="flex" justifyContent="space-between">
                        <MDButton variant="gradient" color="secondary" onClick={handleCloseModal}>
                            CANCEL
                        </MDButton>
                        <MDButton variant="gradient" color="error" onClick={handleDeleteSubkriteria}>
                            DELETE
                        </MDButton>
                    </MDBox>
                </MDBox>
            </Modal>
        </>
    )
}

export default RenderDeleteModal;