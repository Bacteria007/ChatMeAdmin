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

function Groupslist({ title, groups }) {
  const renderProfiles = groups.map(({ _id,group_dp, group_name}) => (
    <SoftBox key={_id} component="li" display="flex" alignItems="center" py={1} mb={1}>
      <SoftBox mr={2}>
        <SoftAvatar src={`${baseUrl}${group_dp}`} alt="something here" variant="rounded" shadow="md" />
      </SoftBox>
      <SoftBox
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
      >
        <SoftTypography variant="button" fontWeight="medium">
          {group_name}
        </SoftTypography>
        {/* <SoftTypography variant="caption" color="text">
          {"description"}
        </SoftTypography> */}
      </SoftBox>
     </SoftBox>
  ));

  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox pt={2} px={2}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </SoftTypography>
      </SoftBox>
      <SoftBox p={2}>
        <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderProfiles}
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

// Typechecking props for the ProfilesList
Groupslist.propTypes = {
  title: PropTypes.string.isRequired,
  groups: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Groupslist;
