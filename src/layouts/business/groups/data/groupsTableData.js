/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";
import SoftButton from "components/SoftButton";

// Images
import team2 from "assets/images/team-2.jpg";
import { Fragment, useEffect, useState } from "react";
import { Icon } from "@mui/material";
import { baseUrl } from "context";
import { formatDate } from "context";
import { Link, Navigate, useNavigate } from "react-router-dom";



function Author({ image, name, phone }) {

  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {name}
        </SoftTypography>
        {/* <SoftTypography variant="caption" color="secondary">
          {phone}
        </SoftTypography> */}
      </SoftBox>
    </SoftBox>
  );
}



const groupsTableData = () => {
  const navigate = useNavigate()
  const [allGroups, setAllGroups] = useState([])
  
  const fetchGroups = async () => {
    const result = await fetch(`${baseUrl}/allAvailableGroups`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })

    if (result.ok) {
      const fetchedGroups = await result.json()
      console.log('allGroups*********', fetchedGroups)
      setAllGroups(fetchedGroups)

    }
    else {
      console.log(`groupTable mn fetchedGroups mn error`)
    }
  }
  const freezeUser = async (id) => {
    // console.log(`userid to freeze: ${id}`)
    const result = await fetch(`${baseUrl}/freezeUser?userId=${id}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (result.ok) {
      const res = await result.json()
      console.log('freeze res *********', res)
    }
    else {
      console.log(`error in freezing`)
    }
  }
  useEffect(() => {
    fetchGroups()
  }, [])
  return {

    columns: [
      // { name: "User_Name", align: "left" },
      // { name: "PhoneNumber", align: "left" },
      // { name: "Profile_Image", align: "left" },
      // { name: "function", align: "left" },
      { name: "group_name", align: "left" },
      { name: "registered", align: "center" },
      { name: "group_members", align: "center" },
      { name: "action", align: "center" },
    ],

    rows: allGroups.map((group) => (
      {
        // User_Name: <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        // {user.name}
        // </SoftTypography>,
        // PhoneNumber: <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        //   {user.phoneNo}
        // </SoftTypography>,
        // Profile_Image: <Author image={`${baseUrl}${user.profileImage}`} />,
        group_name: <Author image={`${baseUrl}${group.group_dp}`} name={group.group_name} />,
        // function: <Function job="Manager" org="Organization" />,
        group_members: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium" >{group.members.length}</SoftTypography>
        ),
        registered: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            {formatDate(group.createdAt)}
          </SoftTypography>
        ),
        action: (
          <Fragment>
            <SoftButton
              variant="gradient"
              color={"info"}
              size={"small"}
              text
            >
              <SoftTypography
                variant="caption"
                color="white"
                fontWeight="large"
                onClick={() => navigate(`/groupDetail/${group._id}`)}
              > View  </SoftTypography>
            </SoftButton>
          </Fragment>
        ),
      }
    ))

  }

};

export default groupsTableData;
