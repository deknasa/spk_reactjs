import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userURL } from "URL/url";
import axios from "axios";
import Cookies from "js-cookie";
import MDBox from "components/MDBox";
import MDBadge from "components/MDBadge";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import { Icon, Modal, Menu } from "@mui/material";
import NotificationItem from "examples/Items/NotificationItem";

function RenderLogoutModal (props) { 
    const navigate = useNavigate();

    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = (event) => setOpenModal(event.currentTarget);
    const handleCloseModal = () => setOpenModal(false);

    const handleLogout = async() => {
        axios.get(`${userURL}/logout/${props.id}`, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(res => {
            console.log(res);
            if (res.status === 200 && res.statusText === "OK") {
                Cookies.remove(
                    "authentication", 
                   )
                navigate('/')
                alert(`${res.data.msg}`)
            }
            else {
                alert(`Gagal logout`);
            }
        }).catch(e => console.log(e))
    }

    return(
        <>
        <NotificationItem icon={<Icon>logout</Icon>} title="Logout" onClick={handleOpenModal}/>

        <Modal
        open={openModal}
        // onClose={handleCloseModal}
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
                {/* <MDBox display="flex" justifyContent="center" alignItems="center">
                    <Icon fontSize="large" color="error">warning</Icon>
                    <MDBox ml={2} fontSize={20} fontWe ight='bold'>
                        <MDTypography variant="h5" component="h2">LOG OUT</MDTypography>
                    </MDBox>
                </MDBox> */}
                <MDBox mt={2}>
                    <MDTypography variant="h6" component="h2">are you sure you want to leave us?</MDTypography>
                </MDBox>
                <MDBox mt={2} display="flex" justifyContent="space-between">
                    <MDButton variant="gradient" color="secondary" onClick={handleCloseModal}>
                        NO
                    </MDButton>
                    <MDButton variant="gradient" color="error" onClick={handleLogout}>
                        YES
                    </MDButton>
                </MDBox>
            </MDBox>
        </Modal>
        </>
    )
}

export default RenderLogoutModal;