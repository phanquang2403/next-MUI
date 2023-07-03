import { Box } from "@mui/material";

export function HeaderMobile() {
  return (
    <Box
      py={2}
      textAlign="center"
      component="header"
      display={{ xs: "block", md: "none" }}
    >
      headerMobile
    </Box>
  );
}
