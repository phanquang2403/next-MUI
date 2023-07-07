import { useAuth } from "@/hooks";
import {
  Box,
  Container,
  Link as MuiLink,
  Stack,
  Typography,
} from "@mui/material";
import clsx from "clsx";
import { isEmpty } from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { ROUTES } from "../contants/routes";
export function HeaderDesktop() {
  const router = useRouter();
  const { profile, logout } = useAuth();

  const isLogger = Boolean(profile?.username);

  const routerList = useMemo(
    () => ROUTES.filter((item) => !item.isRequired || isLogger),
    [isLogger]
  );

  if (isEmpty(profile)) {
    router.push("/");
  }

  return (
    <Box
      py={2}
      component="header"
      textAlign="center"
      display={{ xs: "none", md: "block" }}
    >
      <Container>
        <Stack direction={"row"} justifyContent={"flex-end"}>
          {routerList.map((route) => (
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
