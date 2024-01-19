
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
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseUrl } from "context";
// import projectsTableData from "./data/projectsTableData";

function ViewUser() {
    const params = useParams();
    const {id}=params
    const [userdetails, setUserdetails] = useState([]);
    const fetchUserDetails = async () => {
        console.log('jjjjjjjjj', id)
        const result = await fetch(`${baseUrl}/singleUserDetail?userId=${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })

        if (result.ok) {
            const fetchedUsersList = await result.json()
            console.log('alluser*********', fetchedUsersList)
          
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
            <DashboardNavbar />
            <Sidenav
                color="info"
                brandName={appName}
                routes={shopRoutes}
            />
            <SoftBox py={3}>
                <SoftBox mb={3}>
                    <Card>
                        <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                            <SoftTypography variant="h6">Username</SoftTypography>
                        </SoftBox>
                        <SoftBox
                            sx={{
                                "& .MuiTableRow-root:not(:last-child)": {
                                    "& td": {
                                        borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                                            `${borderWidth[1]} solid ${borderColor}`,
                                    },
                                },
                            }}
                        >
                            {/* <Table columns={[]} rows={[{ name: "user", align: "left" },{ name: "Friends", align: "left" },{ name: "Groups", align: "left" }]} /> */}
                       
                        </SoftBox>
                    </Card>
                </SoftBox>
            </SoftBox>
            {/* <Footer /> */}
        </DashboardLayout>
    );
}

export default ViewUser;
