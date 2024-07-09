import { Box } from '@mui/material'
import React from 'react'

const CustomTab = ({children}) => {
  return (
    <Box width={"100%"} p={1}>
        {children}
    </Box>
  )
}

export default CustomTab