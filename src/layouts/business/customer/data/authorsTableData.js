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
import { Navigate, useNavigate } from "react-router-dom";



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
      console.log('alluser&&&&&', allUsers)
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
      console.log('freeze res *********', res)
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
      // { name: "User_Name", align: "left" },
      // { name: "PhoneNumber", align: "left" },
      // { name: "Profile_Image", align: "left" },
      // { name: "function", align: "left" },
      { name: "user", align: "left" },
      { name: "status", align: "center" },
      { name: "registered", align: "center" },
      { name: "action", align: "center" },
    ],

    rows: allUsers.map((user) => (
      {
        // User_Name: <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        // {user.name}
        // </SoftTypography>,
        // PhoneNumber: <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        //   {user.phoneNo}
        // </SoftTypography>,
        // Profile_Image: <Author image={`${baseUrl}${user.profileImage}`} />,
        user: <Author image={`${baseUrl}${user.profileImage}`} name={user.name} phone={user.phoneNo} />,
        // function: <Function job="Manager" org="Organization" />,
        status: (
          <SoftBadge variant="gradient" badgeContent={user.isActive == true ? "active" : "not active"} color="success" size="xs" container />
        ),
        registered: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            {formatDate(user.createdAt)}
          </SoftTypography>
        ),
        action: (
          <Fragment>
            <SoftTypography
              component="a"
              // href="#"
              variant="caption"
              color="secondary"
              fontWeight="medium"
              onClick={() => freezeUser(user._id)}
            >
              Freez
            </SoftTypography><br />
            
            <SoftTypography
              component="a"
              // href="#"
              variant="caption"
              color="primary"
              fontWeight="medium"
            onClick={() => navigate(`/userDetail/${user._id}`)}
            >
              
                View
            </SoftTypography>
              

            {/* <SoftButton
              // component={Link}
              // to={action.route}
              variant="gradient"
              color={"success"}
              small
              iconOnly
            ><Icon sx={{ fontWeight: "bold" }}>edit</Icon>
            </SoftButton> &nbsp;
            <SoftButton
              // component={Link}
              // to={action.route}
              variant="gradient"
              color={"error"}
              small
              iconOnly
            ><Icon sx={{ fontWeight: "bold" }}>delete</Icon>
            </SoftButton> */}
          </Fragment>
        ),
      }
    ))

  }

};

export default authorsTableData;
