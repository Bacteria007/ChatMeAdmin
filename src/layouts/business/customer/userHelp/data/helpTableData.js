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
import { Button, Icon } from "@mui/material";
import { baseUrl } from "context";
import { formatDate } from "context";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AppColors from "assets/colors/AppColors";



function Author({ name }) {
  // console.log('llllllllll',name)
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5} ml={2}>
      {/* <SoftBox mr={2}>
        <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SoftBox> */}
      <SoftTypography variant="button" fontWeight="medium">
        {name}
      </SoftTypography>
      {/* <SoftTypography variant="caption" color="secondary">
          {phone}
        </SoftTypography> */}
    </SoftBox>
  );
}



const helpTableData = () => {
  const navigate = useNavigate()
  const [allHelpReq, setallHelpReq] = useState([])

  const fetchHelpRequests = async () => {
    const result = await fetch(`${baseUrl}/allHelpRequests`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })

    if (result.ok) {
      const fetchedUsersList = await result.json()
      console.log('alluser*********', fetchedUsersList.res)
      setallHelpReq(fetchedUsersList.res)
    }
    else {
      console.log(`helpTable mn fetchHelpRequests mn error`)
    }
  }
  
  useEffect(() => {
    fetchHelpRequests()
  }, [])
  return {

    columns: [
      { name: "sender_name", align: "left" },
      { name: "issue", align: "left" },
      { name: "status", align: "center" },
      { name: "action", align: "center" },
    ],

    rows: allHelpReq.map((user) => (

      {
        // User_Name: <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        // {user.name}
        // </SoftTypography>,
        // PhoneNumber: <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        //   {user.phoneNo}
        // </SoftTypography>,
        // Profile_Image: <Author image={`${baseUrl}${user.profileImage}`} />,
        sender_name: <Author name={user.senderName} />,
        // function: <Function job="Manager" org="Organization" />,
        issue: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            {user.message}
          </SoftTypography>
        ),
        status: (
          <SoftBadge variant="gradient" badgeContent={user.status} color="success" size="xs" container />
        ),
        action: (
          <Button variant="text" type="button" size="small" style={{ backgroundColor: AppColors.view }}>
            <SoftTypography
              variant="caption"
              color="black"
              fontWeight="large"
              onClick={() => navigate(`/helpMsgDetail/${user._id}`)}
            > View  </SoftTypography>
          </Button>
        ),
      }
    ))

  }

};

export default helpTableData;
