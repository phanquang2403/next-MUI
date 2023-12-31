import { Adminlayout, Mainlayout } from "@/components/layouts";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

type Props = {};

const PageAbout = (props: Props) => {
  return (
    <Box>
      <Typography component={"h1"} variant="h3" color={"primary.main"}>
        <div>page about</div>
      </Typography>

      <Button>Submit</Button>
    </Box>
  );
};

PageAbout.Layout = Mainlayout;

export default PageAbout;
