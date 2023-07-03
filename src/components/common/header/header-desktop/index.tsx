import Link from "next/link";
import { Box, Container, Stack, Link as MuiLink } from "@mui/material";
import { ROUTES } from "../routes";

export function HeaderDesktop() {
  return (
    <Box
      py={2}
      component="header"
      textAlign="center"
      display={{ xs: "none", md: "block" }}
    >
      headerDesktop
      <Container>
        <Stack direction={"row"} justifyContent={"flex-end"}>
          {ROUTES.map((route) => (
            <Link key={route.path} href={route.path} passHref>
              {/* <p className="ml-2 text-green-600">{route.label}</p> */}

              <MuiLink sx={{ ml: 2 }}>{route.label}</MuiLink>
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
