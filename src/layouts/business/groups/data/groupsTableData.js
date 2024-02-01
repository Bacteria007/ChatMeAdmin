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

  useEffect(() => {
    fetchGroups()
  }, [])
  return {

    columns: [
      { name: "group_name", align: "left" },
      { name: "created", align: "center" },
      { name: "group_members", align: "center" },
      { name: "action", align: "center" },
    ],

    rows: allGroups.map((group) => (
      {
        group_name: <Author image={`${baseUrl}${group.group_dp}`} name={group.group_name} />,
        group_members: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium" >{group.members.length}</SoftTypography>
        ),
        created: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            
            {new Date(group.createdAt).toLocaleDateString("en-GB")}
            {/* {formatDateDifference(group.createdAt)} */}
          </SoftTypography>
        ),
        action: (
          <Fragment>
            <Button variant="text" type="button" size="small" style={{ backgroundColor: AppColors.view }}>
              <SoftTypography
                variant="caption"
                color="black"
                fontWeight="large"
                onClick={() => navigate(`/groupDetail/${group._id}`)}
              > View  </SoftTypography>
            </Button>
          </Fragment>
        ),
      }
    ))

  }

};

export default groupsTableData;
