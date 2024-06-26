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
// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import { baseUrl } from "context";
import SoftBadge from "components/SoftBadge";

function AdminList({ title, Admin }) {

  return (
    <SoftBox sx={{ height: "100%" }}>
      <SoftBox p={4}>
        <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <SoftBox key={Admin._id} display="flex" alignItems="center" justifyContent="space-between" px={1} py={0.5} >
            <SoftBox component="li" display="flex" alignItems="center" py={1} mb={1}>
              <SoftBox mr={2}>
                <SoftAvatar src={`${baseUrl}${Admin.profileImage}`} alt="something here" variant="rounded" shadow="md" />
              </SoftBox>
              <SoftBox
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="center"
              >
                <SoftTypography variant="button" fontWeight="medium">
                  {Admin.name}
                </SoftTypography>
                <SoftTypography variant="caption" color="text">
                  {Admin.phoneNo}
                </SoftTypography>
              </SoftBox>
            </SoftBox>
            <SoftBadge variant="gradient" badgeContent={Admin.isActive ? "Active" : "inActive"} color="success" size="xs" container />
          </SoftBox>
        </SoftBox>
      </SoftBox>
    </SoftBox>
  );
}

// Typechecking props for the AdminList
AdminList.propTypes = {
  title: PropTypes.string.isRequired,
  Admin: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AdminList;
