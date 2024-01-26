
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
// import projectsTableData from "./data/projectsTableData";

function ViewGroup() {
    // const { columns, rows } = memberTableData()

    const params = useParams();
    const { id, } = params
    const [groupdetails, setGroupdetails] = useState([]);
    const [members, setMembers] = useState([])
    const [admins, setAdmins] = useState([])

    // const columns = [
    //     { name: "user", align: "left" },
    //     { name: "status", align: "center" },
    //     { name: "registered", align: "center" },
    //     { name: "action", align: "center" },
    // ]

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

    useEffect(async () => {
        await fetchGroupDetails()
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
                    <SoftBox display="flex" flexDirection="column" pt={2} px={4}>
                            <SoftBox mr={2}>
                                <SoftAvatar src={`${baseUrl}${groupdetails.group_dp}`} alt={name} size="sm" variant="rounded" />
                            </SoftBox>
                            <SoftTypography variant="h5">{groupdetails ? groupdetails.group_name : null}</SoftTypography>
                            {/* <SoftTypography variant="caption" color="secondary" fontWeight="medium">
                                {formatDate(groupdetails ? groupdetails.createdAt : null)}
                            </SoftTypography> */}

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
                            {console.log(' there is group details', groupdetails.group_admin)}
                            {/* <Table columns={columns} rows={rows} /> */}

                            {/* <div>
                                <Table >
                                    <thead>
                                        <tr>
                                            <th>Member</th>
                                            <th>Phone</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {groupdetails.members?groupdetails.members.map((item) => {
                                            <tr key={item._id}>
                                                {console.log("in tble",item.name)}
                                                <div>
                                                <img
                                                     src={`${baseUrl}${item.profileImage}`}
                                                    alt="Profile Image"
                                                    style={{ marginLeft: 25, height: 50, width: 50 }}
                                                />
                                                <td>{item.name}</td>
                                                <td>{item.phoneNo}</td></div>
                                            </tr>
                                        }):null}
                                    </tbody>
                                </Table>
                            </div> */}
                            <AdminList title="Admin" Admin={admins} />
                            <MemberList title="Member" Member={members} />
                        </SoftBox>
                    </Card >
                </SoftBox >
            </SoftBox >
            {/* <Footer /> */}
        </DashboardLayout >
    );
}

export default ViewGroup;
