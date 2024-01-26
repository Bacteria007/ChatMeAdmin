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
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";



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



const memberTableData = () => {
  const navigate = useNavigate()
  const [groupdetails, setGroupdetails] = useState({});
  const params = useParams();
    const { id, } = params

  const fetchGroupDetails = async () => {
    console.log('jjjjjjjjj', id)
    const result = await fetch(`${baseUrl}/singleGroupDetail?groupId=${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })

    if (result.status=="200") {
        const res = await result.json()
        console.log('all group mem tbl=================', res.groupDetail.group_name)
        setGroupdetails(res.groupDetail)
        console.log('single group detail mem tbl*****************', res.groupDetail.members)

    }
    else {
        console.log(`membersTable mn fetchusers mn error`)
    }
}

  useEffect(() => {
      fetchGroupDetails()
  }, [])
  return {

     columns : [
      { name: "user", align: "left" },
      { name: "status", align: "center" },
      { name: "registered", align: "center" },
      { name: "action", align: "center" },
  ],

  rows: [
  // groupdetails.members.map((user) => (
        {user: <Author image={'`${baseUrl}${user.profileImage}`'} name={'user.name'} phone={'user.phoneNo'} />,
        status: (
          <SoftBadge variant="gradient" badgeContent=
          // {user.isActive == true ? "active" : "inActive"} 
          {"active"}
          color="success" size="xs" container />
        ),
        registered: (
          <SoftTypography variant="caption" color="secondary" fontWeight="medium">
            {/* {formatDate(user.createdAt)} */}
            65879879
          </SoftTypography>
        ),
        action: (
          <Fragment>
            <SoftButton
              variant="gradient"
              color={"success"}
              size={"small"}
              text
            >
              <SoftTypography
                variant="caption"
                color="white"
                fontWeight="large"               
                onClick={() => freezeUser(user._id)}
              >
                Freez
              </SoftTypography><br /> {/* <Icon sx={{ fontWeight: "bold" }}>edit</Icon> */}
            </SoftButton> &nbsp;
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
              onClick={() => navigate(`/userDetail/${user._id}`)}
              > View  </SoftTypography>
            </SoftButton>
          </Fragment>
        ),
     },
     {user: <Author image={'`${baseUrl}${user.profileImage}`'} name={'user.name'} phone={'user.phoneNo'} />,
     status: (
       <SoftBadge variant="gradient" badgeContent=
       // {user.isActive == true ? "active" : "inActive"} 
       {"active"}
       color="success" size="xs" container />
     ),
     registered: (
       <SoftTypography variant="caption" color="secondary" fontWeight="medium">
         {/* {formatDate(user.createdAt)} */}
         65879879
       </SoftTypography>
     ),
     action: (
       <Fragment>
         <SoftButton
           variant="gradient"
           color={"success"}
           size={"small"}
           text
         >
           <SoftTypography
             variant="caption"
             color="white"
             fontWeight="large"               
             onClick={() => freezeUser(user._id)}
           >
             Freez
           </SoftTypography><br /> {/* <Icon sx={{ fontWeight: "bold" }}>edit</Icon> */}
         </SoftButton> &nbsp;
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
           onClick={() => navigate(`/userDetail/${user._id}`)}
           > View  </SoftTypography>
         </SoftButton>
       </Fragment>
     ),
  }
,        {user: <Author image={'`${baseUrl}${user.profileImage}`'} name={'user.name'} phone={'user.phoneNo'} />,
status: (
  <SoftBadge variant="gradient" badgeContent=
  // {user.isActive == true ? "active" : "inActive"} 
  {"active"}
  color="success" size="xs" container />
),
registered: (
  <SoftTypography variant="caption" color="secondary" fontWeight="medium">
    {/* {formatDate(user.createdAt)} */}
    65879879
  </SoftTypography>
),
action: (
  <Fragment>
    <SoftButton
      variant="gradient"
      color={"success"}
      size={"small"}
      text
    >
      <SoftTypography
        variant="caption"
        color="white"
        fontWeight="large"               
        onClick={() => freezeUser(user._id)}
      >
        Freez
      </SoftTypography><br /> {/* <Icon sx={{ fontWeight: "bold" }}>edit</Icon> */}
    </SoftButton> &nbsp;
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
      onClick={() => navigate(`/userDetail/${user._id}`)}
      > View  </SoftTypography>
    </SoftButton>
  </Fragment>
),
}

    ]
    // ))
  }

};

export default memberTableData;
