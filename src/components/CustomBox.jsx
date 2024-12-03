import React from 'react';
import Box from '@mui/material/Box';
import background from "../assets/background.png"

const CustomBox = ({ children, ...props }) => {
  return (
    <Box
      display="flex"
      justifyContent="safe center"
      alignItems="safe center"
      minHeight="100vh"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '400px 400px',
        height: '100vh', 
        width: '100%',
    }}

      {...props}
    >
      {children}
    </Box>
  );
};

export default CustomBox;