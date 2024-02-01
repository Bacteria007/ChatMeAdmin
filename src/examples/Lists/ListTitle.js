import SoftBox from 'components/SoftBox'
import SoftTypography from 'components/SoftTypography'
import React from 'react'

const ListTitle = (title) => {
    console.log(title)
    return (
        <SoftBox pt={2} px={4}>
            <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                {title.title} {title.count == undefined ? "" : ":"} {title.count == 0 || title.count == undefined ? title.count : title.count}
            </SoftTypography>
        </SoftBox>
    )
}
export default ListTitle
