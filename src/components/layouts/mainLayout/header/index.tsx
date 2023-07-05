import { Box } from "@mui/material";
import { HeaderMobile } from "./header-mobile";
import { HeaderDesktop } from "./header-desktop";

export default function Header() {
  return (
    <>
      <HeaderMobile />
      <HeaderDesktop />
    </>
  );
}
