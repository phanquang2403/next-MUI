import Link from "next/link";
import {
  Box,
  Container,
  Stack,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import { ROUTES } from "../routes";
import { useRouter } from "next/router";
import clsx from "clsx";

export function HeaderDesktop() {
  const router = useRouter();
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
              {/* <p className={clsx({ active: router.pathname === route.path })}>
                {route.label}
              </p> */}

              <Typography
                className={clsx({ active: router.pathname === route.path })}
              >
                {route.label}
              </Typography>

              {/* <MuiLink
                sx={{ ml: 2 }}
                className={clsx({ active: router.pathname === route.path })}
              >
                {route.label}
              </MuiLink> */}
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}