// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Data
import groupsTableData from "./data/groupsTableData";
import Sidenav from "examples/Sidenav";
import shopRoutes from "routes/shopRoutes";
import { useState } from "react";
import { useEffect } from "react";
import { appName } from "context";

function Groups() {
  const { columns, rows } = groupsTableData()
  console.log("@@@@@@@@@@@@@@",rows)

  // const { columns: prCols, rows: prRows } = projectsTableData;
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Sidenav
        color="info"
        brandName={appName}
        routes={shopRoutes}       
      /> 
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">Users List</SoftTypography>
            </SoftBox>
            <SoftBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              <Table columns={columns} rows={rows} />
            </SoftBox>
          </Card>
        </SoftBox>
      </SoftBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Groups;
