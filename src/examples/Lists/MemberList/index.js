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

function MemberList({ title, Member }) {
  const renderProfiles = Member.map(({_id, profileImage, name, phoneNo,isActive }) => (
    <SoftBox key={_id}  display="flex" alignItems="center" justifyContent="space-between" px={1} py={0.5} >
    <SoftBox  component="li" display="flex" alignItems="center" py={1} mb={1}>
      <SoftBox mr={2}>
        <SoftAvatar src={`${baseUrl}${profileImage}`} alt="something here" variant="rounded" shadow="md" />
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
      <SoftBadge variant="gradient" badgeContent={isActive?"Active":"inActive"} color="success" size="xs" container />
      </SoftBox>
  ));

  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox pt={2} px={4}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </SoftTypography>
      </SoftBox>
      <SoftBox p={4}>
        <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderProfiles}
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

// Typechecking props for the MemberList
MemberList.propTypes = {
  title: PropTypes.string.isRequired,
  Member: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MemberList;
