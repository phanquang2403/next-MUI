import { Mainlayout } from "@/components/layouts";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

type Props = {};

const WorksPage = (props: Props) => {
  return (
    <Box>
      <Typography component={"h1"} variant="h3" color={"primary.main"}>
        <div>WorksPage</div>
      </Typography>

      <Button>Submit</Button>
    </Box>
  );
};

WorksPage.Layout = Mainlayout;

export default WorksPage;
