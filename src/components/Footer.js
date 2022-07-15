import { Box, Stack, Typography } from "@mui/material";
import React from "react";

import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box>
      <Stack gap="80px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="40px" />
        <Typography variant="h7" pb="40px" mt="20px">
          Made by Navmeet
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
