/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-routers components
import { Link } from "react-router-dom";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftButton from "components/SoftButton";
import { baseUrl } from "context";
import SoftBadge from "components/SoftBadge";
import { Box, Grid } from "@mui/material";
import ListTitle from "../ListTitle";

function FriendsList({ title, friends }) {
  const count=friends.length
  const renderProfiles = friends.map(({ _id, profileImage, name, phoneNo, isActive }) => (
    <Grid key={_id} item xs={12} sm={6} md={4}>
      <SoftBox component="li" display="flex" alignItems="center" py={1} mb={1}>
        <SoftBox mr={2}>
          <SoftAvatar src={`${baseUrl}${profileImage}`} alt={`profile image of ${name}`} variant="rounded" shadow="md" />
        </SoftBox>
        <SoftBox
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
        >
          <SoftTypography variant="button" fontWeight="medium">
            {name}
          </SoftTypography>
          <SoftTypography variant="caption" color="text">
            {phoneNo}
          </SoftTypography>
        </SoftBox>
      </SoftBox>
      {/* <SoftBadge variant="gradient" badgeContent={isActive?"Active":"inActive"} color="success" size="xs" container /> */}
    </Grid>
  ));

  return (
      <SoftBox p={4}>
        <Grid container spacing={1} marginX={10}>
          {renderProfiles}
        </Grid>
      </SoftBox>
  );
}

// Typechecking props for the FriendsList
FriendsList.propTypes = {
  title: PropTypes.string.isRequired,
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendsList;
