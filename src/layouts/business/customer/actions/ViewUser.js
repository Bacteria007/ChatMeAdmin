
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
import { Author } from "../data/authorsTableData";
import { Avatar, Box, MenuList } from "@mui/material";
import ListTitle from "examples/Lists/ListTitle";

function ViewUser() {
    const params = useParams();
    const { id } = params
    const [userdetails, setUserdetails] = useState({});
    const [friends, setFriends] = useState([])
    const [joinedGroups, setJoinedGroups] = useState([])

    const fetchUserDetails = async () => {
        console.log('id===', id)
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
                                <SoftBox mr={2} display={'flex'} flexDirection="row" alignItems="center">
                                    <Card style={{ justifyContent: 'center', alignItems: 'center', marginRight: 8, height: 70, width: 70 }}>
                                        <Avatar style={{ height: 55, width: 55, borderRadius: '100%' }} src={`${baseUrl}${userdetails.profileImage}`} alt={`profileImage of ${userdetails.name}`} size="sm" variant="rounded" />
                                    </Card>
                                    <Box display={"flex"} flexDirection={"column"} alignItems={"flex-start"}>
                                        <SoftTypography variant="h3" fontWeight="medium">
                                            {userdetails ? userdetails.name : null}
                                        </SoftTypography>
                                        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
                                            {userdetails ? userdetails.phoneNo : null}
                                        </SoftTypography>
                                    </Box>
                                </SoftBox>
                            </SoftBox>
                            <SoftBox display="flex" flexDirection="column" p={3}>
                                <SoftBadge variant="gradient" badgeContent={userdetails.isActive === true ? "active" : "inActive"} color="success" size="xs" container />
                            </SoftBox>
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
                          
                            <ListTitle title={"Friends"} count={friends.length} />
                            <FriendsList title="Friends" friends={friends} />
                            <ListTitle title={"Groups"} count={joinedGroups.length} />
                            <Groupslist title="Groups" groups={joinedGroups} />

                        </SoftBox>
                    </Card>
                </SoftBox>
            </SoftBox>
            {/* <Footer /> */}
        </DashboardLayout>
    );
}

export default ViewUser;
