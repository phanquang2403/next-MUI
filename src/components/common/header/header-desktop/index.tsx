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
import { useAuth } from "@/hooks";

export function HeaderDesktop() {
  const router = useRouter();
  const { profile, logout } = useAuth();

  const isLogger = Boolean(profile?.username);
  const routeByAuth = ROUTES.filter((rou) => !rou.isRequired || isLogger);
  return (
    <Box
      py={2}
      component="header"
      textAlign="center"
      display={{ xs: "none", md: "block" }}
    >
      <Container>
        <Stack direction={"row"} justifyContent={"flex-end"}>
          {routeByAuth.map((route) => (
            <Link key={route.path} href={route.path} passHref>
              <MuiLink
                component={"p"}
                sx={{ ml: 2 }}
                className={clsx({ active: router.pathname === route.path })}
              >
                {route.label}
              </MuiLink>
            </Link>
          ))}

          {isLogger && (
            <Link href={"/"} passHref onClick={logout}>
              <MuiLink component={"p"} sx={{ ml: 2 }}>
                Logout
              </MuiLink>
            </Link>
          )}

          {!isLogger && (
            <Link href={"/login"} passHref>
              <MuiLink component={"p"} sx={{ ml: 2 }}>
                Login
              </MuiLink>
            </Link>
          )}

          {profile?.username && (
            <Typography sx={{ ml: 2, fontSize: 18 }}>
              {profile?.username}
            </Typography>
          )}
        </Stack>
      </Container>
    </Box>
  );
}
