import { Box } from '@mui/material'
import React from 'react'

const CustomTab = ({children}) => {
  return (
    <Box width={"100%"} minHeight={"100px"} height={"350px"} p={2} sx={{overflowY: "scroll"}}>
        {children}
    </Box>
  )
}

export default CustomTab