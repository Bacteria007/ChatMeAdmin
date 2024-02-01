/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import { Fragment, useEffect, useState } from "react";
import { Badge, Button, Icon, Typography } from "@mui/material";
import { baseUrl } from "context";
import { useNavigate } from "react-router-dom";
import { formatDateDifference } from "context";
import AppColors from "assets/colors/AppColors";



export function Author({ image, name, phone }) {

  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {name}
        </SoftTypography>
        <SoftTypography variant="caption" color="secondary">
          {phone}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}



const authorsTableData = () => {
  const navigate = useNavigate()
  const [allUsers, setAllUsers] = useState([])
  const fetchUsers = async () => {
    console.log('jjjjjjjjj')
    const result = await fetch(`${baseUrl}/allUsers`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })

    if (result.ok) {
      const fetchedUsersList = await result.json()
      console.log('alluser*********', fetchedUsersList)
      setAllUsers(fetchedUsersList)

    }
    else {
      console.log(`authorsTable mn fetchusers mn error`)
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
      console.log('freeze res +++++', res)
      fetchUsers()
    }
    else {
      console.log(`error in freezing`)
    }
  }
  const unfreezeUser = async (id) => {
    // console.log(`userid to freeze: ${id}`)
    const result = await fetch(`${baseUrl}/unfreezeUser?userId=${id}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (result.ok) {
      const res = await result.json()
      console.log('un freeze res -------', res)
      fetchUsers()

    }
    else {
      console.log(`error in freezing`)
    }
  }
  useEffect(() => {
    fetchUsers()
  }, [])
  return {
    columns: [
      { name: "user", align: "left" },
      { name: "status", align: "center" },
      { name: "registered", align: "center" },
      { name: "action", align: "center" },
    ],

    rows: allUsers.map((user) => (
      {
        user: <Author image={`${baseUrl}${user.profileImage}`} name={user.name} phone={user.phoneNo} />,
        status: (
          <SoftBadge variant="gradient" badgeContent={user.isActive == true ? "ACTIVE" : "INACTIVE"} color={user.isActive == true ? "success" : "secondary"} size="xs" container />

          // <SoftTypography variant="caption" color={user.isActive == true ? "primary" : "secondary"} fontWeight="medium">
          //   {user.isActive == true ? "ACTIVE" : "INACTIVE"}
          // </SoftTypography>
        ),
        registered: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            {new Date(user.createdAt).toLocaleDateString("en-GB")}
            {/* {formatDateDifference(user.createdAt)} */}
          </SoftTypography>
        ),
        action: (
          <Fragment>
            {user.isActive ==true?
            (<Button variant="text" type="button" size="small" style={{ backgroundColor: AppColors.freez }}>
              <SoftTypography
                variant="caption"
                color="black"
                fontWeight="large"
                onClick={() => freezeUser(user._id)}
              >
                Freez
              </SoftTypography><br /> 
            </Button> )
            :
            (<Button variant="text" type="button" size="small" style={{ backgroundColor: AppColors.freez }}>
              <SoftTypography
                variant="caption"
                color="black"
                fontWeight="large"
                onClick={() => unfreezeUser(user._id)}
              >
                Unfreez
              </SoftTypography><br /> 
            </Button>)
      } &nbsp;
            <Button variant="text" type="button" size="small" style={{ backgroundColor: AppColors.view }}>
              <SoftTypography
                variant="caption"
                color="black"
                fontWeight="large"
                onClick={() => navigate(`/userDetail/${user._id}`)}
              > View  </SoftTypography>
            </Button>
          </Fragment>
        ),
      }
    ))

  }

};

export default authorsTableData;