
// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Data
import Sidenav from "examples/Sidenav";
import shopRoutes from "routes/shopRoutes";
import { appName } from "context";
import { json, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseUrl } from "context";
import ProfilesList from "examples/Lists/ProfilesList";
import FriendsList from "examples/Lists/FriendsList";
import Groupslist from "examples/Lists/GroupsList";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";
// import projectsTableData from "./data/projectsTableData";

function ViewDetail() {
    const params = useParams();
    const { id, } = params
    const [details, setDetails] = useState({});

    const fetchUserDetails = async () => {
        console.log('jjjjjjjjj', id)
        const result = await fetch(`${baseUrl}/singleHelpRequest?Id=${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })

        if (result.ok) {
            const userDetailsObj = await result.json()
            console.log('alluser*********', userDetailsObj.res)
            setDetails(userDetailsObj.res)

        }
        else {
            console.log(`authorsTable mn fetchusers mn error`)
        }
    }
    useEffect(() => {
        fetchUserDetails()
    }, [])

    return (
        <DashboardLayout>
            <SoftTypography variant="h5">User Details</SoftTypography>
            <Sidenav
                color="info"
                brandName={appName}
                routes={shopRoutes}
            />
            <SoftBox py={3}>
                <SoftBox mb={3}>
                    <Card>
                        <SoftBox display="flex" alignItems="center" px={1} py={0.5} justifyContent="space-between">

                            <SoftBox display="flex" flexDirection="column" p={3}>
                                
                                <SoftTypography variant="h3" fontWeight="medium">
                                    {details ? details.senderName : null}
                                </SoftTypography>
                                <SoftTypography variant="caption" color="secondary">
                                    {details ? details.message : null}
                                </SoftTypography>
                                <SoftBadge variant="gradient" badgeContent={details.status} color="success" size="xs" container />
                            </SoftBox>
                        </SoftBox>
                    </Card>
                </SoftBox>
            </SoftBox>
            {/* <Footer /> */}
        </DashboardLayout>
    );
}

export default ViewDetail;
