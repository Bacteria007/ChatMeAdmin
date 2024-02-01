
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
import { Fragment, useEffect, useState } from "react";
import { baseUrl } from "context";
import ProfilesList from "examples/Lists/ProfilesList";
import FriendsList from "examples/Lists/FriendsList";
import Groupslist from "examples/Lists/GroupsList";
import SoftBadge from "components/SoftBadge";
import SoftButton from "components/SoftButton";
import { formatDate } from "context";
import SoftAvatar from "components/SoftAvatar";
import { Author } from "layouts/business/customer/data/authorsTableData";
import memberTableData from "../memberData/memberTableData";
import MemberList from "examples/Lists/MemberList";
import AdminList from "examples/Lists/AdminList";
import { Avatar, Box } from "@mui/material";
import ListTitle from "examples/Lists/ListTitle";
// import projectsTableData from "./data/projectsTableData";

function ViewGroup() {
    // const { columns, rows } = memberTableData()

    const params = useParams();
    const { id, } = params
    const [groupdetails, setGroupdetails] = useState([]);
    const [members, setMembers] = useState([])
    const [admins, setAdmins] = useState([])

    const fetchGroupDetails = async () => {
        console.log('jjjjjjjjj', id)
        const result = await fetch(`${baseUrl}/singleGroupDetail?groupId=${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })

        if (result.status == '200') {
            const res = await result.json()
            console.log('all group view *********', res.groupDetail)
            setGroupdetails(res.groupDetail)
            setAdmins(res.groupDetail.group_admin)
            setMembers(res.groupDetail.members)
            console.log('single group detail view*****************', res.groupDetail.members)

        }
        else {
            console.log(`memberDetailTable mn fetchusers mn error`)
        }
    }

    useEffect(() => {
        fetchGroupDetails()
    }, [])
    // =======================authersTble

    return (
        <DashboardLayout>
            <SoftTypography variant="h5">Group Details</SoftTypography>
            <Sidenav
                color="info"
                brandName={appName}
                routes={shopRoutes}
            />
            <SoftBox py={3}>
                <SoftBox mb={3}>
                    <Card>
                        {/* <SoftBox display="flex" alignItems="center" px={1} py={0.5} justifyContent="space-between"> */}
                        <SoftBox display="flex" flexDirection="column" p={3}>
                            <SoftBox mr={2} display={'flex'} flexDirection="row" alignItems="center">
                                <Card style={{ justifyContent: 'center', alignItems: 'center', marginRight: 8, height: 70, width: 70 }}>
                                    <Avatar style={{ height: 55, width: 55, borderRadius: '100%' }} src={`${baseUrl}${groupdetails.group_dp}`} alt={name} size="sm" variant="rounded" />
                                </Card>
                                <Box display={"flex"} flexDirection={"column"} alignItems={"flex-start"}>
                                    <SoftTypography variant="h5">{groupdetails ? groupdetails.group_name : null}</SoftTypography>
                                    {/* <SoftTypography variant="caption" color="secondary" fontWeight="medium">
                                        {formatDate(groupdetails ? groupdetails.createdAt : null)}
                                    </SoftTypography> */}
                                </Box>
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
                            <ListTitle title={"Admin"} count={admins.length} />
                            <AdminList title="Admin" Admin={admins} />
                            <ListTitle title={"Members"} count={members.length} />
                            <MemberList title="Members" Member={members} />
                        </SoftBox>
                    </Card >
                </SoftBox >
            </SoftBox >
            {/* <Footer /> */}
        </DashboardLayout >
    );
}

export default ViewGroup;
