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
import helpTableData from "./data/helpTableData";
import Sidenav from "examples/Sidenav";
import shopRoutes from "routes/shopRoutes";
import { useState } from "react";
import { useEffect } from "react";
import { appName } from "context";
// import projectsTableData from "./data/projectsTableData";

function UserHelp() {
  const { columns, rows } = helpTableData()
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
              <SoftTypography variant="h6">Total : {rows.length}</SoftTypography>
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

export default UserHelp;
