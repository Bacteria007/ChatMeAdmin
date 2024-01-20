
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
import ProfilesList from "examples/Lists/ProfilesList";
import FriendsList from "examples/Lists/FriendsList";
import Groupslist from "examples/Lists/GroupsList";
// import projectsTableData from "./data/projectsTableData";

function ViewUser() {
    const params = useParams();
    const { id } = params
    const [userdetails, setUserdetails] = useState({});
    const [friends, setFriends] = useState([])
    const [joinedGroups, setJoinedGroups] = useState([])
   
    const fetchUserDetails = async () => {
        console.log('jjjjjjjjj', id)
        const result = await fetch(`${baseUrl}/singleUserDetail?userId=${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })

        if (result.ok) {
            const userDetailsObj = await result.json()
            console.log('alluser*********', userDetailsObj)
            setUserdetails(userDetailsObj.user.user)
            setJoinedGroups(userDetailsObj.user.groups)
            setFriends(userDetailsObj.user.friends)

            // console.log('alluser*********')

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
                            <SoftTypography  variant="h5">User Details</SoftTypography>
                                        <Sidenav
                color="info"
                brandName={appName}
                routes={shopRoutes}
            />
            <SoftBox py={3}>
                <SoftBox mb={3}>
                    <Card>
                        <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                            <SoftTypography variant="h3">{userdetails && userdetails.name}</SoftTypography>
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
                                      <FriendsList title="Friends" friends={friends} />
                                      <Groupslist title="Groups" groups={joinedGroups}/>

                        </SoftBox>
                    </Card>
                </SoftBox>
            </SoftBox>
            {/* <Footer /> */}
        </DashboardLayout>
    );
}

export default ViewUser;
